# Green Tumb 🌱

A beautiful garden planning and tracking web application for managing your vegetable garden. Built as a Progressive Web App (PWA) that can be installed on Android devices.

## Features

### 🗺️ Garden Map (Plan Grădină)
- Visual representation of your garden layout
- Interactive plant beds with status indicators
- Status tracking: Neplantat, Plantat, Încolțit, Recoltat, Planta Perena, Uscat
- Color-coded status dots for quick reference
- Click on any plant bed to view details and update status

### 📅 Calendar
- Planting calendar with recommended planting periods
- Track planting dates for each plant
- Visual timeline of your garden activities

### 📊 Progress Tracking
- Overview of garden progress
- Statistics for each plant status
- Detailed per-plant progress information

### 🌡️ Weather & Watering Recommendations
- Real-time weather for Toplița, Harghita, Romania
- Temperature-based watering recommendations:
  - ≤2°C: Nu uda (risc de îngheț)
  - ≤10°C: Udare redusă
  - ≤20°C: Udare normală
  - ≤28°C: Udare zilnică
  - >28°C: Udare de 2x pe zi
- Frost warnings (≤2°C)
- Extreme heat warnings (≥30°C)

### 📅 Current Date
- Automatic display of current date in Romanian

## Plants Included

| Plant | Type | Planting Period |
|-------|------|----------------|
| Zmeură | strat pământ | Sf. Aprilie |
- Mazăre: strat înalt, Martie – Mai
- Dovleac: strat pământ, După 15 Mai
- Roșii (Micro Seră): micro seră, 10–15 Mai
- Ceapă: strat pământ, Martie – Mai
- Spanac + Salată: strat înalt, Martie – Mai
- Ridichi: strat înalt, Martie – Mai
- Căpșuni: strat înalt, Perene
- Cartofi: strat pământ, Martie – Apr

## Installation as PWA

### On Android (Chrome)
1. Upload files to a web server (GitHub Pages, Netlify, or Vercel are free)
2. Open the URL in Chrome
3. Tap the menu (three dots)
4. Select "Add to Home Screen" or "Install App"
5. The app will be installed on your home screen

### On Computer (Chrome)
1. Open the app in Chrome
2. Look for the install icon in the address bar
3. Click to install

## Files Required

- `index.html` - Main application file
- `manifest.json` - PWA manifest
- `sw.js` - Service worker for offline functionality
- `icon-192.png` - App icon (192x192) - *You need to create this*
- `icon-512.png` - App icon (512x512) - *You need to create this*

## Creating App Icons

See `PWA_SETUP.md` for detailed instructions on creating app icons.

## Local Development

To test the app locally:

```bash
# Navigate to the project directory
cd GreenTumb

# Start a local server (Python)
python -m http.server 8080

# Or use Node.js
npx http-server -p 8080
```

Then open http://localhost:8080 in your browser.

## Offline Functionality

The app includes a service worker that caches the main files, allowing it to work offline once installed. The service worker automatically caches:
- index.html
- manifest.json

## Data Persistence

Plant data is stored in the browser's localStorage, so your progress is saved locally on your device.

## Technology Stack

- HTML5
- CSS3 (with custom variables and gradients)
- Vanilla JavaScript
- Open-Meteo API for weather data
- Service Worker for PWA functionality

## Language

The app is entirely in Romanian (RO), optimized for users in Romania.

## Location

Weather data is specifically for Toplița, Harghita, Romania.

## License

Personal use project.

## Credits

- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Fonts: Playfair Display and Nunito from Google Fonts
