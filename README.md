# Green Thumb 🌱 Garden Management App

A web-based garden planning and tracking application with Firebase authentication and Firestore data persistence.

## Features
1. **Garden Planning (Plan Grădină)**
   - Interactive garden map with draggable plant beds
   - Support for multiple garden layouts (raised beds, ground, greenhouse, todo)
   - Custom plant creation with emoji selection
   - Decor items placement
   - Edit mode for adding/modifying plants and decor
   - Resize functionality for plant beds

2. **Planting Guidance (Ghid Plantare)**
   - Companion planting recommendations
   - Plant compatibility checker (good, bad, neutral)
   - Visual compatibility grid
   - Seasonal planting recommendations

3. **Planting Calendar (Calendar de plantare)**
   - Planting schedule based on seasons
   - Succession planting reminders
   - Expected harvest dates
   - Plant status tracking (planted, sprouted, harvested, etc.)
   - Multi-garden view with filtering
   - Garden name labels when viewing all gardens

4. **Garden Progress (Progresul Grădinii)**
   - Plant statistics (planted, sprouted, harvested, etc.)
   - Garden coverage percentage
   - Plant density calculations
   - Harvest forecasts
   - Watering reminders
   - Succession planting alerts
   - Multi-garden view with filtering

5. **Weather Integration**
   - Location-based weather data (Open-Meteo API)
   - Current temperature and conditions
   - 5-day forecast
   - Gardening advice based on weather
   - Session-based location permission caching

### Multi-Garden Support

1. **Garden Management**
   - Create multiple gardens with custom names
   - Switch between gardens using dropdown selector
   - Delete gardens (with data persistence)
   - Each garden maintains its own plant data

2. **Data Persistence**
   - LocalStorage for instant access
   - Firestore synchronization for authenticated users
   - Automatic sync across devices
   - Session-based data prioritization


## Architecture

### Data Flow

The application uses **Firestore as the single source of truth** with localStorage serving as a cache for offline functionality.

```
┌─────────────────┐
│   User Action   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   gardenData    │ (In-memory state)
└────────┬────────┘
         │
         ├─────────────────┬─────────────────┐
         │                 │                 │
         ▼                 ▼                 ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   Firestore     │ │   localStorage   │ │     DOM         │
│  (Primary)      │ │    (Cache)      │ │   (Display)     │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Key Data Structures

**gardenData** - Main state object storing plant bed data:
```javascript
{
  [plantId]: {
    status: 'neplantat' | 'plantat' | 'incoltat' | 'recoltat' | 'perena' | 'problema',
    date: 'YYYY-MM-DD',
    note: 'User notes',
    history: [{ date: 'DD/MM/YYYY', status: '...', note: '...' }],
    dimensions: { width: 80, height: 75 },
    position: { left: 10, top: 10 },
    name: 'Plant name',
    emoji: '🌱',
    type: 'strat înalt' | 'strat pământ' | 'micro seră' | 'sol direct',
    wateringDate: 'YYYY-MM-DD',
    harvest: [{ date: 'YYYY-MM-DD', quantity: '2kg' }],
    succession: [{ date: 'YYYY-MM-DD', interval: 14, completed: false }]
  }
}
```

**PLANTS** - Plant definitions (predefined + custom):
```javascript
{
  [plantId]: {
    name: 'Plant name',
    emoji: '🌱',
    type: 'strat înalt',
    period: 'Martie – Mai',
    obs: 'Observations'
  }
}
```

**customPlants** - User-defined plant types (stored in localStorage & Firestore):
```javascript
[
  { id, name, emoji, type, period, obs }
]
```

### Authentication Flow

```
┌─────────────────┐
│  Page Load      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Firebase Auth   │
│  State Change   │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌──────────┐
│ Signed │ │ Unsigned │
│   In   │ │   Out    │
└───┬────┘ └────┬─────┘
    │            │
    ▼            ▼
┌──────────────┐ ┌──────────────┐
│ Load from    │ │ Show Login   │
│ Firestore    │ │   Modal      │
│ (Source of   │ │              │
│  Truth)      │ │              │
└──────┬───────┘ └──────────────┘
       │
       ▼
┌──────────────┐
│ Load Custom  │
│   Plants     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  initBeds()  │
│  Render DOM  │
└──────────────┘
```

### Data Persistence

**On Plant Creation:**
1. Generate unique ID
2. Add to `customPlants` array
3. Add to `PLANTS` object
4. Initialize `gardenData[id]` with dimensions and position
5. Call `saveData(gardenData)` → saves to localStorage & Firestore
6. Create DOM element with 'small' class if dimensions ≤ 80x75

**On Login:**
1. Load from Firestore (source of truth)
2. Save to localStorage as cache
3. Load custom plants from Firestore
4. Call `loadCustomPlants()` to populate PLANTS object
5. Call `initBeds()` to render all beds

**On Logout:**
1. Sign out from Firebase
2. Show logout modal
3. Clear garden DOM
4. Show login modal

**On Page Refresh:**
1. Firebase Auth checks session
2. If authenticated: load from Firestore
3. If not authenticated: load from localStorage (fallback)

## Storage Keys

- `STORAGE_KEY = 'gradina_data_v1'` - Garden data in localStorage
- `CUSTOM_PLANTS_KEY = 'custom_plants_v1'` - Custom plant definitions
- `EMAIL_HISTORY_KEY = 'email_history_v1'` - Login email history (last 5 emails)

## Firebase Collections

**gardens** - User-specific garden data:
```javascript
{
  [uid]: {
    gardenData: { ... },
    customPlants: [ ... ],
    lastUpdated: Timestamp
  }
}
```

## Plant Bed Types

- **Strat înalt** (Raised bed) - Default styling with warm colors
- **Strat pământ** (Ground bed) - Earth-tone styling
- **Micro seră** (Greenhouse) - Green styling with lighter text
- **Sol direct** (Direct soil) - Alternative styling

## Status Indicators

- ⬜ **Neplantat** (Not planted) - Gray
- 🌱 **Plantat** (Planted) - Green
- 🌿 **Încolțit** (Sprouted) - Yellow
- 🧺 **Recoltat** (Harvested) - Blue
- 🌸 **Planta Perena** (Perennial) - Pink
- ⚠️ **Uscat** (Dried/Problem) - Red

## Edit Mode

Edit mode allows users to:
- Add new plant beds via "+ Planta" button
- Drag plant beds to reposition
- Resize plant beds using corner handle
- Delete plant beds
- Changes are saved immediately to Firestore

## Responsive Design

- Mobile-first approach
- Bottom sheet modals for mobile
- Touch-friendly drag and resize
- Responsive garden view

## Browser Compatibility

- Modern browsers with ES6+ support
- Firebase SDK (loaded from CDN)
- LocalStorage support required

## Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Replace Firebase config in the HTML file with your project credentials
5. Deploy or open the HTML file in a browser

## Recent Updates

### Data Persistence Improvements
- Fixed new plant beds not loading after logout/login
- Firestore is now the single source of truth
- Added loading overlay during Firestore operations
- Removed complex merge logic for cleaner data flow

### UX Enhancements
- Added "Tip Strat" dropdown for editing bed type after creation
- Implemented email history dropdown for faster login
- Added autocomplete to login form inputs
- Decreased emoji size in small plant beds (80x75 or smaller)

### Bug Fixes
- Fixed drag functionality for newly added plant beds
- Fixed variable initialization order in saveCustomPlant
- Fixed duplicate code in saveModal function

## License

Proprietary - Internal use only

## Credits

- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Fonts: Playfair Display and Nunito from Google Fonts
