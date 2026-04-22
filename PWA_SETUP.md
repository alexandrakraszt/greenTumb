# Green Tumb PWA Setup Instructions

## App Icons Required

To complete the PWA setup, you need to create two app icons:

1. **icon-192.png** - 192x192 pixels
2. **icon-512.png** - 512x512 pixels

## How to Create Icons

### Option 1: Use an Online Icon Generator
1. Visit https://realfavicongenerator.net/ or https://www.favicon-generator.org/
2. Upload a square image (at least 512x512 pixels)
3. Download the generated icons
4. Rename the 192x192 icon to `icon-192.png`
5. Rename the 512x512 icon to `icon-512.png`
6. Place both files in the same folder as `gradina (1).html`

### Option 2: Create Manually
1. Create a simple garden-themed icon (e.g., 🌱 emoji on green background)
2. Save as PNG in two sizes: 192x192 and 512x512
3. Name them `icon-192.png` and `icon-512.png`
4. Place in the same folder as `gradina (1).html`

## Testing the PWA

### On Android (Chrome)
1. Upload all files to a web server (or use a local server)
2. Open `gradina (1).html` in Chrome
3. Tap the menu (three dots)
4. Select "Add to Home Screen" or "Install App"
5. The app will be installed on your home screen

### On Computer (Chrome)
1. Open `gradina (1).html` in Chrome
2. Look for the install icon in the address bar
3. Click to install

## Files Required
- `gradina (1).html` - Main HTML file
- `manifest.json` - PWA manifest
- `sw.js` - Service worker
- `icon-192.png` - App icon (192x192)
- `icon-512.png` - App icon (512x512)

## Note on Local Testing
Service workers only work over HTTPS or localhost. For testing on your phone:
- Use a service like GitHub Pages, Netlify, or Vercel
- Or use a local server and connect via your local IP address
