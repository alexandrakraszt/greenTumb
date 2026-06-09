// ============ DATA ============
const PLANTS = {
  zmeura:   { name: "Zmeură",           emoji: "🧁", type: "strat pământ",  period: "Sf. Aprilie",  obs: "Adaugă compost, îndepărtează buruieni" },
  mazare:   { name: "Mazăre",           emoji: "🫛", type: "strat înalt",   period: "Martie – Mai", obs: "Suport obligatoriu (bețe/plasă)" },
  dovleac:  { name: "Dovleac",          emoji: "🎃", type: "strat pământ",  period: "După 15 Mai",  obs: "Sensibil la frig" },
  rosii:    { name: "Roșii (Micro Seră)",emoji: "🪴", type: "micro seră",   period: "10–15 Mai",    obs: "Protejează de frig. Aerisire zilnic" },
  ceapa:    { name: "Ceapă",            emoji: "🧅", type: "strat pământ",  period: "Martie – Mai", obs: "Între rânduri, crește bine" },
  spanac:   { name: "Spanac + Salată",  emoji: "🥬", type: "strat înalt",   period: "Martie – Mai", obs: "Recoltare rapidă, se repetă (7–10 zile)" },
  ridichi:  { name: "Ridichi",          emoji: "🍥", type: "strat înalt",   period: "Martie – Mai", obs: "Recoltare în 3–4 săptămâni" },
  capsuni1: { name: "Căpșuni #1",       emoji: "🍓", type: "strat înalt",   period: "Perene",       obs: "Îndepărtează frunzele uscate" },
  capsuni2: { name: "Căpșuni #2",       emoji: "🍓", type: "strat înalt",   period: "Perene",       obs: "Mulcire, udare" },
  cartofi:  { name: "Cartofi",          emoji: "🥔", type: "strat pământ",  period: "Martie – Apr", obs: "Mușuroi mai târziu" },
};

// Companion planting data
const COMPANION_PLANTS = [
  { id:'tomato',   emoji:'🍅', name:'Tomate' },
  { id:'carrot',   emoji:'🥕', name:'Morcov' },
  { id:'basil',    emoji:'🌿', name:'Bazilic' },
  { id:'garlic',   emoji:'🧄', name:'Usturoi' },
  { id:'onion',    emoji:'🧅', name:'Ceapă' },
  { id:'potato',   emoji:'🥔', name:'Cartof' },
  { id:'pepper',   emoji:'🌶️', name:'Ardei' },
  { id:'corn',     emoji:'🌽', name:'Porumb' },
  { id:'lettuce',  emoji:'🥬', name:'Salată' },
  { id:'cabbage',  emoji:'🥦', name:'Varză' },
  { id:'cucumber', emoji:'🥒', name:'Castravete' },
  { id:'strawberry',emoji:'🍓',name:'Căpșuni' },
  { id:'fennel',   emoji:'🌾', name:'Fenicul' },
  { id:'sunflower',emoji:'🌻', name:'Floarea Soarelui' },
  { id:'marigold', emoji:'🌼', name:'Gălbenele' },
  { id:'bean',     emoji:'🫘', name:'Fasole' },
  { id:'pea',      emoji:'🌱', name:'Mazăre' },
  { id:'dill',     emoji:'🌿', name:'Mărar' },
  { id:'parsley',  emoji:'🌿', name:'Pătrunjel' },
  { id:'spinach',  emoji:'🍃', name:'Spanac' },
  { id:'zucchini', emoji:'🎃', name:'Dovlecel' },
  { id:'beet',     emoji:'🟥', name:'Sfeclă' },
  { id:'radish',   emoji:'🍥', name:'Ridichi' },
  { id:'mustard',  emoji:'🌾', name:'Muștar' },
];

const COMPAT = {
  tomato: {
    good: [
      { id:'basil',     reason:'Bazilicul respinge afidele și îmbunătățește gustul tomatelor.' },
      { id:'marigold',  reason:'Gălbenelele resping nematozii și musca albă.' },
      { id:'carrot',    reason:'Morcovii aflează solul din jurul rădăcinilor tomatelor.' },
      { id:'garlic',    reason:'Usturoiul respinge acarienii și afidele.' },
      { id:'onion',     reason:'Ține la distanță dăunătorii și nu concurează agresiv.' },
      { id:'lettuce',   reason:'Acoperă solul și menține umiditatea.' },
    ],
    bad: [
      { id:'fennel',    reason:'Feniculul inhibă creșterea tomatelor și atrage dăunători.' },
      { id:'cabbage',   reason:'Varza stopează creșterea tomatelor.' },
      { id:'corn',      reason:'Ambele atrag aceiași dăunători (omizi).' },
      { id:'potato',    reason:'Risc comun de boli (mana).' },
    ]
  },
  carrot: {
    good: [
      { id:'tomato',    reason:'Tomatele oferă umbră morcovilor și resping musca morcovului.' },
      { id:'onion',     reason:'Mirosul cepei confundă musca morcovului.' },
      { id:'lettuce',   reason:'Salata aflează solul de suprafață, beneficiind rădăcinile morcovilor.' },
      { id:'marigold',  reason:'Gălbenelele resping nematozii dăunători morcovilor.' },
    ],
    bad: [
      { id:'fennel',    reason:'Feniculul stopează semnificativ creșterea morcovilor.' },
      { id:'potato',    reason:'Ambele concurează pentru nutrienți din solul adânc.' },
    ]
  },
  basil: {
    good: [
      { id:'tomato',    reason:'Asociere clasică — respinge afidele și muștele.' },
      { id:'pepper',    reason:'Respinge afidele și acarienii de pe ardei.' },
    ],
    bad: [
      { id:'fennel',    reason:'Feniculul inhibă creșterea bazilicului.' },
      { id:'cucumber',  reason:'Inhibă germinarea castraveților.' },
    ]
  },
  garlic: {
    good: [
      { id:'tomato',    reason:'Respinge acarienii și afidele.' },
      { id:'strawberry',reason:'Respinge dăunătorii care afectează fructele căpșunilor.' },
      { id:'cucumber',  reason:'Ajută la protejarea castraveților de gândaci.' },
      { id:'carrot',    reason:'Respinge dăunători.' },
    ],
    bad: [
      { id:'onion',     reason:'Concurează pentru aceiași nutrienți și spațiu.' },
      { id:'potato',    reason:'Poate inhiba creșterea cartofilor.' },
      { id:'bean',      reason:'Încetinește creșterea.' },
      { id:'pea',       reason:'Nepotrivit pentru asociere.' },
    ]
  },
  onion: {
    good: [
      { id:'carrot',    reason:'Mirosul cepei descurajează musca morcovului.' },
      { id:'lettuce',   reason:'Beneficiu reciproc, descurajează melcii.' },
      { id:'strawberry',reason:'Descurajează dăunătorii care vizează căpșunile.' },
      { id:'tomato',    reason:'Ține la distanță dăunătorii și nu concurează agresiv.' },
    ],
    bad: [
      { id:'garlic',    reason:'Concurează direct pentru nutrienți și spațiu.' },
      { id:'potato',    reason:'Poate stinge creșterea cartofilor.' },
      { id:'cabbage',   reason:'Se inhibă reciproc.' },
      { id:'bean',      reason:'Inhibă creșterea leguminoaselor.' },
      { id:'pea',       reason:'Afectează dezvoltarea.' },
    ]
  },
  potato: {
    good: [
      { id:'marigold',  reason:'Gălbenelele resping gândacii și nematozii.' },
      { id:'corn',      reason:'Umbra porumbului ajută la retenția umidității pentru cartofi.' },
      { id:'bean',      reason:'Îmbogățește solul cu azot.' },
      { id:'cabbage',   reason:'Are cerințe diferite de nutrienți.' },
    ],
    bad: [
      { id:'tomato',    reason:'Partajează boli — trebuie ținute separate.' },
      { id:'cucumber',  reason:'Ambele sunt susceptibile la aceleași boli.' },
      { id:'fennel',    reason:'Feniculul stopează creșterea cartofilor.' },
    ]
  },
  pepper: {
    good: [
      { id:'basil',     reason:'Bazilicul respinge afidele și acarienii.' },
      { id:'tomato',    reason:'Condiții de creștere similare; tomatele oferă adăpost de vânt.' },
      { id:'marigold',  reason:'Respinge musca albă și nematozii.' },
      { id:'onion',     reason:'Protecție împotriva insectelor.' },
      { id:'carrot',    reason:'Nu concurează pentru spațiu.' },
    ],
    bad: [
      { id:'fennel',    reason:'Feniculul inhibă creșterea ardeiului.' },
      { id:'potato',    reason:'Sensibili la aceleași boli.' },
      { id:'corn',      reason:'Umbrează excesiv.' },
    ]
  },
  corn: {
    good: [
      { id:'cucumber',  reason:'Varianta Surorile Trei — porumbul oferă suport.' },
      { id:'sunflower', reason:'Floarea soarelui atrage polenizatorii pentru porumb.' },
    ],
    bad: [
      { id:'tomato',    reason:'Partajează aceiași dăunători (omizi).' },
    ]
  },
  lettuce: {
    good: [
      { id:'carrot',    reason:'Morcovii aflează solul din jurul rădăcinilor salatei.' },
      { id:'onion',     reason:'Ceapa descurajează melcii care vizează salata.' },
      { id:'strawberry',reason:'Salata oferă acoperire de sol sub căpșuni.' },
      { id:'tomato',    reason:'Acoperă solul și menține umiditatea.' },
    ],
    bad: [
      { id:'fennel',    reason:'Secrețiile feniculului inhibă germinarea salatei.' },
      { id:'cabbage',   reason:'Competitivitate mare.' },
      { id:'parsley',   reason:'Poate inhiba creșterea.' },
    ]
  },
  cabbage: {
    good: [
      { id:'marigold',  reason:'Gălbenelele resping semnificativ omizile de varză.' },
      { id:'dill',      reason:'Îmbunătățește creșterea.' },
      { id:'onion',     reason:'Protejează de dăunători.' },
      { id:'potato',    reason:'Compatibilitate bună.' },
    ],
    bad: [
      { id:'tomato',    reason:'Varza stopează creșterea tomatelor.' },
      { id:'onion',     reason:'Inhibiție reciprocă a creșterii.' },
      { id:'fennel',    reason:'Feniculul inhibă plantele din familia verzei.' },
      { id:'strawberry',reason:'Concurență pentru nutrienți.' },
    ]
  },
  cucumber: {
    good: [
      { id:'corn',      reason:'Porumbul oferă un suport natural pentru castraveți.' },
      { id:'sunflower', reason:'Floarea soarelui atrage polenizatorii și oferă umbră.' },
      { id:'garlic',    reason:'Usturoiul descurajează gândacii care distrug castraveții.' },
      { id:'marigold',  reason:'Protejează împotriva insectelor.' },
      { id:'bean',      reason:'Compatibilitate bună de creștere.' },
    ],
    bad: [
      { id:'basil',     reason:'Inhibă germinarea castraveților.' },
      { id:'potato',    reason:'Ambele sunt susceptibile la aceleași boli.' },
      { id:'fennel',    reason:'Feniculul inhibă creșterea castraveților.' },
      { id:'tomato',    reason:'Condiții diferite de umiditate → risc de boli.' },
    ]
  },
  strawberry: {
    good: [
      { id:'garlic',    reason:'Usturoiul respinge dăunătorii care vizează fructele.' },
      { id:'onion',     reason:'Ceapa descurajează melcii și afidele.' },
      { id:'lettuce',   reason:'Salata acționează ca mulci viu sub căpșuni.' },
      { id:'marigold',  reason:'Respinge nematozii în patul de căpșuni.' },
    ],
    bad: [
      { id:'fennel',    reason:'Feniculul inhibă creșterea căpșunilor.' },
      { id:'cabbage',   reason:'Familia verzei concurează cu căpșunile.' },
    ]
  },
  fennel: {
    good: [],
    bad: [
      { id:'tomato',    reason:'Inhibă creșterea tomatelor și atrage dăunători.' },
      { id:'carrot',    reason:'Stopează semnificativ creșterea morcovilor.' },
      { id:'basil',     reason:'Inhibă germinarea bazilicului.' },
      { id:'lettuce',   reason:'Secrețiile inhibă germinarea salatei.' },
      { id:'cabbage',   reason:'Inhibă întreaga familie a verzei.' },
      { id:'pepper',    reason:'Inhibă creșterea ardeiului.' },
      { id:'potato',    reason:'Stopează creșterea cartofilor.' },
      { id:'cucumber',  reason:'Inhibă creșterea castraveților.' },
      { id:'strawberry',reason:'Inhibă creșterea căpșunilor.' },
    ]
  },
  sunflower: {
    good: [
      { id:'corn',      reason:'Atrage polenizatorii care beneficiază porumbul.' },
      { id:'cucumber',  reason:'Oferă umbră și atrage albine.' },
    ],
    bad: [
      { id:'potato',    reason:'Secrețiile rădăcinilor pot inhiba tuberculii de cartof.' },
    ]
  },
  marigold: {
    good: [
      { id:'tomato',    reason:'Respinge nematozii și musca albă.' },
      { id:'carrot',    reason:'Respinge nematozii dăunători morcovilor.' },
      { id:'pepper',    reason:'Respinge musca albă și nematozii.' },
      { id:'potato',    reason:'Respinge gândacii și nematozii.' },
      { id:'cabbage',   reason:'Respinge eficient omizile de varză.' },
      { id:'strawberry',reason:'Respinge nematozii în patul de căpșuni.' },
    ],
    bad: []
  },
  bean: {
    good: [
      { id:'corn',      reason:'Suport pentru urcare + azot în sol.' },
      { id:'cucumber',  reason:'Compatibilitate bună de creștere.' },
      { id:'potato',    reason:'Îmbogățește solul.' },
    ],
    bad: [
      { id:'onion',     reason:'Inhibă dezvoltarea.' },
      { id:'garlic',    reason:'Efect negativ asupra creșterii.' },
    ]
  },
  pea: {
    good: [
      { id:'carrot',    reason:'Nu concurează.' },
      { id:'lettuce',   reason:'Se dezvoltă rapid împreună.' },
      { id:'corn',      reason:'Suport pentru urcare.' },
    ],
    bad: [
      { id:'onion',     reason:'Încetinește creșterea.' },
      { id:'garlic',    reason:'Nepotrivit pentru asociere.' },
    ]
  },
  dill: {
    good: [
      { id:'cabbage',  reason:'Îmbunătățește creșterea.' },
    ],
    bad: []
  },
  parsley: {
    good: [],
    bad: [
      { id:'lettuce',  reason:'Poate inhiba creșterea.' },
    ]
  },
  spinach: {
    good: [
      { id:'strawberry',reason:'Acoperă solul și menține umiditatea.' },
      { id:'radish',   reason:'Creștere rapidă, fără competiție.' },
      { id:'carrot',   reason:'Nu concurează pentru spațiu.' },
    ],
    bad: [
      { id:'potato',   reason:'Concurență pentru nutrienți.' },
    ]
  },
  zucchini: {
    good: [
      { id:'corn',      reason:'Oferă umbră și suport indirect.' },
      { id:'bean',      reason:'Îmbogățește solul cu azot.' },
      { id:'marigold',  reason:'Protejează împotriva dăunătorilor.' },
    ],
    bad: [
      { id:'potato',    reason:'Concurență pentru nutrienți.' },
      { id:'cucumber',  reason:'Risc de boli comune.' },
    ]
  },
  beet: {
    good: [
      { id:'onion',    reason:'Protejează împotriva dăunătorilor.' },
      { id:'lettuce',   reason:'Utilizează eficient spațiul.' },
      { id:'cabbage',  reason:'Compatibilitate bună.' },
    ],
    bad: [
      { id:'bean',     reason:'Încetinește dezvoltarea sfeclei.' },
      { id:'mustard',  reason:'Poate afecta creșterea.' },
    ]
  },
  radish: {
    good: [
      { id:'spinach',  reason:'Creștere rapidă, fără competiție.' },
    ],
    bad: []
  },
  mustard: {
    good: [],
    bad: [
      { id:'beet',     reason:'Poate afecta creșterea.' },
    ]
  },
};

const STORAGE_KEY = 'gradina_data_v1';
const CUSTOM_PLANTS_KEY = 'custom_plants_v1';
const DECOR_ITEMS_KEY = 'decor_items_v1';
const GARDENS_KEY = 'gardens_data_v1';
const MAX_HISTORY = 50;

// Multi-garden support
let gardensData = {}; // { gardenId: { name, gardenData, decorItems } }
let currentGardenId = 'default';

// Succession planting data
const SUCCESSION_DEFAULTS = {
  'Tomate': { interval:21, daysToHarvest:75, batches:4 },
  'Castravete': { interval:21, daysToHarvest:55, batches:4 },
  'Ardei': { interval:28, daysToHarvest:80, batches:3 },
  'Cartof': { interval:28, daysToHarvest:90, batches:3 },
  'Ceapă': { interval:21, daysToHarvest:100, batches:3 },
  'Usturoi': { interval:180, daysToHarvest:240, batches:1 },
  'Fasole': { interval:21, daysToHarvest:55, batches:5 },
  'Mazăre': { interval:14, daysToHarvest:60, batches:4 },
  'Varză': { interval:28, daysToHarvest:80, batches:3 },
  'Salată': { interval:14, daysToHarvest:45, batches:6 },
  'Spanac': { interval:14, daysToHarvest:40, batches:5 },
  'Dovlecel': { interval:21, daysToHarvest:50, batches:4 },
  'Sfeclă': { interval:21, daysToHarvest:60, batches:4 },
  'Morcov': { interval:21, daysToHarvest:70, batches:4 },
  'Porumb': { interval:14, daysToHarvest:80, batches:3 },
  'Căpșuni': { interval:21, daysToHarvest:60, batches:3 },
  'Busuioc': { interval:14, daysToHarvest:40, batches:5 },
  'Gălbenele': { interval:21, daysToHarvest:50, batches:4 },
  'Mărar': { interval:14, daysToHarvest:45, batches:5 },
  'Pătrunjel': { interval:21, daysToHarvest:70, batches:4 },
  'Ridichi': { interval:21, daysToHarvest:25, batches:5 },
  'Muștar': { interval:14, daysToHarvest:30, batches:5 },
};

function generateSuccession(plantName, firstDate, intervalDays, daysToHarvest, numBatches, seasonEnd) {
  const today = new Date(); today.setHours(0,0,0,0);
  const batches = [];
  for (let i = 0; i < numBatches; i++) {
    const plant = addDays(firstDate, i * intervalDays);
    if (seasonEnd && plant > seasonEnd) break;
    const harvest = addDays(plant, daysToHarvest);
    const dU = diffDays(today, plant);
    const dUH = diffDays(today, harvest);
    batches.push({ batch:i+1, plantDate:plant, harvestDate:harvest,
      daysUntilPlant:dU, daysUntilHarvest:dUH,
      status: dU>0?'programat': dUH>0?'în creștere':'recoltat' });
  }
  return batches;
}

function getNextActionMessage(plantName, batches) {
  const next = batches.find(b => b.daysUntilPlant >= 0);
  if (!next) return null;
  if (next.daysUntilPlant === 0) return `Plantează un nou lot de ${plantName} azi!`;
  if (next.daysUntilPlant === 1) return `Plantează un nou lot de ${plantName} mâine.`;
  return `Plantează un nou lot de ${plantName} pe ${fmtDate(next.plantDate)} (în ${next.daysUntilPlant} zile)`;
}

function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function diffDays(a,b){ return Math.round((b-a)/86400000); }
function fmtDate(d){ return d.toLocaleDateString('ro-RO',{day:'numeric',month:'long'}); }

// Normalize diacritics for Romanian text matching
function normalizeDiacritics(text) {
  return text
    .toLowerCase()
    .replace(/ă/g, 'a')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/ș/g, 's')
    .replace(/ț/g, 't')
    .replace(/a/g, 'a') // ensure consistency
    .replace(/i/g, 'i')
    .replace(/s/g, 's')
    .replace(/t/g, 't');
}

// ===== WEATHER WIDGET =====
async function fetchWeather() {
  try {
    // Get user's location (Bucharest as default for Romania)
    let lat = 44.4268;
    let lon = 26.1025;
    
    // Check if location was already approved in this session
    const savedLat = sessionStorage.getItem('location_lat');
    const savedLon = sessionStorage.getItem('location_lon');
    
    if (savedLat && savedLon) {
      // Use saved coordinates from this session without asking again
      lat = parseFloat(savedLat);
      lon = parseFloat(savedLon);
      console.log('[fetchWeather] Using saved coordinates from session:', lat, lon);
      updateWeatherWidget(lat, lon);
      return;
    }
    
    // Try to get user's location
    if (navigator.geolocation) {
      console.log('[fetchWeather] Requesting location permission');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          console.log('[fetchWeather] Location approved, saving to session:', lat, lon);
          // Save to sessionStorage for this session
          sessionStorage.setItem('location_lat', lat.toString());
          sessionStorage.setItem('location_lon', lon.toString());
          updateWeatherWidget(lat, lon);
        },
        (error) => {
          console.log('[fetchWeather] Location denied or failed:', error);
          // Don't save anything, will use default coordinates
          updateWeatherWidget(lat, lon);
        }
      );
    } else {
      updateWeatherWidget(lat, lon);
    }
  } catch (error) {
    console.error('Weather fetch error:', error);
  }
}

async function updateWeatherWidget(lat, lon) {
  console.log('Fetching weather for:', lat, lon);
  try {
    // Using Open-Meteo API (free, no API key required)
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code,precipitation_probability_max&timezone=auto`);
    const data = await response.json();
    console.log('Weather data received:', data);
    
    const current = data.current;
    const daily = data.daily;
    
    const temp = Math.round(current.temperature_2m);
    const humidity = current.relative_humidity_2m;
    const weatherCode = current.weather_code;
    
    // Build 5-day forecast
    const forecastHtml = daily.time.slice(0, 5).map((time, i) => {
      const date = new Date(time);
      const dayName = date.toLocaleDateString('ro-RO', { weekday: 'short' });
      const dayDate = date.getDate();
      const maxTemp = Math.round(daily.temperature_2m_max[i]);
      const minTemp = Math.round(daily.temperature_2m_min[i]);
      const precipProb = daily.precipitation_probability_max[i];
      const precipSum = daily.precipitation_sum[i];
      const dayIcon = getWeatherIcon(daily.weather_code[i]);
      
      return `
        <div class="forecast-day">
          <div class="forecast-day-name">${dayName}</div>
          <div class="forecast-date">${dayDate}</div>
          <div class="forecast-icon">${dayIcon}</div>
          <div class="forecast-temp">${maxTemp}° / ${minTemp}°</div>
          <div class="forecast-precip">${precipSum > 0 ? `💧 ${Math.round(precipSum)}mm` : ''}</div>
        </div>
      `;
    }).join('');
    
    // Generate gardening advice
    const advice = generateGardeningAdvice(daily, temp);
    console.log('Gardening advice:', advice);
    
    const weatherWidget = document.getElementById('current-weather');
    if (weatherWidget) {
      weatherWidget.innerHTML = `
        <div class="weather-widget-full">
          <div class="weather-current">
            <div class="weather-current-left">
              <span class="weather-icon-large">${getWeatherIcon(weatherCode)}</span>
              <div class="weather-temp-large">${temp}°C</div>
              <div class="weather-desc">${getWeatherDescription(weatherCode)}</div>
              <div class="weather-humidity">Umiditate: ${humidity}%</div>
            </div>
          </div>
          
          <div class="forecast-container">
            ${forecastHtml}
          </div>
          
          <div class="gardening-advice">
            <h3 class="advice-title">🌱 Sfaturi pentru grădină</h3>
            
            ${advice.rainWarning ? `
            <div class="advice-section rain-warning">
              <div class="advice-header">🌧️ Ploaie în curând</div>
              <div class="advice-text">${advice.rainWarning}</div>
            </div>
            ` : ''}
            
            <div class="advice-section">
              <div class="advice-header">⚡ Decizii rapide</div>
              <div class="advice-grid">
                <div class="advice-item">
                  <div class="advice-item-header">💧 Udare</div>
                  <div class="advice-item-status ${advice.watering.status}">${advice.watering.status}</div>
                  <div class="advice-item-reason">${advice.watering.reason}</div>
                </div>
                <div class="advice-item">
                  <div class="advice-item-header">🛡️ Acoperire plante</div>
                  <div class="advice-item-status ${advice.cover.status}">${advice.cover.status}</div>
                  <div class="advice-item-reason">${advice.cover.reason}</div>
                </div>
                <div class="advice-item">
                  <div class="advice-item-header">🌱 Plantare azi</div>
                  <div class="advice-item-status ${advice.planting.status}">${advice.planting.status}</div>
                  <div class="advice-item-reason">${advice.planting.reason}</div>
                </div>
                <div class="advice-item">
                  <div class="advice-item-header">🌿 Fertilizare</div>
                  <div class="advice-item-status ${advice.fertilizer.status}">${advice.fertilizer.status}</div>
                  <div class="advice-item-reason">${advice.fertilizer.reason}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      console.log('Weather widget updated');
    }
  } catch (error) {
    console.error('Weather update error:', error);
    const weatherWidget = document.getElementById('current-weather');
    if (weatherWidget) {
      weatherWidget.innerHTML = '<span style="font-size:12px;color:#888;">Vreme indisponibilă</span>';
    }
  }
}

function generateGardeningAdvice(daily, currentTemp) {
  const advice = {
    rainWarning: '',
    watering: { status: '', reason: '' },
    cover: { status: '', reason: '' },
    planting: { status: '', reason: '' },
    fertilizer: { status: '', reason: '' }
  };
  
  // Rain today (index 0) is considered separately from the next-3-days outlook
  const rainToday = daily.precipitation_sum[0] > 5;

  // Check for rain in next 3 days
  let rainDays = [];
  for (let i = 1; i <= 3; i++) {
    if (daily.precipitation_sum[i] > 5) {
      const date = new Date(daily.time[i]);
      const dayName = date.toLocaleDateString('ro-RO', { weekday: 'long' });
      rainDays.push(dayName);
    }
  }
  
  if (rainDays.length > 0) {
    advice.rainWarning = `Precipitații probabile ${rainDays.join(' și ')}. Nu uda astăzi — lasă pământul să se usuce înainte.`;
  }
  
  // Watering advice
  if (rainDays.length > 0) {
    advice.watering = { status: 'Amână', reason: 'Posibil ploaie în 3 zile' };
  } else if (currentTemp > 25) {
    advice.watering = { status: 'Udă moderat', reason: 'Temperatură ridicată' };
  } else {
    advice.watering = { status: 'Udă normal', reason: 'Condiții normale' };
  }
  
  // Cover advice (check for low temps in next 3 nights)
  let lowTempNight = false;
  for (let i = 1; i <= 3; i++) {
    if (daily.temperature_2m_min[i] <= 2) {
      lowTempNight = true;
      break;
    }
  }
  
  if (lowTempNight) {
    advice.cover = { status: 'Atenție la noapte', reason: 'Temperaturi scăzute posibile' };
  } else {
    advice.cover = { status: 'Nu e necesar', reason: 'Temperaturi stabile' };
  }
  
  // Planting advice
  if (currentTemp >= 5 && currentTemp <= 25 && !rainToday) {
    advice.planting = { status: 'Ok pentru afară', reason: 'Fără îngheț în 48h' };
  } else if (currentTemp < 5) {
    advice.planting = { status: 'Amână', reason: 'Temperatură prea scăzută' };
  } else {
    advice.planting = { status: 'Ok pentru afară', reason: 'Condiții acceptabile' };
  }
  
  // Fertilizer advice
  if (rainDays.length > 0) {
    advice.fertilizer = { status: 'Amână 1–2 zile', reason: `Ploaie ${rainDays[0]} — spală nutrienții` };
  } else if (currentTemp > 30) {
    advice.fertilizer = { status: 'Amână', reason: 'Prea cald pentru fertilizare' };
  } else {
    advice.fertilizer = { status: 'Poți aplica', reason: 'Condiții ideale' };
  }
  
  return advice;
}

function getWeatherIcon(code) {
  const weatherIcons = {
    0: '☀️', // Clear sky
    1: '🌤️', // Mainly clear
    2: '⛅', // Partly cloudy
    3: '☁️', // Overcast
    45: '🌫️', // Fog
    48: '🌫️', // Depositing rime fog
    51: '🌧️', // Light drizzle
    53: '🌧️', // Moderate drizzle
    55: '🌧️', // Dense drizzle
    61: '🌧️', // Slight rain
    63: '🌧️', // Moderate rain
    65: '🌧️', // Heavy rain
    66: '🌨️', // Freezing rain
    67: '🌨️', // Heavy freezing rain
    71: '🌨️', // Slight snow fall
    73: '🌨️', // Moderate snow fall
    75: '❄️', // Heavy snow fall
    77: '🌨️', // Snow grains
    80: '🌦️', // Slight rain showers
    81: '🌦️', // Moderate rain showers
    82: '🌦️', // Violent rain showers
    85: '🌨️', // Slight snow showers
    86: '🌨️', // Moderate snow showers
    95: '⛈️', // Thunderstorm
    96: '⛈️', // Thunderstorm with slight hail
    99: '⛈️', // Thunderstorm with heavy hail
  };
  return weatherIcons[code] || '🌤️';
}

function getWeatherDescription(code) {
  const descriptions = {
    0: 'Cer senin',
    1: 'Predominant senin',
    2: 'Parțial noros',
    3: 'Noros',
    45: 'Ceață',
    48: 'Ceață cu chiciură',
    51: 'Burniță ușoară',
    53: 'Burniță moderată',
    55: 'Burniță densă',
    61: 'Ploaie ușoară',
    63: 'Ploaie moderată',
    65: 'Ploaie torențială',
    66: 'Ploaie înghețată',
    67: 'Ploaie înghețată puternică',
    71: 'Ninsoare ușoară',
    73: 'Ninsoare moderată',
    75: 'Ninsoare abundentă',
    77: 'Grâu de zăpadă',
    80: 'Averse ușoare',
    81: 'Averse moderate',
    82: 'Averse violente',
    85: 'Averse de zăpadă ușoare',
    86: 'Averse de zăpadă moderate',
    95: 'Furtună',
    96: 'Furtună cu grindină ușoară',
    99: 'Furtună cu grindină abundentă',
  };
  return descriptions[code] || 'Variabil';
}

// Weather is fetched during initializeApp() to avoid a duplicate request.

function renderSuccessionPlan(plantName) {
  const messageEl = document.getElementById('succession-message');
  const batchesEl = document.getElementById('succession-batches');

  // Parse plant name to handle multiple plants separated by +, &, ;, ,, și, or ȘI
  // Replace full word "și" with a separator first to avoid matching individual characters
  let normalized = plantName.replace(/\bsi\b/gi, '+');
  const plantNames = normalized.split(/[+&;,]/).map(name => name.trim()).filter(name => name);

  // If only one plant, use the original logic
  if (plantNames.length === 1) {
    const normalizedPlantName = normalizeDiacritics(plantName);
    const defaults = SUCCESSION_DEFAULTS[plantName] || SUCCESSION_DEFAULTS[Object.keys(SUCCESSION_DEFAULTS).find(key => normalizeDiacritics(key) === normalizedPlantName)];
    if (!defaults) {
      messageEl.textContent = `Nu există date de plantare succesivă pentru ${plantName}.`;
      batchesEl.innerHTML = '';
      return;
    }

    // Get actual planting dates from stored succession plantings
    const data = getData(currentId);
    const successionPlantings = data.successionPlantings || [];
    
    // Use the most recent planting date as the base, or today if none
    let baseDate = new Date();
    baseDate.setHours(0,0,0,0);
    
    if (successionPlantings.length > 0) {
      const mostRecent = successionPlantings[successionPlantings.length - 1];
      baseDate = new Date(mostRecent.date);
      baseDate.setHours(0,0,0,0);
    }

    const currentYear = baseDate.getFullYear();
    const seasonEnd = new Date(currentYear, 9, 31); // October 31 of current year

    const batches = generateSuccession(plantName, baseDate, defaults.interval, defaults.daysToHarvest, defaults.batches, seasonEnd);
    
    // Mark batches that have been planted and attach actual recorded dates
    batches.forEach(b => {
      const actual = successionPlantings.find(sp =>
        sp.batch === b.batch &&
        (!sp.plant || normalizeDiacritics(sp.plant) === normalizeDiacritics(plantName))
      );
      if (actual) {
        b.actualPlantDate = new Date(actual.date);
        b.status = b.daysUntilHarvest > 0 ? 'în creștere' : 'recoltat';
      }
    });
    
    const nextAction = getNextActionMessage(plantName, batches);

    if (nextAction) {
      messageEl.textContent = nextAction;
    } else {
      messageEl.textContent = `Toate loturile pentru ${plantName} au fost programate.`;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    batchesEl.innerHTML = batches.map((b, index) => {
      const isPlanted = !!b.actualPlantDate;
      const bg = isPlanted ? '#f0faf0' : '#fff';
      const border = isPlanted ? 'border-left:3px solid var(--green-mid);' : '';
      const recordedDate = isPlanted ? b.actualPlantDate.toISOString().split('T')[0] : todayStr;
      const inputId = `bpd-${b.batch}`;
      if (isPlanted) {
        return `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;background:${bg};border-radius:6px;margin-bottom:4px;${border}">
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;">
            <span style="font-weight:700;color:#666;">✅ Lot ${b.batch}</span>
            <input type="date" id="${inputId}" value="${recordedDate}" style="font-size:10px;border:1px solid #b2dfdb;border-radius:4px;padding:2px 4px;color:#555;">
            <span style="color:#888;font-size:11px;">Recoltare: ${fmtDate(b.harvestDate)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <button onclick="updateBatchDate(${b.batch}, '${inputId}')" style="background:#78909C;color:white;border:none;border-radius:6px;padding:3px 8px;font-size:10px;cursor:pointer;">✓ Corectează</button>
            <span class="status-pill plantat">${b.status}</span>
          </div>
        </div>`;
      } else {
        return `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;background:#fff;border-radius:6px;margin-bottom:4px;">
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;">
            <span style="font-weight:700;color:#666;">Lot ${b.batch}</span>
            <input type="date" id="${inputId}" value="${todayStr}" style="font-size:10px;border:1px solid #ddd;border-radius:4px;padding:2px 4px;color:#555;">
            <span style="color:#888;font-size:11px;">Recoltare est.: ${fmtDate(b.harvestDate)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button onclick="markBatchPlanted('${plantName}', ${index}, ${defaults.interval}, ${defaults.daysToHarvest}, '${inputId}')" style="background:var(--green-mid);color:white;border:none;border-radius:6px;padding:4px 8px;font-size:10px;cursor:pointer;font-weight:700;">✓ Plantează</button>
            <span class="status-pill neplantat">${b.status}</span>
          </div>
        </div>`;
      }
    }).join('');
  } else {
    // Multiple plants - show succession plan for each
    messageEl.textContent = `Plan de plantare succesivă pentru ${plantNames.length} plante:`;

    // Get actual planting dates from stored succession plantings
    const data = getData(currentId);
    const successionPlantings = data.successionPlantings || [];
    
    // Use the most recent planting date as the base, or today if none
    let baseDate = new Date();
    baseDate.setHours(0,0,0,0);
    
    if (successionPlantings.length > 0) {
      const mostRecent = successionPlantings[successionPlantings.length - 1];
      baseDate = new Date(mostRecent.date);
      baseDate.setHours(0,0,0,0);
    }

    const currentYear = baseDate.getFullYear();
    const seasonEnd = new Date(currentYear, 9, 31); // October 31 of current year

    let allBatchesHtml = '';
    plantNames.forEach(pName => {
      const normalizedPName = normalizeDiacritics(pName);
      const actualKey = Object.keys(SUCCESSION_DEFAULTS).find(key => normalizeDiacritics(key) === normalizedPName);
      const defaults = SUCCESSION_DEFAULTS[pName] || SUCCESSION_DEFAULTS[actualKey];
      const displayName = actualKey || pName;

      if (!defaults) {
        allBatchesHtml += `
          <div style="margin-bottom:12px;background:#f5f5f5;border-radius:8px;padding:10px;">
            <strong>${pName}</strong>
            <div style="color:#999;font-style:italic;font-size:11px;">Nu există date de plantare succesivă.</div>
          </div>
        `;
        return;
      }

      const batches = generateSuccession(displayName, baseDate, defaults.interval, defaults.daysToHarvest, defaults.batches, seasonEnd);
      
      // Mark batches that have been planted and attach actual recorded dates
      batches.forEach(b => {
        const actual = successionPlantings.find(sp =>
          sp.batch === b.batch &&
          (!sp.plant || normalizeDiacritics(sp.plant) === normalizeDiacritics(displayName))
        );
        if (actual) {
          b.actualPlantDate = new Date(actual.date);
          b.status = b.daysUntilHarvest > 0 ? 'în creștere' : 'recoltat';
        }
      });
      
      const nextAction = getNextActionMessage(displayName, batches);

      allBatchesHtml += `
        <div style="margin-bottom:12px;background:#f5f5f5;border-radius:8px;padding:10px;">
          <strong>${pName}</strong>
          ${nextAction ? `<div style="color:var(--green-deep);font-weight:600;font-size:11px;margin-bottom:4px;">${nextAction}</div>` : ''}
          <div style="max-height:120px;overflow-y:auto;padding-right:4px;">
            ${(() => { const _today = new Date().toISOString().split('T')[0]; return batches.map((b, index) => {
              const isPlanted = !!b.actualPlantDate;
              const bg = isPlanted ? '#f0faf0' : '#fff';
              const border = isPlanted ? 'border-left:3px solid var(--green-mid);' : '';
              const recDate = isPlanted ? b.actualPlantDate.toISOString().split('T')[0] : _today;
              const iid = `bpd-${pName.replace(/\s/g,'')}-${b.batch}`;
              if (isPlanted) {
                return `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:3px 6px;background:${bg};border-radius:4px;margin-bottom:2px;font-size:11px;${border}">
                <div style="display:flex;align-items:center;flex-wrap:wrap;gap:3px;">
                  <span style="font-weight:600;color:#666;">✅ Lot ${b.batch}</span>
                  <input type="date" id="${iid}" value="${recDate}" style="font-size:9px;border:1px solid #b2dfdb;border-radius:3px;padding:1px 3px;">
                  <span style="color:#888;">Rec.: ${fmtDate(b.harvestDate)}</span>
                </div>
                <div style="display:flex;align-items:center;gap:4px;">
                  <button onclick="updateBatchDate(${b.batch}, '${iid}', '${displayName}')" style="background:#78909C;color:white;border:none;border-radius:4px;padding:2px 6px;font-size:9px;cursor:pointer;">✓</button>
                  <span class="status-pill plantat" style="font-size:9px;">${b.status}</span>
                </div>
              </div>`;
              } else {
                return `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:3px 6px;background:#fff;border-radius:4px;margin-bottom:2px;font-size:11px;">
                <div style="display:flex;align-items:center;flex-wrap:wrap;gap:3px;">
                  <span style="font-weight:600;color:#666;">Lot ${b.batch}</span>
                  <input type="date" id="${iid}" value="${_today}" style="font-size:9px;border:1px solid #ddd;border-radius:3px;padding:1px 3px;">
                  <span style="color:#888;">Rec.: ${fmtDate(b.harvestDate)}</span>
                </div>
                <div style="display:flex;align-items:center;gap:4px;">
                  <button onclick="markBatchPlanted('${plantName}', ${index}, ${defaults.interval}, ${defaults.daysToHarvest}, '${iid}', '${displayName}')" style="background:var(--green-mid);color:white;border:none;border-radius:4px;padding:2px 6px;font-size:9px;cursor:pointer;font-weight:700;">✓ Plantează</button>
                  <span class="status-pill neplantat" style="font-size:9px;">${b.status}</span>
                </div>
              </div>`;
              }
            }).join(''); })()}
          </div>
        </div>
      `;
    });

    batchesEl.innerHTML = allBatchesHtml;
  }
}

// Mark a succession batch as planted
function markBatchPlanted(plantName, batchIndex, intervalDays, daysToHarvest, dateInputId, singlePlantName) {
  if (!currentId) {
    showToast('⚠️ Selectează o plantă din grădină!');
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split('T')[0];

  // Use the date from the input if provided, otherwise fall back to today
  const dateEl = dateInputId ? document.getElementById(dateInputId) : null;
  const plantDate = (dateEl && dateEl.value) ? dateEl.value : todayStr;

  const data = getData(currentId);
  gardenData[currentId] = {
    ...data,
    date: data.date || plantDate,  // preserve existing planting date
    status: 'plantat'
  };

  // Store the actual planting date for succession tracking
  const batchPlant = singlePlantName || plantName;
  const existingSuccession = data.successionPlantings || [];
  gardenData[currentId].successionPlantings = existingSuccession.concat({
    batch: batchIndex + 1,
    date: plantDate,
    plant: batchPlant
  });

  // Add to history
  gardenData[currentId].history = (data.history || []).concat({
    date: plantDate,
    status: 'plantat',
    note: `Lot ${batchIndex + 1} plantat conform planului de plantare succesivă`
  });

  // Save the data
  saveData(gardenData);

  // Update the bed in the garden
  const bed = document.querySelector(`[data-id="${currentId}"]`);
  if (bed) {
    bed.dataset.status = 'plantat';
  }

  // Re-render the succession plan with updated dates
  renderSuccessionPlan(plantName);

  showToast(`✅ Lot ${batchIndex + 1} marcat ca plantat! Data: ${plantDate}`);
}

// Correct the recorded date of an already-planted succession lot
function updateBatchDate(batchNum, dateInputId, singlePlantName) {
  if (!currentId) return;
  const dateEl = document.getElementById(dateInputId);
  if (!dateEl || !dateEl.value) { showToast('⚠️ Selectează o dată!'); return; }
  const data = getData(currentId);
  const successionPlantings = (data.successionPlantings || []).map(sp => {
    const matchesBatch = sp.batch === batchNum;
    const matchesPlant = !singlePlantName || !sp.plant ||
      normalizeDiacritics(sp.plant) === normalizeDiacritics(singlePlantName);
    return (matchesBatch && matchesPlant) ? { ...sp, date: dateEl.value } : sp;
  });
  // Correct main planting date only for single-plant beds (Lot 1)
  const newData = { ...data, successionPlantings };
  if (batchNum === 1 && !singlePlantName) newData.date = dateEl.value;
  gardenData[currentId] = newData;
  saveData(gardenData);
  renderSuccessionPlan(data.name || PLANTS[currentId]?.name || '');
  showToast('✅ Dată corectată!');
}

// Undo/redo history (each entry snapshots both gardenData and decorItems)
let historyStack = [];
let redoStack = [];

function pushUndoSnapshot() {
  historyStack.push({ gardenData: JSON.stringify(gardenData), decorItems: JSON.stringify(decorItems) });
  if (historyStack.length > MAX_HISTORY) historyStack.shift();
  redoStack = [];
}

function undoAction() {
  if (historyStack.length === 0) { showToast('⚠️ Nimic de anulat'); return; }
  redoStack.push({ gardenData: JSON.stringify(gardenData), decorItems: JSON.stringify(decorItems) });
  const snap = historyStack.pop();
  gardenData = JSON.parse(snap.gardenData);
  decorItems = JSON.parse(snap.decorItems);
  saveData(gardenData);
  saveDecorData();
  initBeds();
  renderDecorItems();
  showToast('↩️ Acțiune anulată');
}

function redoAction() {
  if (redoStack.length === 0) { showToast('⚠️ Nimic de refăcut'); return; }
  historyStack.push({ gardenData: JSON.stringify(gardenData), decorItems: JSON.stringify(decorItems) });
  const snap = redoStack.pop();
  gardenData = JSON.parse(snap.gardenData);
  decorItems = JSON.parse(snap.decorItems);
  saveData(gardenData);
  saveDecorData();
  initBeds();
  renderDecorItems();
  showToast('↪️ Acțiune refăcută');
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undoAction(); }
  if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redoAction(); }
});

// Edit mode state
let editMode = false;
let gardenDataBeforeEdit = null;
let plantsAddedDuringEdit = [];
let decorItemsBeforeEdit = null;

// Decor state
let decorItems = [];

const EMAIL_HISTORY_KEY = 'email_history_v1';
let isNewUser = false;

// Load email history from localStorage and populate datalist
function loadEmailHistory() {
  const emailHistory = JSON.parse(localStorage.getItem(EMAIL_HISTORY_KEY) || '[]');
  const datalist = document.getElementById('email-history');
  if (datalist) {
    datalist.innerHTML = emailHistory.map(email => `<option value="${email}">`).join('');
  }
}

// Save email to localStorage history
function saveEmailToHistory(email) {
  if (!email) return;
  const emailHistory = JSON.parse(localStorage.getItem(EMAIL_HISTORY_KEY) || '[]');
  // Remove if already exists to move it to the end
  const index = emailHistory.indexOf(email);
  if (index > -1) {
    emailHistory.splice(index, 1);
  }
  emailHistory.push(email);
  // Keep only last 5 emails
  if (emailHistory.length > 5) {
    emailHistory.shift();
  }
  localStorage.setItem(EMAIL_HISTORY_KEY, JSON.stringify(emailHistory));
  loadEmailHistory();
  
  // Also save to Firestore if authenticated
  if (currentUser) {
    saveGardensData();
  }
}

// Update edit button text based on user state
function updateEditButtonForNewUser() {
  const editBtn = document.getElementById('edit-mode-btn');
  if (editBtn) {
    editBtn.innerHTML = '✏️ <span>Creează Grădina</span>';
    editBtn.setAttribute('data-label', 'Creează Grădina');
    editBtn.style.display = 'flex';
    console.log('updateEditButtonForNewUser called, button updated');
  } else {
    console.log('updateEditButtonForNewUser: edit button not found');
  }
}

function updateEditButtonForExistingUser() {
  const editBtn = document.getElementById('edit-mode-btn');
  if (editBtn) {
    editBtn.innerHTML = '✏️ <span>Editează Grădina</span>';
    editBtn.setAttribute('data-label', 'Editează Grădina');
    editBtn.style.display = 'flex';
    console.log('updateEditButtonForExistingUser called, button updated');
  } else {
    console.log('updateEditButtonForExistingUser: edit button not found');
  }
}

// Garden modal functions
function openGardenModal() {
  document.getElementById('garden-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderGardenList();
}

function closeGardenModal() {
  document.getElementById('garden-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderGardenList() {
  const container = document.getElementById('garden-list');
  const gardenIds = Object.keys(gardensData);
  
  if (gardenIds.length === 0) {
    container.innerHTML = '<div style="color:#999;font-style:italic;">Nicio grădină creată încă</div>';
    return;
  }
  
  container.innerHTML = gardenIds.map(id => {
    const garden = gardensData[id];
    const isCurrent = id === currentGardenId;
    return `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:#f5f5f5;border-radius:8px;margin-bottom:8px;">
        <div style="flex:1;">
          <span style="font-weight:700;color:var(--green-deep);">${garden.name}</span>
          ${isCurrent ? '<span style="margin-left:8px;font-size:11px;color:var(--accent-green);">(activă)</span>' : ''}
        </div>
        <div style="display:flex;gap:8px;">
          ${!isCurrent ? `<button onclick="switchGarden('${id}')" style="background:var(--green-mid);color:white;border:none;border-radius:6px;padding:6px 12px;font-size:12px;cursor:pointer;font-weight:700;">Selectează</button>` : ''}
          <button onclick="deleteGarden('${id}')" style="background:#E74C3C;color:white;border:none;border-radius:6px;padding:6px 12px;font-size:12px;cursor:pointer;font-weight:700;">Șterge</button>
        </div>
      </div>
    `;
  }).join('');
}

function createGarden() {
  const nameInput = document.getElementById('new-garden-name');
  const name = nameInput.value.trim();
  
  if (!name) {
    showToast('⚠️ Introdu numele grădinii!');
    return;
  }
  
  const gardenId = 'garden_' + Date.now();
  gardensData[gardenId] = {
    name: name,
    gardenData: {},
    decorItems: []
  };
  
  saveGardensData();
  nameInput.value = '';
  renderGardenList();
  showToast('✅ Grădina creată!');
}

function deleteGarden(gardenId) {
  if (Object.keys(gardensData).length <= 1) {
    showToast('⚠️ Trebuie să ai cel puțin o grădină!');
    return;
  }
  
  if (!confirm('Ești sigur că vrei să ștergi această grădină? Toate datele vor fi pierdute.')) {
    return;
  }
  
  delete gardensData[gardenId];
  
  // If deleting current garden, switch to another
  if (gardenId === currentGardenId) {
    const remainingIds = Object.keys(gardensData);
    currentGardenId = remainingIds[0];
    localStorage.setItem('current_garden_id', currentGardenId);
    loadCurrentGardenData();
  }
  
  saveGardensData();
  renderGardenList();
  updateGardenSelector();
  showToast('🗑️ Grădina ștearsă!');
}

function deleteCurrentGarden() {
  if (Object.keys(gardensData).length <= 1) {
    showToast('⚠️ Trebuie să ai cel puțin o grădină!');
    return;
  }
  
  const gardenName = gardensData[currentGardenId]?.name || 'această grădină';
  if (!confirm(`Ești sigur că vrei să ștergi "${gardenName}"? Toate datele vor fi pierdute.`)) {
    return;
  }
  
  delete gardensData[currentGardenId];
  
  // Switch to another garden
  const remainingIds = Object.keys(gardensData);
  currentGardenId = remainingIds[0];
  localStorage.setItem('current_garden_id', currentGardenId);
  loadCurrentGardenData();
  
  saveGardensData();
  updateGardenSelector();
  showToast(`🗑️ "${gardenName}" ștearsă!`);
}

function switchGarden(gardenId) {
  if (gardenId === currentGardenId) return;
  
  // Save current garden data before switching
  saveCurrentGardenData();
  
  currentGardenId = gardenId;
  // Save currentGardenId to localStorage
  localStorage.setItem('current_garden_id', currentGardenId);
  loadCurrentGardenData();
  updateGardenSelector();
  closeGardenModal();
  showToast(`✅ Schimbat la: ${gardensData[gardenId].name}`);
}

function loadCurrentGardenData() {
  const garden = gardensData[currentGardenId];
  if (garden) {
    gardenData = garden.gardenData || {};
    decorItems = garden.decorItems || [];
    
    // Clear all existing beds from DOM
    const gardenInner = document.querySelector('.garden-inner');
    if (gardenInner) {
      const beds = gardenInner.querySelectorAll('.bed');
      beds.forEach(bed => bed.remove());
    }
    
    initBeds();
    renderDecorItems();
  }
}

function saveCurrentGardenData() {
  if (gardensData[currentGardenId]) {
    gardensData[currentGardenId].gardenData = gardenData;
    gardensData[currentGardenId].decorItems = decorItems;
    saveGardensData();
  }
}

function saveGardensData() {
  try {
    localStorage.setItem(GARDENS_KEY, JSON.stringify(gardensData));
    localStorage.setItem('current_garden_id', currentGardenId);
  } catch(e) {
    console.error('Error saving gardens data:', e);
  }
  
  // Also save to Firestore if authenticated
  if (currentUser) {
    updateSyncStatus('⏳ Se salvează...');
    const customPlants = JSON.parse(localStorage.getItem(CUSTOM_PLANTS_KEY) || '[]');
    const emailHistory = JSON.parse(localStorage.getItem(EMAIL_HISTORY_KEY) || '[]');
    db.collection('gardens').doc(currentUser.uid).set({
      gardensData: gardensData,
      currentGardenId: currentGardenId,
      customPlants: customPlants,
      emailHistory: emailHistory,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      const timestamp = new Date().toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
      updateSyncStatus(`✓ Salvat la ${timestamp}`);
    }).catch(error => {
      console.error('Error saving to Firestore:', error);
      updateSyncStatus('❌ Eroare la salvare');
      showToast('❌ Nu s-a putut salva în cloud. Verifică conexiunea.');
    });
  }
}

let _realtimeUnsubscribe = null;

function startRealtimeListener() {
  if (!currentUser || _realtimeUnsubscribe) return;
  
  console.log('[realtime] Starting Firestore listener');
  _realtimeUnsubscribe = db.collection('gardens').doc(currentUser.uid).onSnapshot(doc => {
    if (!doc.exists) return;
    const data = doc.data();
    
    // Ignore updates triggered by our own saves (within 2s)
    const lastUpdated = data.lastUpdated?.toDate?.();
    if (lastUpdated && (new Date() - lastUpdated) < 2000) return;
    
    if (data.gardensData) {
      gardensData = data.gardensData;
      localStorage.setItem(GARDENS_KEY, JSON.stringify(gardensData));
      loadCurrentGardenData();
      updateGardenSelector();
      const timestamp = new Date().toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
      updateSyncStatus(`✓ Sincronizat la ${timestamp}`);
      console.log('[realtime] Data updated from Firestore');
    }
  }, error => {
    console.error('[realtime] Listener error:', error);
  });
}

function stopRealtimeListener() {
  if (_realtimeUnsubscribe) {
    _realtimeUnsubscribe();
    _realtimeUnsubscribe = null;
    console.log('[realtime] Listener stopped');
  }
}

function loadGardensData() {
  // Try localStorage first
  try {
    const localRaw = localStorage.getItem(GARDENS_KEY);
    if (localRaw) {
      gardensData = JSON.parse(localRaw);
      // Load currentGardenId from localStorage
      const savedCurrentId = localStorage.getItem('current_garden_id');
      if (savedCurrentId && gardensData[savedCurrentId]) {
        currentGardenId = savedCurrentId;
      } else {
        // If saved ID doesn't exist, use first available garden
        const gardenIds = Object.keys(gardensData);
        if (gardenIds.length > 0) {
          currentGardenId = gardenIds[0];
          localStorage.setItem('current_garden_id', currentGardenId);
        }
      }
      return;
    }
  } catch(e) {}
  
  // If no local data, migrate from old single-garden format
  try {
    const oldDataRaw = localStorage.getItem(STORAGE_KEY);
    if (oldDataRaw) {
      const oldGardenData = JSON.parse(oldDataRaw);
      gardensData = {
        'default': {
          name: 'Grădina principală',
          gardenData: oldGardenData,
          decorItems: JSON.parse(localStorage.getItem(DECOR_ITEMS_KEY) || '[]')
        }
      };
      currentGardenId = 'default';
      saveGardensData();
      // Migrate to Firestore if authenticated
      if (currentUser) {
        saveGardensData();
      }
    }
  } catch(e) {
    console.error('Error migrating old data:', e);
  }
  
  // If still no data, create default garden
  if (Object.keys(gardensData).length === 0) {
    gardensData = {
      'default': {
        name: 'Grădina principală',
        gardenData: {},
        decorItems: []
      }
    };
    currentGardenId = 'default';
    saveGardensData();
  }

  // Cleanup: remove non-bed entries (entries without valid position) from all gardens
  let cleanupCount = 0;
  Object.values(gardensData).forEach(garden => {
    if (garden.gardenData) {
      Object.keys(garden.gardenData).forEach(plantId => {
        const data = garden.gardenData[plantId];
        if (!isRealBed(data)) {
          delete garden.gardenData[plantId];
          cleanupCount++;
        }
      });
    }
  });

  // Cleanup: remove customPlants entries whose IDs no longer exist in any garden
  const customPlants = JSON.parse(localStorage.getItem(CUSTOM_PLANTS_KEY) || '[]');
  const activePlantIds = new Set();
  Object.values(gardensData).forEach(garden => {
    if (garden.gardenData) {
      Object.keys(garden.gardenData).forEach(id => activePlantIds.add(id));
    }
  });
  const originalCustomCount = customPlants.length;
  const filteredCustomPlants = customPlants.filter(cp => activePlantIds.has(cp.id));
  if (filteredCustomPlants.length !== originalCustomCount) {
    localStorage.setItem(CUSTOM_PLANTS_KEY, JSON.stringify(filteredCustomPlants));
    cleanupCount += (originalCustomCount - filteredCustomPlants.length);
  }

  // Persist cleaned data if any cleanup occurred
  if (cleanupCount > 0) {
    console.log(`[loadGardensData] Cleaned up ${cleanupCount} orphaned entries`);
    saveGardensData();
  }
}

function updateGardenSelector() {
  const selector = document.getElementById('garden-selector');
  if (!selector) return;

  selector.innerHTML = Object.entries(gardensData).map(([id, garden]) => {
    return `<option value="${id}" ${id === currentGardenId ? 'selected' : ''}>${garden.name}</option>`;
  }).join('');
  
  // Update calendar filter
  const calendarFilter = document.getElementById('calendar-garden-filter');
  if (calendarFilter) {
    calendarFilter.innerHTML = '<option value="all">Toate grădinile</option>' + 
      Object.entries(gardensData).map(([id, garden]) => {
        return `<option value="${id}">${garden.name}</option>`;
      }).join('');
  }
  
  // Update progress filter
  const progressFilter = document.getElementById('progress-garden-filter');
  if (progressFilter) {
    progressFilter.innerHTML = '<option value="all">Toate grădinile</option>' + 
      Object.entries(gardensData).map(([id, garden]) => {
        return `<option value="${id}">${garden.name}</option>`;
      }).join('');
  }
}

// Decor modal functions
function openDecorModal() {
  document.getElementById('decor-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDecorModal() {
  document.getElementById('decor-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function openEmojiPicker() {
  document.getElementById('emoji-picker').classList.add('open');
}

function showEmojiCategory(category) {
  const categories = {
    nature: ['🌱', '🌿', '🌲', '🌳', '🌴', '🌵', '🌾', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼', '🌽', '🍀', '🍁', '🍂', '🍃'],
    animals: ['🐕', '🐈', '🐇', '🦊', '🦝', '🦔', '🐿️', '🦋', '🐌', '🐞', '🐜', '🐝', '🦗', '🕷️', '🐛', '🦟', '🦠'],
    objects: ['🪑', '🪴', '🪵', '🪨', '🪣', '🪤', '🪦', '🪧', '🏠', '🏡', '🏢', '🏭', '🌉', '🚧', '⛲', '🗿', '🪯', '🪬'],
    food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆'],
    weather: ['☀️', '🌤️', '⛅', '☁️', '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '🌬️', '🌫️', '🌪️', '🌈', '☂️', '⚡', '☄️'],
    tools: ['🪚', '🪛', '🪜', '🧲', '🔨', '⚒️', '🛠️', '⛏️', '🔧', '🔩', '⚙️', '🧱', '⛓️', '🧰', '🔫', '🏹', '🪃']
  };
  
  const picker = document.getElementById('emoji-picker-content');
  picker.innerHTML = categories[category].map(emoji => 
    `<button class="emoji-btn" onclick="selectEmoji('${emoji}')">${emoji}</button>`
  ).join('');
}

function selectEmoji(emoji) {
  document.getElementById('decor-emoji').value = emoji;
  document.getElementById('emoji-picker').classList.remove('open');
}

function addDecor() {
  const emoji = document.getElementById('decor-emoji').value;
  const name = document.getElementById('decor-name').value.trim();
  
  if (!emoji) {
    showToast('⚠️ Selectează un emoji!');
    return;
  }
  
  const decorItem = {
    id: 'decor_' + Date.now(),
    emoji: emoji,
    name: name || 'Decor',
    position: { top: 100, left: 100 }
  };
  
  decorItems.push(decorItem);
  saveDecorData();
  renderDecorItems();
  
  document.getElementById('decor-emoji').value = '';
  document.getElementById('decor-name').value = '';
  closeDecorModal();
  
  showToast('✅ Decor adăugat!');
}

function handleDecorDragStart(e) {
  if (!editMode) {
    e.preventDefault();
    return;
  }
  
  const decorEl = e.target.closest('.decor-item');
  if (!decorEl) return;
  
  const decorId = decorEl.dataset.id;
  const decor = decorItems.find(d => d.id === decorId);
  if (!decor) return;
  
  e.dataTransfer.setData('text/plain', decorId);
  e.dataTransfer.effectAllowed = 'move';
  
  // Store offset for precise positioning
  const rect = decorEl.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;
  e.dataTransfer.setData('offsetX', offsetX);
  e.dataTransfer.setData('offsetY', offsetY);
  
  decorEl.style.opacity = '0.5';
}

function handleDecorDragEnd(e) {
  const decorEl = e.target.closest('.decor-item');
  if (decorEl) {
    decorEl.style.opacity = '1';
  }
}

function saveDecorData() {
  try {
    localStorage.setItem(DECOR_ITEMS_KEY, JSON.stringify(decorItems));
  } catch(e) {
    console.error('Error saving decor data:', e);
  }
  
  // Also save to gardensData
  if (gardensData[currentGardenId]) {
    gardensData[currentGardenId].decorItems = decorItems;
    saveGardensData();
  }
}

function loadDecorData() {
  try {
    const data = localStorage.getItem(DECOR_ITEMS_KEY);
    if (data) {
      decorItems = JSON.parse(data);
    }
  } catch(e) {
    console.error('Error loading decor data:', e);
  }
}

function renderDecorItems() {
  const gardenInner = document.querySelector('.garden-inner');
  if (!gardenInner) return;
  
  // Remove existing decor items
  const existingDecor = gardenInner.querySelectorAll('.decor-item');
  existingDecor.forEach(el => el.remove());
  
  // Add decor items
  decorItems.forEach(decor => {
    const decorEl = document.createElement('div');
    decorEl.className = 'decor-item';
    decorEl.dataset.id = decor.id;
    decorEl.style.cssText = `position:absolute;top:${decor.position.top}px;left:${decor.position.left}px;font-size:24px;cursor:${editMode ? 'move' : 'default'};user-select:none;`;
    decorEl.textContent = decor.emoji;
    decorEl.title = decor.name;
    
    if (editMode) {
      decorEl.draggable = true;
      decorEl.addEventListener('dragstart', handleDecorDragStart);
      decorEl.addEventListener('dragend', handleDecorDragEnd);
      
      // Add delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'decor-delete-btn';
      deleteBtn.innerHTML = '×';
      deleteBtn.style.cssText = 'position:absolute;top:-8px;right:-8px;width:20px;height:20px;background:#E74C3C;color:white;border:none;border-radius:50%;cursor:pointer;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        const index = decorItems.findIndex(d => d.id === decor.id);
        if (index > -1) {
          decorItems.splice(index, 1);
          saveDecorData();
          renderDecorItems();
          showToast('🗑️ Decor șters!');
        }
      };
      decorEl.appendChild(deleteBtn);
    }
    
    gardenInner.appendChild(decorEl);
  });
}

function deleteDecor(decorId) {
  const index = decorItems.findIndex(d => d.id === decorId);
  if (index > -1) {
    decorItems.splice(index, 1);
    saveDecorData();
    renderDecorItems();
    showToast('🗑️ Decor șters!');
  }
}

// Firebase initialization
let currentUser = null;
let db = null;
let auth = null;

function initializeFirebase() {
  if (typeof firebase === 'undefined') {
    console.log('Firebase not loaded - using localStorage only');
    return;
  }
  
  try {
    // Initialize Firebase with config from firebase-config.js
    const firebaseConfig = window.firebaseConfig;
    if (!firebaseConfig) {
      console.log('Firebase config not found - using localStorage only');
      return;
    }
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    auth = firebase.auth();
    db = firebase.firestore();
    
    // Auth state observer
    auth.onAuthStateChanged((user) => {
      if (user) {
        currentUser = user;
        console.log('[Firebase] User signed in:', user.email);
        loadFromFirestore();
        startRealtimeListener();
        updateAuthUI(true);
        updateEditButtonForExistingUser();
      } else {
        currentUser = null;
        console.log('[Firebase] User signed out');
        stopRealtimeListener();
        updateAuthUI(false);
        updateEditButtonForNewUser();
      }
    });
    
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

function loadData() {
  loadGardensData();
  loadCustomPlants();
  loadDecorData();
}

function loadFromFirestore() {
  if (!currentUser || !db) return;
  
  db.collection('gardens').doc(currentUser.uid).get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        
        if (data.gardensData) {
          gardensData = data.gardensData;
          localStorage.setItem(GARDENS_KEY, JSON.stringify(gardensData));
        }
        
        if (data.currentGardenId) {
          currentGardenId = data.currentGardenId;
          localStorage.setItem('current_garden_id', currentGardenId);
        }
        
        if (data.customPlants) {
          localStorage.setItem(CUSTOM_PLANTS_KEY, JSON.stringify(data.customPlants));
        }
        
        if (data.emailHistory) {
          localStorage.setItem(EMAIL_HISTORY_KEY, JSON.stringify(data.emailHistory));
          loadEmailHistory();
        }
        
        loadCurrentGardenData();
        updateGardenSelector();
        loadCustomPlants();
        loadDecorData();
        
        console.log('[Firebase] Data loaded from Firestore');
      }
    })
    .catch(error => {
      console.error('Error loading from Firestore:', error);
    });
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(e) {
    console.error('Error saving data:', e);
  }
}

function getData(id) {
  return gardenData[id] || {};
}

function updateSyncStatus(message) {
  const statusEl = document.getElementById('sync-status');
  if (statusEl) {
    statusEl.textContent = message;
  }
}

// Auth modal functions
function openAuthModal() {
  document.getElementById('auth-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('auth-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleAuthMode() {
  const isLogin = document.getElementById('auth-mode-toggle').textContent === 'Autentificare';
  document.getElementById('auth-mode-toggle').textContent = isLogin ? 'Înregistrare' : 'Autentificare';
  document.getElementById('auth-title').textContent = isLogin ? 'Creează cont nou' : 'Autentificare';
  document.getElementById('auth-submit').textContent = isLogin ? 'Înregistrează-te' : 'Autentifică-te';
  document.getElementById('auth-confirm-password').style.display = isLogin ? 'block' : 'none';
}

function updateAuthModalUI(isLoggedIn) {
  const authBtn = document.getElementById('auth-btn');
  if (authBtn) {
    if (isLoggedIn) {
      authBtn.textContent = 'Deconectare';
      authBtn.onclick = handleLogout;
    } else {
      authBtn.textContent = 'Autentificare';
      authBtn.onclick = openAuthModal;
    }
  }
}

function updateAuthUI(isLoggedIn) {
  updateAuthModalUI(isLoggedIn);
  
  const syncStatus = document.getElementById('sync-status');
  if (syncStatus) {
    syncStatus.style.display = isLoggedIn ? 'block' : 'none';
  }
}

function handleAuthSubmit(e) {
  e.preventDefault();
  
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const isLogin = document.getElementById('auth-mode-toggle').textContent === 'Înregistrare';
  
  if (!email || !password) {
    showToast('⚠️ Completează toate câmpurile!');
    return;
  }
  
  if (!isLogin) {
    const confirmPassword = document.getElementById('auth-confirm-password').value;
    if (password !== confirmPassword) {
      showToast('⚠️ Parolele nu coincid!');
      return;
    }
  }
  
  if (isLogin) {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        closeAuthModal();
        saveEmailToHistory(email);
        showToast('✅ Autentificat cu succes!');
      })
      .catch(error => {
        console.error('Login error:', error);
        showToast('❌ Eroare la autentificare: ' + error.message);
      });
  } else {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        closeAuthModal();
        saveEmailToHistory(email);
        showToast('✅ Cont creat cu succes!');
      })
      .catch(error => {
        console.error('Signup error:', error);
        showToast('❌ Eroare la înregistrare: ' + error.message);
      });
  }
}

function handleLogout() {
  if (!confirm('Ești sigur că vrei să te deconectezi?')) {
    return;
  }
  
  auth.signOut()
    .then(() => {
      showToast('👋 Deconectat cu succes!');
    })
    .catch(error => {
      console.error('Logout error:', error);
      showToast('❌ Eroare la deconectare');
    });
}

function closeLogoutModal() {
  document.getElementById('logout-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Tab switching
function showTab(id) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(id).classList.add('active');
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.tab === id) {
      btn.classList.add('active');
    }
  });
  
  // Render tab-specific content
  if (id === 'calendar') {
    renderCalendar();
  } else if (id === 'progress') {
    renderProgress();
  }
}

// Modal functions
let currentId = null;

function openModal(id) {
  currentId = id;
  const data = getData(id);
  const plant = PLANTS[id];
  
  if (!plant) {
    console.error('Plant not found:', id);
    return;
  }
  
  document.getElementById('modal-title').textContent = data.name || plant.name;
  document.getElementById('modal-emoji').textContent = data.emoji || plant.emoji;
  document.getElementById('modal-type').textContent = plant.type;
  document.getElementById('modal-period').textContent = plant.period;
  document.getElementById('modal-obs').textContent = plant.obs;
  
  document.getElementById('modal-date').value = data.date || new Date().toISOString().split('T')[0];
  document.getElementById('modal-status').value = data.status || 'neplantat';
  document.getElementById('modal-note').value = data.note || '';
  document.getElementById('modal-watering').value = data.wateringDate || '';
  
  // Render succession plan
  renderSuccessionPlan(data.name || plant.name);
  
  // Render harvest list
  renderHarvestList();
  
  // Render history
  renderHistory();
  
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentId = null;
}

function saveModal() {
  if (!currentId) return;
  
  const data = getData(currentId);
  
  gardenData[currentId] = {
    ...data,
    date: document.getElementById('modal-date').value,
    status: document.getElementById('modal-status').value,
    note: document.getElementById('modal-note').value,
    wateringDate: document.getElementById('modal-watering').value
  };
  
  // Add to history
  const history = data.history || [];
  gardenData[currentId].history = history.concat({
    date: document.getElementById('modal-date').value,
    status: document.getElementById('modal-status').value,
    note: document.getElementById('modal-note').value
  });
  
  saveData(gardenData);
  
  // Update bed
  const bed = document.querySelector(`[data-id="${currentId}"]`);
  if (bed) {
    bed.dataset.status = document.getElementById('modal-status').value;
  }
  
  closeModal();
  showToast('✅ Salvat!');
}

function addHarvestEntry() {
  if (!currentId) return;
  
  const data = getData(currentId);
  const harvest = data.harvest || [];
  
  const today = new Date().toISOString().split('T')[0];
  gardenData[currentId] = {
    ...data,
    harvest: harvest.concat({
      date: today,
      quantity: '',
      note: ''
    })
  };
  
  saveData(gardenData);
  renderHarvestList();
}

function renderHarvestList() {
  if (!currentId) return;
  
  const data = getData(currentId);
  const harvest = data.harvest || [];
  
  const container = document.getElementById('harvest-list');
  container.innerHTML = harvest.map((h, index) => `
    <div class="harvest-entry">
      <input type="date" value="${h.date}" onchange="updateHarvestEntry(${index}, 'date', this.value)">
      <input type="text" placeholder="Cantitate" value="${h.quantity}" onchange="updateHarvestEntry(${index}, 'quantity', this.value)">
      <input type="text" placeholder="Notă" value="${h.note}" onchange="updateHarvestEntry(${index}, 'note', this.value)">
      <button onclick="removeHarvestEntry(${index})" style="background:#E74C3C;color:white;border:none;border-radius:4px;padding:4px 8px;cursor:pointer;">×</button>
    </div>
  `).join('');
}

function updateHarvestEntry(index, field, value) {
  if (!currentId) return;
  
  const data = getData(currentId);
  const harvest = data.harvest || [];
  
  harvest[index][field] = value;
  gardenData[currentId] = {
    ...data,
    harvest: harvest
  };
  
  saveData(gardenData);
}

function removeHarvestEntry(index) {
  if (!currentId) return;
  
  const data = getData(currentId);
  const harvest = data.harvest || [];
  
  harvest.splice(index, 1);
  gardenData[currentId] = {
    ...data,
    harvest: harvest
  };
  
  saveData(gardenData);
  renderHarvestList();
}

function renderHistory() {
  if (!currentId) return;
  
  const data = getData(currentId);
  const history = data.history || [];
  
  const container = document.getElementById('history-list');
  container.innerHTML = history.slice().reverse().map((h, index) => `
    <div class="history-entry">
      <span class="history-date">${h.date}</span>
      <span class="history-status">${h.status}</span>
      <span class="history-note">${h.note || ''}</span>
      <button onclick="removeHistoryItem(${history.length - 1 - index})" style="background:#E74C3C;color:white;border:none;border-radius:4px;padding:4px 8px;cursor:pointer;">×</button>
    </div>
  `).join('');
}

function removeHistoryItem(index) {
  if (!currentId) return;
  
  const data = getData(currentId);
  const history = data.history || [];
  
  history.splice(index, 1);
  gardenData[currentId] = {
    ...data,
    history: history
  };
  
  saveData(gardenData);
  renderHistory();
}

function deletePlant() {
  if (!currentId) return;
  
  if (!confirm('Ești sigur că vrei să ștergi această plantă?')) {
    return;
  }
  
  delete gardenData[currentId];
  saveData(gardenData);
  
  const bed = document.querySelector(`[data-id="${currentId}"]`);
  if (bed) {
    bed.remove();
  }
  
  closeModal();
  showToast('🗑️ Plantă ștearsă!');
}

function editModalTitle() {
  const titleEl = document.getElementById('modal-title');
  const currentTitle = titleEl.textContent;
  
  titleEl.innerHTML = `<input type="text" id="modal-title-input" value="${currentTitle}" style="font-size:18px;font-weight:700;border:1px solid #ddd;border-radius:4px;padding:4px 8px;">`;
  document.getElementById('modal-title-input').focus();
}

function saveModalTitleInline() {
  const input = document.getElementById('modal-title-input');
  if (!input) return;
  
  const newTitle = input.value.trim();
  if (!newTitle) {
    showToast('⚠️ Numele nu poate fi gol!');
    return;
  }
  
  if (!currentId) return;
  
  const data = getData(currentId);
  gardenData[currentId] = {
    ...data,
    name: newTitle
  };
  
  saveData(gardenData);
  
  document.getElementById('modal-title').textContent = newTitle;
  
  // Update bed name
  const bed = document.querySelector(`[data-id="${currentId}"]`);
  if (bed) {
    const bedName = bed.querySelector('.bed-name');
    if (bedName) {
      bedName.textContent = newTitle;
    }
  }
  
  showToast('✅ Nume actualizat!');
}

function toggleEmojiPicker() {
  const picker = document.getElementById('modal-emoji-picker');
  picker.classList.toggle('open');
}

function selectModalEmoji(emoji) {
  if (!currentId) return;
  
  const data = getData(currentId);
  gardenData[currentId] = {
    ...data,
    emoji: emoji
  };
  
  saveData(gardenData);
  
  document.getElementById('modal-emoji').textContent = emoji;
  
  // Update bed emoji
  const bed = document.querySelector(`[data-id="${currentId}"]`);
  if (bed) {
    const bedEmoji = bed.querySelector('.bed-emoji');
    if (bedEmoji) {
      bedEmoji.textContent = emoji;
    }
  }
  
  document.getElementById('modal-emoji-picker').classList.remove('open');
  showToast('✅ Emoji actualizat!');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#333;color:white;padding:12px 24px;border-radius:8px;z-index:10000;animation:slideIn 0.3s ease;';
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Export data
function exportData() {
  const data = {
    gardensData: gardensData,
    currentGardenId: currentGardenId,
    customPlants: JSON.parse(localStorage.getItem(CUSTOM_PLANTS_KEY) || '[]'),
    exportDate: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `grădina-export-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  showToast('✅ Date exportate!');
}

// Import data
function importData() {
  const input = document.getElementById('import-file');
  if (!input.files.length) {
    showToast('⚠️ Selectează un fișier!');
    return;
  }
  
  const file = input.files[0];
  const reader = new FileReader();
  
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      
      if (data.gardensData) {
        gardensData = data.gardensData;
        localStorage.setItem(GARDENS_KEY, JSON.stringify(gardensData));
      }
      
      if (data.currentGardenId) {
        currentGardenId = data.currentGardenId;
        localStorage.setItem('current_garden_id', currentGardenId);
      }
      
      if (data.customPlants) {
        localStorage.setItem(CUSTOM_PLANTS_KEY, JSON.stringify(data.customPlants));
      }
      
      loadCurrentGardenData();
      updateGardenSelector();
      loadCustomPlants();
      
      showToast('✅ Date importate!');
    } catch (error) {
      console.error('Import error:', error);
      showToast('❌ Eroare la import: fișier invalid');
    }
  };
  
  reader.readAsText(file);
}

// Share link generation
function generateShareLink() {
  const data = {
    gardensData: gardensData,
    currentGardenId: currentGardenId,
    customPlants: JSON.parse(localStorage.getItem(CUSTOM_PLANTS_KEY) || '[]')
  };
  
  const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(data));
  const url = window.location.origin + window.location.pathname + '?data=' + compressed;
  
  document.getElementById('share-link').value = url;
  document.getElementById('share-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function copyShareLink() {
  const linkInput = document.getElementById('share-link');
  linkInput.select();
  document.execCommand('copy');
  showToast('✅ Link copiat!');
}

function closeShareModal() {
  document.getElementById('share-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function importFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const data = params.get('data');
  
  if (data) {
    try {
      const decompressed = LZString.decompressFromEncodedURIComponent(data);
      const parsed = JSON.parse(decompressed);
      
      if (parsed.gardensData) {
        gardensData = parsed.gardensData;
        localStorage.setItem(GARDENS_KEY, JSON.stringify(gardensData));
      }
      
      if (parsed.currentGardenId) {
        currentGardenId = parsed.currentGardenId;
        localStorage.setItem('current_garden_id', currentGardenId);
      }
      
      if (parsed.customPlants) {
        localStorage.setItem(CUSTOM_PLANTS_KEY, JSON.stringify(parsed.customPlants));
      }
      
      // Clear URL params
      window.history.replaceState({}, document.title, window.location.pathname);
      
      showToast('✅ Date încărcate din link!');
    } catch (error) {
      console.error('URL import error:', error);
    }
  }
}

// Custom plants
let customPlants = [];

function loadCustomPlants() {
  try {
    const data = localStorage.getItem(CUSTOM_PLANTS_KEY);
    if (data) {
      customPlants = JSON.parse(data);
      // Add custom plants to PLANTS object
      customPlants.forEach(cp => {
        PLANTS[cp.id] = {
          name: cp.name,
          emoji: cp.emoji,
          type: cp.type || 'strat pământ',
          period: cp.period || 'Nespecificat',
          obs: cp.obs || ''
        };
      });
    }
  } catch(e) {
    console.error('Error loading custom plants:', e);
  }
}

function addCustomPlant() {
  const name = document.getElementById('custom-plant-name').value.trim();
  const emoji = document.getElementById('custom-plant-emoji').value;
  const type = document.getElementById('custom-plant-type').value;
  const period = document.getElementById('custom-plant-period').value;
  const obs = document.getElementById('custom-plant-obs').value;
  
  if (!name || !emoji) {
    showToast('⚠️ Completează numele și emoji-ul!');
    return;
  }
  
  const id = generateUniqueId();
  const customPlant = {
    id: id,
    name: name,
    emoji: emoji,
    type: type,
    period: period,
    obs: obs
  };
  
  customPlants.push(customPlant);
  localStorage.setItem(CUSTOM_PLANTS_KEY, JSON.stringify(customPlants));
  
  // Add to PLANTS object
  PLANTS[id] = {
    name: name,
    emoji: emoji,
    type: type,
    period: period,
    obs: obs
  };
  
  // Clear form
  document.getElementById('custom-plant-name').value = '';
  document.getElementById('custom-plant-emoji').value = '';
  document.getElementById('custom-plant-type').value = 'strat pământ';
  document.getElementById('custom-plant-period').value = '';
  document.getElementById('custom-plant-obs').value = '';
  
  closeCustomPlantModal();
  showToast('✅ Plantă personalizată adăugată!');
}

function closeCustomPlantModal() {
  document.getElementById('custom-plant-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function generateUniqueId() {
  return 'custom_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function getBedClassFromPlantType(type) {
  const typeMap = {
    'strat pământ': 'bed-ground',
    'strat înalt': 'bed-raised',
    'micro seră': 'bed-greenhouse',
    'perenă': 'bed-perennial'
  };
  return typeMap[type] || 'bed-ground';
}

function saveCustomPlant() {
  // This is a placeholder for future functionality
  showToast('✅ Salvat!');
}

// Drag and drop handlers
let draggedElement = null;
let dragOffset = { x: 0, y: 0 };

function handleDragStart(e) {
  if (!editMode) {
    e.preventDefault();
    return;
  }
  
  draggedElement = e.target.closest('.bed');
  if (!draggedElement) return;
  
  const rect = draggedElement.getBoundingClientRect();
  dragOffset.x = e.clientX - rect.left;
  dragOffset.y = e.clientY - rect.top;
  
  draggedElement.style.opacity = '0.5';
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
  if (draggedElement) {
    draggedElement.style.opacity = '1';
    draggedElement = null;
  }
}

// Resize handlers
let resizingElement = null;
let resizeStart = { x: 0, y: 0 };
let resizeStartSize = { width: 0, height: 0 };

function handleResizeStart(e) {
  if (!editMode) return;
  
  e.preventDefault();
  e.stopPropagation();
  
  resizingElement = e.target.closest('.bed');
  if (!resizingElement) return;
  
  resizeStart.x = e.clientX;
  resizeStart.y = e.clientY;
  resizeStartSize.width = parseInt(resizingElement.style.width);
  resizeStartSize.height = parseInt(resizingElement.style.height);
  
  document.addEventListener('mousemove', handleResizeMove);
  document.addEventListener('mouseup', handleResizeEnd);
}

function handleResizeMove(e) {
  if (!resizingElement) return;
  
  const dx = e.clientX - resizeStart.x;
  const dy = e.clientY - resizeStart.y;
  
  const newWidth = Math.max(40, resizeStartSize.width + dx);
  const newHeight = Math.max(40, resizeStartSize.height + dy);
  
  resizingElement.style.width = newWidth + 'px';
  resizingElement.style.height = newHeight + 'px';
  
  // Update classes based on size
  if (newWidth <= 80 && newHeight <= 75) {
    resizingElement.classList.add('small');
  } else {
    resizingElement.classList.remove('small');
  }
  
  if (newWidth < 85) {
    resizingElement.classList.add('narrow');
  } else {
    resizingElement.classList.remove('narrow');
  }
}

function handleResizeEnd(e) {
  if (!resizingElement) return;
  
  const id = resizingElement.dataset.id;
  if (id && gardenData[id]) {
    gardenData[id].dimensions = {
      width: parseInt(resizingElement.style.width),
      height: parseInt(resizingElement.style.height)
    };
    saveData(gardenData);
  }
  
  document.removeEventListener('mousemove', handleResizeMove);
  document.removeEventListener('mouseup', handleResizeEnd);
  resizingElement = null;
}

// Collision detection
function checkCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

// Calendar functions
function isRealBed(data) {
  return data && data.position && typeof data.position.top === 'number' && typeof data.position.left === 'number';
}

function getCurrentSeason() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'primăvară';
  if (month >= 5 && month <= 7) return 'vară';
  if (month >= 8 && month <= 10) return 'toamnă';
  return 'iarnă';
}

function isPlantingSeason(plant) {
  const season = getCurrentSeason();
  // Simplified logic - would need more detailed plant data
  return true;
}

function needsWatering(wateringDate) {
  if (!wateringDate) return false;
  const lastWatered = new Date(wateringDate);
  const daysSince = (new Date() - lastWatered) / (1000 * 60 * 60 * 24);
  return daysSince >= 3;
}

function calculateExpectedHarvestDate(plantId) {
  const data = getData(plantId);
  if (!data.date) return null;
  
  const plant = PLANTS[plantId];
  if (!plant) return null;
  
  // Default days to harvest (would be plant-specific in real app)
  const daysToHarvest = 60;
  const plantDate = new Date(data.date);
  const harvestDate = new Date(plantDate);
  harvestDate.setDate(harvestDate.getDate() + daysToHarvest);
  
  return harvestDate;
}

function getSeasonalRecommendations() {
  const season = getCurrentSeason();
  const recommendations = {
    'primăvară': ['Mazăre', 'Salată', 'Spanac', 'Ridichi', 'Ceapă'],
    'vară': ['Roșii', 'Castravete', 'Ardei', 'Dovleac', 'Fasole'],
    'toamnă': ['Varză', 'Sfeclă', 'Morcov', 'Usturoi', 'Ceapă'],
    'iarnă': ['Usturoi', 'Ceapă', 'Spanac de iarnă']
  };
  
  return recommendations[season] || [];
}

function calculateHarvestForecast() {
  const forecast = [];
  
  Object.entries(gardenData).forEach(([id, data]) => {
    if (!isRealBed(data) || !data.date) return;
    
    const plant = PLANTS[id];
    if (!plant) return;
    
    const harvestDate = calculateExpectedHarvestDate(id);
    if (!harvestDate) return;
    
    const daysUntil = Math.ceil((harvestDate - new Date()) / (1000 * 60 * 60 * 24));
    
    if (daysUntil >= 0 && daysUntil <= 30) {
      forecast.push({
        plant: plant.name,
        emoji: plant.emoji,
        expectedDate: fmtDate(harvestDate),
        expectedYield: 'Estimată',
        daysUntil: daysUntil
      });
    }
  });
  
  return forecast.sort((a, b) => a.daysUntil - b.daysUntil);
}

function calculatePlantingToHarvestTimeline() {
  const timeline = [];
  
  Object.entries(gardenData).forEach(([id, data]) => {
    if (!isRealBed(data) || !data.date) return;
    
    const plant = PLANTS[id];
    if (!plant) return;
    
    const harvestDate = calculateExpectedHarvestDate(id);
    if (!harvestDate) return;
    
    const plantDate = new Date(data.date);
    const daysToHarvest = Math.ceil((harvestDate - plantDate) / (1000 * 60 * 60 * 24));
    
    if (data.status === 'recoltat') {
      timeline.push({
        plant: plant.name,
        emoji: plant.emoji,
        daysToHarvest: daysToHarvest
      });
    }
  });
  
  return timeline;
}

function renderCalendar() {
  const container = document.getElementById('calendar-content');
  const selectedGardenId = document.getElementById('calendar-garden-filter')?.value || 'all';
  
  // Get seasonal recommendations
  const season = getCurrentSeason();
  const recommendations = getSeasonalRecommendations();
  
  // Aggregate plants from all gardens or selected garden
  let allPlants = [];
  Object.entries(gardensData).forEach(([gardenId, garden]) => {
    if (selectedGardenId !== 'all' && gardenId !== selectedGardenId) return;
    
    Object.entries(garden.gardenData || {}).forEach(([plantId, data]) => {
      const plant = PLANTS[plantId];
      if (plant && isRealBed(data)) {
        allPlants.push({
          id: plantId,
          data: data,
          plant: plant,
          gardenName: garden.name
        });
      }
    });
  });
  
  container.innerHTML = `
    <div class="calendar-section">
      <h3>🌅 Sezon curent: ${season}</h3>
      <div class="seasonal-recommendations">
        <h4>Plante recomandate pentru ${season}:</h4>
        <div class="recommendation-list">
          ${recommendations.map(r => `<span class="recommendation-tag">${r}</span>`).join('')}
        </div>
      </div>
    </div>
    
    <div class="calendar-section">
      <h3>📅 Plante din grădină</h3>
      ${allPlants.length === 0 ? '<p style="color:#999;">Nicio plantă în grădină</p>' : 
        allPlants.map(p => {
          const harvestDate = calculateExpectedHarvestDate(p.id);
          const daysUntil = harvestDate ? Math.ceil((harvestDate - new Date()) / (1000 * 60 * 60 * 24)) : null;
          const needsWater = needsWatering(p.data.wateringDate);
          
          return `
            <div class="calendar-plant-card">
              <div class="calendar-plant-header">
                <span class="calendar-plant-emoji">${p.data.emoji || p.plant.emoji}</span>
                <span class="calendar-plant-name">${p.data.name || p.plant.name}</span>
                <span class="calendar-plant-status status-pill ${p.data.status || 'neplantat'}">${p.data.status || 'neplantat'}</span>
              </div>
              <div class="calendar-plant-details">
                <div class="calendar-detail">
                  <span class="detail-label">Data plantării:</span>
                  <span class="detail-value">${p.data.date || '-'}</span>
                </div>
                ${harvestDate ? `
                <div class="calendar-detail">
                  <span class="detail-label">Recoltă estimată:</span>
                  <span class="detail-value">${fmtDate(harvestDate)} ${daysUntil !== null ? `(${daysUntil} zile)` : ''}</span>
                </div>
                ` : ''}
                <div class="calendar-detail">
                  <span class="detail-label">Udare:</span>
                  <span class="detail-value ${needsWater ? 'needs-water' : ''}">${needsWater ? '⚠️ Necesită udare' : 'OK'}</span>
                </div>
                ${p.data.wateringDate ? `
                <div class="calendar-detail">
                  <span class="detail-label">Ultima udare:</span>
                  <span class="detail-value">${p.data.wateringDate}</span>
                </div>
                ` : ''}
                ${p.gardenName ? `
                <div class="calendar-detail">
                  <span class="detail-label">Grădină:</span>
                  <span class="detail-value">${p.gardenName}</span>
                </div>
                ` : ''}
                ${p.data.succession && p.data.succession.length > 0 ? (() => {
                  const today = new Date().toISOString().split('T')[0];
                  const upcoming = p.data.succession.filter(s => s.date >= today && !s.completed);
                  return upcoming.length > 0 ? `<div class="info-chip" style="grid-column:span 2;"><div class="chip-label">🔄 Plantare succesivă</div><div class="chip-value" style="font-size:10px;">${upcoming.slice(0, 2).map(s => `<div style="border-bottom:1px solid #eee;padding:2px 0;color:#3498DB;">${s.date} (la ${s.interval} zile)</div>`).join('')}</div></div>` : '';
                })() : ''}
              </div>
            </div>
          `;
        }).join('')
      }
    </div>
  `;
}

// ============ PROGRESS ============
function renderProgress() {
  // Get selected garden filter, restore persisted value
  const progressFilter = document.getElementById('progress-garden-filter');
  if (progressFilter && !progressFilter.dataset.initialized) {
    const saved = localStorage.getItem('progress_garden_filter');
    if (saved && (saved === 'all' || gardensData[saved])) progressFilter.value = saved;
    progressFilter.dataset.initialized = '1';
    progressFilter.addEventListener('change', () => {
      localStorage.setItem('progress_garden_filter', progressFilter.value);
      renderProgress();
    });
  }
  const selectedGardenId = progressFilter ? progressFilter.value : 'all';
  
  // Aggregate data from all gardens based on filter
  let allPlants = [];
  Object.entries(gardensData).forEach(([gardenId, garden]) => {
    if (selectedGardenId !== 'all' && gardenId !== selectedGardenId) return;
    
    Object.entries(garden.gardenData || {}).forEach(([plantId, data]) => {
      const plant = PLANTS[plantId];
      // Only include entries that are real beds (have a valid position)
      if (plant && isRealBed(data)) {
        allPlants.push({
          id: plantId,
          data: data,
          plant: plant,
          gardenName: garden.name,
          gardenId: gardenId
        });
      }
    });
  });
  
  let planted = 0, harvested = 0, sprouted = 0, perena = 0, problems = 0, totalHarvestQty = 0, neplantat = 0;
  allPlants.forEach(({ data }) => {
    const s = data.status;
    if (s === 'plantat') planted++;
    if (s === 'recoltat') harvested++;
    if (s === 'Încolțit') sprouted++;
    if (s === 'perena') perena++;
    if (s === 'problema') problems++;
    if (s === 'neplantat') neplantat++;
    
    // Count total harvest quantity
    const harvest = data.harvest || [];
    harvest.forEach(h => {
      const qty = parseFloat(h.quantity) || 0;
      totalHarvestQty += qty;
    });
  });
  
  const total = allPlants.length;
  // Active plants = all non-neplantat (beds in use)
  const totalActive = total - neplantat;
  // Progress: % of all plant slots that are active (non-neplantat)
  const pct = total ? Math.round(totalActive / total * 100) : 0;

  document.getElementById('main-progress').style.width = pct + '%';
  document.getElementById('stat-planted').textContent = totalActive;
  document.getElementById('stat-total').textContent = total;

  const container = document.getElementById('progress-list');
  container.innerHTML = `
    <div class="progress-card">
      <div class="field-label">Stadiu Plante</div>
      <div class="stats-row">
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🌱</span><span class="progress-plant-name">Plantate</span><strong style="color:var(--green-mid)">${planted}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🌿</span><span class="progress-plant-name">Încolțite</span><strong style="color:var(--accent-yellow)">${sprouted}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🧺</span><span class="progress-plant-name">Recoltate</span><strong style="color:var(--accent-blue)">${harvested}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🌸</span><span class="progress-plant-name">Planta Perena</span><strong style="color:#E91E63">${perena}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">⚠️</span><span class="progress-plant-name">Uscate</span><strong style="color:var(--accent-red)">${problems}</strong></div></div>
      ${neplantat > 0 ? `<div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">⬜</span><span class="progress-plant-name">Neplantat</span><strong style="color:#999">${neplantat}</strong></div></div>` : ''}
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🔄</span><span class="progress-plant-name">Plantări succesive</span><strong style="color:#3498DB">${(() => {
        const today = new Date().toISOString().split('T')[0];
        let count = 0;
        allPlants.forEach(({ data }) => {
          const succession = data.succession || [];
          succession.forEach(s => {
            if (s.date >= today && !s.completed) count++;
          });
        });
        return count;
      })()}</strong></div></div>
    </div>
    </div>
    <div class="progress-card">
      <div class="field-label">Statistici</div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🌱</span><span class="progress-plant-name">Plante</span><strong>${total}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🌿</span><span class="progress-plant-name">Încolțite</span><strong style="color:var(--accent-yellow)">${sprouted}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🧺</span><span class="progress-plant-name">Recoltate</span><strong style="color:var(--accent-blue)">${harvested}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">📦</span><span class="progress-plant-name">Total Recoltat</span><strong style="color:var(--accent-green)">${totalHarvestQty} kg</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">💧</span><span class="progress-plant-name">Necesită udare</span><strong style="color:#3498DB">${allPlants.filter(({ data }) => needsWatering(data.wateringDate)).length}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">🌸</span><span class="progress-plant-name">Planta Perena</span><strong style="color:#E91E63">${perena}</strong></div></div>
      <div class="progress-card" style="margin:0;"><div class="progress-plant-row"><span style="font-size:20px">⚠️</span><span class="progress-plant-name">Uscate</span><strong style="color:var(--accent-red)">${problems}</strong></div></div>
    </div>
    <div class="progress-card">
      <div class="field-label">Prognoză Recoltă</div>
      ${(() => {
        const forecast = calculateHarvestForecast();
        if (forecast.length === 0) return '<div style="color:#999;font-style:italic;font-size:12px;">Nicio recoltă estimată</div>';
        return forecast.slice(0, 5).map(f => `
          <div style="display:flex;align-items:center;gap:8px;padding:4px;background:#f5f5f5;border-radius:4px;margin-bottom:4px;">
            <span style="font-size:16px;">${f.emoji}</span>
            <span style="flex:1;font-size:12px;">${f.plant}</span>
            <span style="font-size:10px;color:#666;">${f.expectedDate}</span>
            <span style="font-size:10px;font-weight:700;color:var(--accent-green);">${f.expectedYield}</span>
          </div>
        `).join('');
      })()}
    </div>
    <div class="progress-card">
      <div class="field-label">Timp Plantare → Recoltă</div>
      ${(() => {
        const timeline = calculatePlantingToHarvestTimeline();
        if (timeline.length === 0) return '<div style="color:#999;font-style:italic;font-size:12px;">Nicio recoltă înregistrată</div>';
        return timeline.slice(0, 5).map(t => `
          <div style="display:flex;align-items:center;gap:8px;padding:4px;background:#f5f5f5;border-radius:4px;margin-bottom:4px;">
            <span style="font-size:16px;">${t.emoji}</span>
            <span style="flex:1;font-size:12px;">${t.plant}</span>
            <span style="font-size:10px;font-weight:700;color:var(--accent-blue);">${t.daysToHarvest} zile</span>
          </div>
        `).join('');
      })()}
    </div>
    <div class="progress-card">
      <div class="field-label">🔄 Plantări succesive programate</div>
      ${(() => {
        const today = new Date(); today.setHours(0,0,0,0);
        const upcoming = [];
        allPlants.forEach(({ id, data, plant }) => {
          const plantName = data.name || plant.name;
          const normalizedName = normalizeDiacritics(plantName);
          const defaultKey = Object.keys(SUCCESSION_DEFAULTS).find(k => normalizeDiacritics(k) === normalizedName);
          const defaults = defaultKey ? SUCCESSION_DEFAULTS[defaultKey] : null;
          if (!defaults) return;
          const successionPlantings = data.successionPlantings || [];
          let baseDate = new Date(); baseDate.setHours(0,0,0,0);
          if (successionPlantings.length > 0) {
            baseDate = new Date(successionPlantings[successionPlantings.length - 1].date);
            baseDate.setHours(0,0,0,0);
          }
          const seasonEnd = new Date(today.getFullYear(), 9, 31);
          const batches = generateSuccession(defaultKey, baseDate, defaults.interval, defaults.daysToHarvest, defaults.batches, seasonEnd);
          const plantedBatches = successionPlantings.map(sp => sp.batch);
          const nextBatch = batches.find(b => !plantedBatches.includes(b.batch) && b.daysUntilPlant >= 0);
          if (nextBatch) {
            upcoming.push({ id, plantName, emoji: data.emoji || plant.emoji, batch: nextBatch.batch, plantDate: nextBatch.plantDate, daysUntil: nextBatch.daysUntilPlant });
          }
        });
        if (upcoming.length === 0) return '<div style="color:#999;font-style:italic;font-size:12px;">Nicio plantare succesivă programată. Deschide o plantă pentru a configura.</div>';
        return upcoming.sort((a, b) => a.daysUntil - b.daysUntil).map(s => `
          <div style="display:flex;align-items:center;gap:8px;padding:6px;background:#fff3e0;border-radius:6px;margin-bottom:4px;border-left:3px solid #FF9800;">
            <span style="font-size:16px;">${s.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:700;">${s.plantName} — Lot ${s.batch}</div>
              <div style="font-size:10px;color:#FF9800;">${s.daysUntil === 0 ? 'Azi!' : 'în ' + s.daysUntil + ' zile'} · ${fmtDate(s.plantDate)}</div>
            </div>
            <button onclick="openModal('${s.id}')" style="background:var(--green-mid);color:white;border:none;border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer;font-weight:700;">Deschide ↗</button>
          </div>
        `).join('');
      })()}
    </div>
  `;
}

// Init: sync statuses from stored data to beds
function initBeds() {
  console.log('[initBeds] Initializing beds, gardenData keys:', Object.keys(gardenData));
  Object.entries(gardenData).forEach(([id, data]) => {
    let bed = document.querySelector(`[data-id="${id}"]`);
    
    // If bed doesn't exist in DOM but exists in gardenData (custom plant), create it
    if (!bed && data.position) {
      console.log('[initBeds] Creating new bed for plant:', id);
      const plant = PLANTS[id];
      if (plant) {
        const gardenInner = document.querySelector('.garden-inner');
        const bedClass = getBedClassFromPlantType(plant.type);
        
        bed = document.createElement('div');
        bed.className = `bed ${bedClass}`;
        bed.dataset.id = id;
        bed.onclick = () => openModal(id);
        const bedWidth = data.dimensions?.width || 80;
        const bedHeight = data.dimensions?.height || 75;
        bed.style.cssText = `position:absolute;top:${data.position.top}px;left:${data.position.left}px;width:${bedWidth}px;height:${bedHeight}px;`;
        
        // Add 'small' class if bed is 80x75 or smaller
        if (bedWidth <= 80 && bedHeight <= 75) {
          bed.classList.add('small');
        }
        
        // Add 'narrow' class if bed width is under 85px
        if (bedWidth < 85) {
          bed.classList.add('narrow');
        }
        
        bed.draggable = true;
        bed.innerHTML = `
          <div class="bed-emoji">${data.emoji || plant.emoji}</div>
          <div class="bed-name">${data.name || plant.name}</div>
          <div class="bed-type-badge">${plant.type}</div>
          <div class="hover-label">Adaugă Detalii</div>
          <div class="resize-handle" style="position:absolute;bottom:0;right:0;width:15px;height:15px;cursor:se-resize;background:rgba(0,0,0,0.1);border-radius:0 0 10px 0;" onmousedown="handleResizeStart(event)"></div>
        `;
        
        // Add drag functionality
        bed.addEventListener('dragstart', handleDragStart);
        bed.addEventListener('dragend', handleDragEnd);
        
        gardenInner.appendChild(bed);
        console.log('[initBeds] Bed created and added to garden');
      }
    }
    
    // Skip if bed is null (plant data exists but no DOM element)
    if (!bed) return;
    
    if (data.status) bed.dataset.status = data.status;
    if (data.emoji) {
      const bedEmoji = bed.querySelector('.bed-emoji');
      if (bedEmoji) bedEmoji.textContent = data.emoji;
    }
    if (data.name) {
      const bedName = bed.querySelector('.bed-name');
      if (bedName) bedName.textContent = data.name;
    }
    
    // Restore position if saved
    if (data.position) {
      bed.style.left = data.position.left + 'px';
      bed.style.top = data.position.top + 'px';
    }
    
    // Restore dimensions if saved
    if (data.dimensions) {
      bed.style.width = data.dimensions.width + 'px';
      bed.style.height = data.dimensions.height + 'px';
      
      // Update 'small' class based on dimensions
      if (data.dimensions.width <= 80 && data.dimensions.height <= 75) {
        bed.classList.add('small');
      } else {
        bed.classList.remove('small');
      }
      
      // Update 'narrow' class based on width
      if (data.dimensions.width < 85) {
        bed.classList.add('narrow');
      } else {
        bed.classList.remove('narrow');
      }
    }
    
    // Add drag functionality to existing beds if they don't have it
    if (!bed.draggable) {
      bed.draggable = true;
      bed.addEventListener('dragstart', handleDragStart);
      bed.addEventListener('dragend', handleDragEnd);
    }
    
    // Add resize handle if not present
    if (!bed.querySelector('.resize-handle')) {
      const resizeHandle = document.createElement('div');
      resizeHandle.className = 'resize-handle';
      resizeHandle.style.cssText = 'position:absolute;bottom:0;right:0;width:15px;height:15px;cursor:se-resize;background:rgba(0,0,0,0.1);border-radius:0 0 10px 0;display:none;';
      resizeHandle.onmousedown = handleResizeStart;
      bed.appendChild(resizeHandle);
    } else {
      // Hide resize handles by default
      const existingHandle = bed.querySelector('.resize-handle');
      if (existingHandle) existingHandle.style.display = 'none';
    }
    
    // Add hover label if not present
    if (!bed.querySelector('.hover-label')) {
      const hoverLabel = document.createElement('div');
      hoverLabel.className = 'hover-label';
      hoverLabel.textContent = 'Adaugă Detalii';
      bed.appendChild(hoverLabel);
    }
  });
  
  console.log('[initBeds] Beds initialization complete');
  
  // Set today as default date in modal
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('modal-date').value = today;
}

// Edit mode functions
function toggleEditMode() {
  console.log('[toggleEditMode] Toggling edit mode, current state:', editMode);
  editMode = !editMode;
  const editBtn = document.getElementById('edit-mode-btn');
  const editControls = document.getElementById('edit-mode-controls');
  const addPlantBtn = document.getElementById('add-plant-btn');
  const addDecorBtn = document.getElementById('add-decor-btn');
  
  if (editMode) {
    console.log('[toggleEditMode] Entering edit mode');
    editBtn.textContent = '✏️ Editează';
    editBtn.style.background = '#E67E22';
    editControls.style.display = 'flex';
    addPlantBtn.classList.remove('hidden');
    addDecorBtn.classList.remove('hidden');
    console.log('[toggleEditMode] Edit mode activated, add plant and decor buttons shown');
    
    // Add editing class to garden-inner to hide hover labels
    const gardenInner = document.querySelector('.garden-inner');
    if (gardenInner) {
      gardenInner.classList.add('editing');
    }
    
    // Re-render decor items to show delete buttons
    renderDecorItems();
    
    // Save decor items state before editing
    decorItemsBeforeEdit = JSON.stringify(decorItems);
    console.log('[toggleEditMode] Decor items state saved');
    
    // Track plants added during this edit session
    plantsAddedDuringEdit = [];
    
    // Ensure all beds have drag functionality
    const beds = document.querySelectorAll('.bed');
    beds.forEach(bed => {
      bed.draggable = true;
      bed.addEventListener('dragstart', handleDragStart);
      bed.addEventListener('dragend', handleDragEnd);
    });
    console.log('[toggleEditMode] Drag functionality added to all beds');
    // Then save current state before editing (now includes current positions)
    gardenDataBeforeEdit = JSON.stringify(gardenData);
    
    // Show resize handles for all beds
    beds.forEach(bed => {
      let handle = bed.querySelector('.resize-handle');
      if (!handle) {
        handle = document.createElement('div');
        handle.className = 'resize-handle';
        handle.style.cssText = 'position:absolute;bottom:0;right:0;width:15px;height:15px;cursor:se-resize;background:rgba(0,0,0,0.1);border-radius:0 0 10px 0;';
        handle.onmousedown = handleResizeStart;
        bed.appendChild(handle);
      }
      handle.style.display = 'block';
    });
    
    showToast('✏️ Mod editare activat. Trage și redimensionează paturile.');
  } else {
    // Exit edit mode (cancel)
    cancelEditMode();
  }
}

function saveEditMode() {
  editMode = false;
  const editBtn = document.getElementById('edit-mode-btn');
  const editControls = document.getElementById('edit-mode-controls');
  const addPlantBtn = document.getElementById('add-plant-btn');
  const addDecorBtn = document.getElementById('add-decor-btn');
  
  editBtn.textContent = '✏️ Editează';
  editBtn.style.background = '#FF9800';
  editControls.style.display = 'none';
  addPlantBtn.classList.add('hidden');
  addDecorBtn.classList.add('hidden');
  
  // Remove editing class from garden-inner to show hover labels
  const gardenInner = document.querySelector('.garden-inner');
  if (gardenInner) {
    gardenInner.classList.remove('editing');
  }
  
  // Re-render decor items to hide delete buttons
  renderDecorItems();
  
  // Hide resize handles
  document.querySelectorAll('.resize-handle').forEach(handle => {
    handle.style.display = 'none';
  });
  
  saveCurrentGardenData();
  saveDecorData(); // Save decor changes
  gardenDataBeforeEdit = null;
  decorItemsBeforeEdit = null;
  plantsAddedDuringEdit = [];
  
  showToast('✅ Modificări salvate!');
}

function cancelEditMode() {
  editMode = false;
  const editBtn = document.getElementById('edit-mode-btn');
  const editControls = document.getElementById('edit-mode-controls');
  const addPlantBtn = document.getElementById('add-plant-btn');
  const addDecorBtn = document.getElementById('add-decor-btn');
  
  editBtn.textContent = '✏️ Editează';
  editBtn.style.background = '#FF9800';
  editControls.style.display = 'none';
  addPlantBtn.classList.add('hidden');
  addDecorBtn.classList.add('hidden');
  
  // Remove editing class from garden-inner to show hover labels
  const gardenInner = document.querySelector('.garden-inner');
  if (gardenInner) {
    gardenInner.classList.remove('editing');
  }
  
  // Re-render decor items to hide delete buttons
  renderDecorItems();
  
  // Restore decor items if we had a saved state
  if (decorItemsBeforeEdit) {
    decorItems = JSON.parse(decorItemsBeforeEdit);
    renderDecorItems();
    decorItemsBeforeEdit = null;
  }
  
  // Restore previous state if we had one
  if (gardenDataBeforeEdit) {
    gardenData = JSON.parse(gardenDataBeforeEdit);
    // Persist the restored state into the active garden (multi-garden store)
    if (gardensData[currentGardenId]) {
      gardensData[currentGardenId].gardenData = gardenData;
    }
    saveGardensData();
    
    // Remove plants added during this edit session from DOM
    plantsAddedDuringEdit.forEach(id => {
      const bed = document.querySelector(`[data-id="${id}"]`);
      if (bed) bed.remove();
      
      // Remove from PLANTS if it's a custom plant
      if (id.startsWith('custom_')) {
        delete PLANTS[id];
        // Also remove from customPlants array
        const index = customPlants.findIndex(cp => cp.id === id);
        if (index > -1) {
          customPlants.splice(index, 1);
          localStorage.setItem(CUSTOM_PLANTS_KEY, JSON.stringify(customPlants));
        }
      }
    });
    
    // Restore DOM dimensions and positions directly
    const beds = document.querySelectorAll('.bed');
    beds.forEach(bed => {
      const id = bed.dataset.id;
      const data = gardenData[id];
      if (data) {
        if (data.position) {
          bed.style.left = data.position.left + 'px';
          bed.style.top = data.position.top + 'px';
        }
        if (data.dimensions) {
          bed.style.width = data.dimensions.width + 'px';
          bed.style.height = data.dimensions.height + 'px';
        }
        // Force browser to reflow and apply styles
        void bed.offsetWidth;
      }
    });
    
    gardenDataBeforeEdit = null;
  }
  
  plantsAddedDuringEdit = [];
  
  // Hide resize handles
  document.querySelectorAll('.resize-handle').forEach(handle => {
    handle.style.display = 'none';
  });
  
  showToast('❌ Modificări anulate!');
}

// Display current date
function displayCurrentDate() {
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('ro-RO', options);
  }
}

// Initialize Firebase and load data
async function initializeApp() {
  // Import from URL FIRST, before loading anything else
  importFromUrl();

  // Load gardens data first (from localStorage)
  loadGardensData();

  // Load current garden data
  loadCurrentGardenData();

  // Initialize Firebase (this handles auth state changes internally)
  initializeFirebase();

  // Initialize the rest of the app
  loadCustomPlants();
  initBeds();
  displayCurrentDate();
  fetchWeather();
  
  // Initialize garden selector
  updateGardenSelector();
}

// Start the app
initializeApp();

// ============ COMPANION PLANTING ============
const COMPAT_COLS = 8, COMPAT_ROWS = 6;
let compatGrid = Array(COMPAT_ROWS).fill(null).map(() => Array(COMPAT_COLS).fill(null));
let compatSelectedPlant = null;
let compatSelectedCell = null;
let compatActivePaletteId = null;

const COMPAT_PLANTMAP = Object.fromEntries(COMPANION_PLANTS.map(p => [p.id, p]));

function getCompat(plantId) {
  return COMPAT[plantId] || { good: [], bad: [] };
}

function getMutualCompat(aId, bId) {
  const ac = getCompat(aId);
  const bc = getCompat(bId);
  const aGoodB = ac.good.find(x => x.id === bId);
  const aBadB = ac.bad.find(x => x.id === bId);
  const bGoodA = bc.good.find(x => x.id === aId);
  const bBadA = bc.bad.find(x => x.id === aId);
  if (aGoodB || bGoodA) return { type: 'good', reason: (aGoodB || bGoodA).reason };
  if (aBadB || bBadA) return { type: 'bad', reason: (aBadB || bBadA).reason };
  return null;
}

function buildCompatGrid() {
  const gridEl = document.getElementById('compat-grid');
  if (!gridEl) return;

  gridEl.innerHTML = '';
  for (let r = 0; r < COMPAT_ROWS; r++) {
    for (let c = 0; c < COMPAT_COLS; c++) {
      const cell = document.createElement('div');
      cell.className = 'compat-cell' + (compatGrid[r][c] ? '' : ' empty');
      cell.dataset.r = r;
      cell.dataset.c = c;
      if (compatGrid[r][c]) cell.textContent = COMPAT_PLANTMAP[compatGrid[r][c]].emoji;
      cell.addEventListener('click', onCompatCellClick);
      cell.addEventListener('dblclick', onCompatCellDoubleClick);
      cell.addEventListener('mouseenter', onCompatCellHover);
      cell.addEventListener('mouseleave', hideCompatTooltip);
      gridEl.appendChild(cell);
    }
  }
  if (compatSelectedCell) applyCompatHighlights();
}

function getCompatCellEl(r, c) {
  const gridEl = document.getElementById('compat-grid');
  if (!gridEl) return null;
  return gridEl.children[r * COMPAT_COLS + c];
}

function onCompatCellClick(e) {
  const r = +this.dataset.r, c = +this.dataset.c;
  if (compatActivePaletteId && !compatGrid[r][c]) {
    compatGrid[r][c] = compatActivePaletteId;
    compatSelectedCell = null;
    buildCompatGrid();
    return;
  }
  if (compatGrid[r][c]) {
    if (compatSelectedCell && compatSelectedCell[0] === r && compatSelectedCell[1] === c) {
      compatSelectedCell = null;
      buildCompatGrid();
      updateCompatInfoCard(null);
      return;
    }
    compatSelectedCell = [r, c];
    buildCompatGrid();
    updateCompatInfoCard(compatGrid[r][c]);
  }
}

function onCompatCellDoubleClick(e) {
  const r = +this.dataset.r, c = +this.dataset.c;
  if (compatGrid[r][c]) {
    compatGrid[r][c] = null;
    compatSelectedCell = null;
    buildCompatGrid();
    updateCompatInfoCard(null);
  }
}

function getCompatNeighbors(r, c) {
  const neighbors = [];
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < COMPAT_ROWS && nc >= 0 && nc < COMPAT_COLS && compatGrid[nr][nc]) {
        neighbors.push([nr, nc]);
      }
    }
  }
  return neighbors;
}

function applyCompatHighlights() {
  const [r, c] = compatSelectedCell;
  const plantId = compatGrid[r][c];
  const neighbors = getCompatNeighbors(r, c);
  const neighborSet = new Set(neighbors.map(([nr, nc]) => nr * COMPAT_COLS + nc));

  for (let rr = 0; rr < COMPAT_ROWS; rr++) {
    for (let cc = 0; cc < COMPAT_COLS; cc++) {
      const el = getCompatCellEl(rr, cc);
      if (!el) continue;
      el.classList.remove('highlight-good', 'highlight-bad', 'highlight-warn', 'selected');
      const badge = el.querySelector('.compat-badge');
      if (badge) badge.remove();

      if (rr === r && cc === c) {
        el.classList.add('selected');
        continue;
      }

      if (compatGrid[rr][cc] && neighborSet.has(rr * COMPAT_COLS + cc)) {
        const compat = getMutualCompat(plantId, compatGrid[rr][cc]);
        if (compat) {
          el.classList.add('highlight-' + compat.type);
          const b = document.createElement('span');
          b.className = 'compat-badge ' + compat.type;
          b.textContent = compat.type === 'good' ? '✅' : '🚫';
          el.appendChild(b);
        } else {
          el.classList.add('highlight-warn');
          const b = document.createElement('span');
          b.className = 'compat-badge warn';
          b.textContent = '⚠️';
          el.appendChild(b);
        }
      }
    }
  }
}

function onCompatCellHover(e) {
  const r = +this.dataset.r, c = +this.dataset.c;
  if (!compatGrid[r][c] || !compatSelectedCell) return;
  const [sr, sc] = compatSelectedCell;
  if (r === sr && c === sc) return;
  const dx = Math.abs(r - sr), dy = Math.abs(c - sc);
  if (dx > 1 || dy > 1) return;
  const compat = getMutualCompat(compatGrid[sr][sc], compatGrid[r][c]);
  if (!compat) return;

  const plantA = COMPAT_PLANTMAP[compatGrid[sr][sc]];
  const plantB = COMPAT_PLANTMAP[compatGrid[r][c]];
  const color = compat.type === 'good' ? '#3B6D11' : compat.type === 'bad' ? '#A32D2D' : '#854F0B';
  const icon = compat.type === 'good' ? '✓' : '✕';

  const tooltip = document.getElementById('compat-tooltip');
  tooltip.innerHTML = `
    <div class="t-title" style="color:${color}">${icon} ${plantA.name} + ${plantB.name}</div>
    <div style="font-size:11px;color:#666;margin-top:2px;">${compat.reason}</div>
  `;
  tooltip.style.display = 'block';
  positionCompatTooltip(e);
}

function positionCompatTooltip(e) {
  const tooltip = document.getElementById('compat-tooltip');
  const x = e.clientX + 12, y = e.clientY - 10;
  tooltip.style.left = Math.min(x, window.innerWidth - 220) + 'px';
  tooltip.style.top = y + 'px';
}

document.addEventListener('mousemove', e => {
  const tooltip = document.getElementById('compat-tooltip');
  if (tooltip && tooltip.style.display === 'block') positionCompatTooltip(e);
});

function hideCompatTooltip() {
  const tooltip = document.getElementById('compat-tooltip');
  if (tooltip) tooltip.style.display = 'none';
}

function updateCompatInfoCard(plantId) {
  const card = document.getElementById('compat-info-card');
  if (!card) return;
  
  if (!plantId) {
    card.innerHTML = '<h3>COMPATIBILITATE</h3><p class="compat-hint">Selectează o plantă pentru a vedea companionii săi.</p>';
    return;
  }
  const plant = COMPAT_PLANTMAP[plantId];
  const compat = getCompat(plantId);

  let html = `<h3>COMPATIBILITATE — ${plant.emoji} ${plant.name.toUpperCase()}</h3>`;
  if (compat.good.length) {
    html += `<div style="margin-bottom:8px;">`;
    compat.good.forEach(g => {
      const p = COMPAT_PLANTMAP[g.id];
      if (!p) return;
      html += `<div class="compat-row"><span class="icon t-good">✓</span><span><span class="name">${p.emoji} ${p.name}</span><br><span style="color:#666;font-size:11px;">${g.reason}</span></span></div>`;
    });
    html += '</div>';
  }
  if (compat.bad.length) {
    compat.bad.forEach(b => {
      const p = COMPAT_PLANTMAP[b.id];
      if (!p) return;
      html += `<div class="compat-row"><span class="icon t-bad">✕</span><span><span class="name">${p.emoji} ${p.name}</span><br><span style="color:#666;font-size:11px;">${b.reason}</span></span></div>`;
    });
  }
  if (!compat.good.length && !compat.bad.length) {
    html += '<p class="compat-hint">Nu există date specifice de companion pentru această plantă.</p>';
  }
  card.innerHTML = html;
}

function buildCompatPalette() {
  const el = document.getElementById('compat-palette');
  if (!el) return;
  
  el.innerHTML = '';
  COMPANION_PLANTS.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'compat-plant-btn';
    btn.title = p.name;
    btn.textContent = p.emoji;
    btn.addEventListener('click', () => {
      compatActivePaletteId = compatActivePaletteId === p.id ? null : p.id;
      document.querySelectorAll('.compat-plant-btn').forEach(b => b.classList.remove('active'));
      if (compatActivePaletteId) btn.classList.add('active');
      compatSelectedCell = null;
      buildCompatGrid();
      updateCompatInfoCard(null);
    });
    el.appendChild(btn);
  });
}

function clearCompatGrid() {
  compatGrid = Array(COMPAT_ROWS).fill(null).map(() => Array(COMPAT_COLS).fill(null));
  compatSelectedCell = null;
  compatActivePaletteId = null;
  document.querySelectorAll('.compat-plant-btn').forEach(b => b.classList.remove('active'));
  buildCompatGrid();
  updateCompatInfoCard(null);
}

// Initialize companion planting when the tab is shown
function initCompanionPlanting() {
  buildCompatPalette();
  buildCompatGrid();
}

// Add to showTab function to initialize companion planting
const originalShowTab = showTab;
showTab = function(id) {
  originalShowTab.call(this, id);
  if (id === 'companion') {
    initCompanionPlanting();
  }
};
