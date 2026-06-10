# Firebase Security Rules

This document outlines the recommended Firebase Security Rules for The Green Thumb application to protect against unauthorized access and malicious activities.

## Firestore Security Rules

Copy these rules to Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Helper function to check if user owns the document
    function isOwner(userId) {
      return request.auth.uid == userId;
    }
    
    // Gardens collection - users can only read/write their own gardens
    match /gardens/{userId} {
      allow read: if isOwner(userId);
      allow write: if isOwner(userId);
    }
    
    // Bug reports collection - anyone can read, authenticated users can write
    match /bug_reports/{reportId} {
      allow read: if isAuthenticated();
      allow create: if isAuthenticated();
      allow update, delete: if false; // Prevent modification after creation
    }
    
    // Default deny all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Authentication Security Settings

### 1. Enable Email/Password Sign-in
- Firebase Console → Authentication → Sign-in method
- Enable Email/Password provider

### 2. Enable Google Sign-in
- Firebase Console → Authentication → Sign-in method
- Enable Google provider
- Add your custom domain to authorized domains

### 3. Configure Email Verification
- Firebase Console → Authentication → Templates → Email verification
- Customize the verification email template

### 4. Configure Password Reset
- Firebase Console → Authentication → Templates → Password reset
- Customize the password reset email template

### 5. Set Up Authorized Domains
- Firebase Console → Authentication → Sign-in method → Authorized domains
- Add your custom GitHub Pages domain (e.g., `yourdomain.com`)
- Add `localhost` for development

## reCAPTCHA Configuration

### 1. Get reCAPTCHA v3 Site Key
- Go to https://www.google.com/recaptcha/admin
- Create a new reCAPTCHA v3 site
- Add your custom domain
- Copy the site key and secret key

### 2. Update Site Key in Code
Replace `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` (test key) with your production site key in:
- `index.html` line 17 (script tag)
- `index.html` line 4094 (handleAuthSubmit function)
- `index.html` line 3917 (submitBugReport function)

### 3. Verify reCAPTCHA in Firebase (Optional)
For additional security, you can verify reCAPTCHA tokens on the server side using Firebase Admin SDK or Cloud Functions.

## Additional Security Recommendations

### 1. Enable App Check
Firebase App Check helps protect your backend resources from abuse, such as billing fraud or phishing.

- Firebase Console → App Check
- Enable App Check for your web app
- Register your reCAPTCHA v3 site key

### 2. Set Up Cloud Functions for Sensitive Operations
Consider moving sensitive operations to Cloud Functions:
- Email verification logic
- Password strength validation
- Rate limiting (server-side)
- Data sanitization

### 3. Monitor Usage
- Firebase Console → Usage and billing
- Set up alerts for unusual activity
- Monitor Firestore read/write operations
- Monitor Authentication sign-ups

### 4. Enable Cloud Storage Security (if using)
If you add Cloud Storage for file uploads:

```javascript
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

## Rate Limiting

The app currently implements client-side rate limiting for bug reports (1 report per minute). For production, consider:

1. **Server-side rate limiting** using Cloud Functions
2. **IP-based rate limiting** for anonymous users
3. **User-based rate limiting** for authenticated users

## Data Validation

Ensure all data is validated before saving to Firestore:

1. **Email validation** - Use Firebase Auth built-in validation
2. **Password validation** - Implemented client-side (8+ chars, uppercase, lowercase, number)
3. **Bug report validation** - Required description field
4. **Garden data validation** - Validate plant IDs, dates, and status values

## Security Checklist

- [ ] Enable Email/Password sign-in
- [ ] Enable Google Sign-in
- [ ] Configure email verification
- [ ] Configure password reset
- [ ] Add custom domain to authorized domains
- [ ] Update reCAPTCHA site key (replace test key)
- [ ] Deploy Firestore security rules
- [ ] Enable App Check (recommended)
- [ ] Set up usage monitoring
- [ ] Test authentication flows
- [ ] Test bug report submission
- [ ] Monitor for suspicious activity

## Regular Maintenance

1. **Review security rules monthly** - Update as needed
2. **Monitor authentication logs** - Look for suspicious sign-up patterns
3. **Check Firestore usage** - Identify unusual read/write patterns
4. **Update dependencies** - Keep Firebase SDK versions current
5. **Review reCAPTCHA scores** - Adjust thresholds if needed

## Emergency Response

If you detect malicious activity:

1. **Immediately revoke access** - Disable affected user accounts
2. **Update security rules** - Temporarily restrict write access
3. **Enable additional verification** - Require 2FA for sensitive operations
4. **Contact Firebase support** - Report abuse
5. **Audit affected data** - Review and clean up any malicious data
