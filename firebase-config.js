// Firebase Configuration - REPLACE WITH YOUR OWN CONFIG
// Get your config from: https://console.firebase.google.com/
const firebaseConfig = {
  apiKey: "AIzaSyCSNsdefxLW9YK13EHlsh6CiJwKmxmxinY",
  authDomain: "greenthumb-59917.firebaseapp.com",
  projectId: "greenthumb-59917",
  storageBucket: "greenthumb-59917.firebasestorage.app",
  messagingSenderId: "921231749667",
  appId: "1:921231749667:web:4884e4c07dca050d55b796"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Use Anonymous Authentication
let currentUser = null;
let dbInitialized = false;

// Track last visit date for soft update notification (no forced reload)
const urlParams = new URLSearchParams(window.location.search);
const hasDataParam = urlParams.has('data');

if (!hasDataParam) {
  const today = new Date().toDateString();
  const lastVisit = localStorage.getItem('last_visit_date');
  if (lastVisit && lastVisit !== today) {
    // Show a soft banner instead of force-reloading
    window.addEventListener('DOMContentLoaded', () => {
      const banner = document.createElement('div');
      banner.id = 'update-banner';
      banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:10000;background:#2D5016;color:#fff;text-align:center;padding:10px 16px;font-size:13px;font-family:Nunito,sans-serif;display:flex;align-items:center;justify-content:center;gap:12px;';
      banner.innerHTML = `<span>🔄 O nouă versiune poate fi disponibilă.</span><button onclick="location.reload(true)" style="background:#7AB648;color:#fff;border:none;border-radius:6px;padding:4px 12px;font-size:12px;font-weight:700;cursor:pointer;">Reîncarcă</button><button onclick="document.getElementById('update-banner').remove()" style="background:transparent;color:#ccc;border:none;font-size:18px;cursor:pointer;line-height:1;">✕</button>`;
      document.body.prepend(banner);
    });
  }
  localStorage.setItem('last_visit_date', today);
}
