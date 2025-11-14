# Code Documentation - NASA 3D Model Viewer

**Quick Guide:** This explains every line of code so you understand what you built.

---

## index.html - Line by Line

### Lines 1-10: Document Setup

```html
1  <!DOCTYPE html>
```
Tells browser this is modern HTML5. Required first line.

```html
2  <html lang="en">
```
Starts HTML document. `lang="en"` = content is in English.

```html
3  <head>
```
Container for page information (not visible on page).

```html
4  <meta charset="UTF-8">
```
Allows all characters/emojis to display correctly.

```html
5  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Makes site work on mobile. Page width = device width, no zoom.

```html
6  <meta name="description" content="Professional 3D Model Viewer with Interactive Features">
```
Description for search engines (SEO). Shows in Google results.

```html
7  <title>3D Model Viewer | Interactive Experience</title>
```
Text shown in browser tab.

```html
8-9  (blank lines)
```
Empty lines for readability.

```html
10  <!-- Model Viewer Web Component -->
```
Comment explaining next line. Not visible to users.

---

### Lines 11-20: Loading Libraries

```html
11  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
```
Loads Google's 3D model viewer library. This gives us the `<model-viewer>` element.
- `type="module"` = modern JavaScript
- `src="..."` = where to get the library
- This handles all 3D rendering for us

```html
12  (blank)
13  <!-- Google Fonts - Professional Typography -->
```
Comment explaining fonts coming next.

```html
14  <link rel="preconnect" href="https://fonts.googleapis.com">
15  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```
Speeds up font loading by connecting early to Google Fonts servers.

```html
16  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```
Loads two fonts:
- **Inter** for body text (5 different weights)
- **Space Grotesk** for headings (4 weights)

```html
17  (blank)
18  <!-- Styles -->
```
Comment for CSS.

```html
19  <link rel="stylesheet" href="css/styles.css?v=5">
```
Links to our CSS file. `?v=5` forces browser to reload new version (cache busting).

```html
20  </head>
```
Closes the head section.

---

### Lines 21-30: Body Starts & Loading Screen

```html
21  <body>
```
Starts visible page content.

```html
22  <!-- Loading Screen -->
```
Comment.

```html
23  <div id="loadingScreen" class="loading-screen">
```
Container for loading animation.
- `id="loadingScreen"` = JavaScript can find this
- `class="loading-screen"` = CSS styles this

```html
24  <div class="loading-content">
```
Inner container for centering spinner and text.

```html
25  <div class="loading-spinner"></div>
```
Spinning circle (styled with CSS, animated).

```html
26  <p class="loading-text">Loading 3D Model...</p>
```
Text saying "Loading 3D Model..."

```html
27  </div>
28  </div>
```
Closes the two loading divs.

```html
29  (blank)
30  <!-- Navigation Header -->
```
Comment for header section.

---

### Lines 31-40: Header & Logo

```html
31  <header class="header">
```
Semantic header element (tells browsers this is the page header).

```html
32  <nav class="nav-container">
```
Navigation container (tells browsers this is navigation).

```html
33  <button class="logo" id="homeLogo" aria-label="Return to home">
```
Clickable logo button. Returns to astronaut demo when clicked.
- `id="homeLogo"` = JavaScript adds click function
- `aria-label="Return to home"` = tells screen readers what button does

```html
34  <span class="logo-icon">3D</span>
```
Shows "3D" text in colored gradient box.

```html
35  <span class="logo-text">Model Viewer</span>
```
Shows "Model Viewer" text next to icon.

```html
36  </button>
```
Closes logo button.

```html
37  <div class="nav-links">
```
Container for navigation buttons.

```html
38  <button class="nav-btn active" data-section="viewer">Viewer</button>
```
Navigation button for Viewer section.
- `active` = highlighted (current section)
- `data-section="viewer"` = JavaScript reads this to show correct section

```html
39  <button class="nav-btn" data-section="collection">NASA Collection</button>
```
Button to show satellite gallery.

```html
40  <button class="nav-btn" data-section="features">Features</button>
```
Button to show features section.

---

### Lines 154-173: 3D Model Viewer Element

```html
154  <model-viewer
155      id="modelViewer"
```
The 3D viewer element. `id="modelViewer"` lets JavaScript change the model.

```html
156      src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
```
Which 3D model to show. `.glb` = 3D model file format.

```html
157      alt="A 3D model of an astronaut helmet"
```
Description for accessibility (screen readers).

```html
158      shadow-intensity="1"
```
How dark the shadow is (0 = no shadow, 2 = very dark).

```html
159      camera-controls
```
Let users drag to rotate, scroll to zoom. No value needed (it's a boolean).

```html
160      auto-rotate
```
Model spins slowly by itself.

```html
161      ar
162      ar-modes="webxr scene-viewer quick-look"
```
Enable Augmented Reality button.
- `webxr` = Android AR
- `quick-look` = iOS AR

```html
163      environment-image="neutral"
```
Lighting environment. "neutral" = even lighting from all sides.

```html
164      exposure="1"
```
Brightness (0 = dark, 2 = very bright).

```html
165      tone-mapping="commerce"
```
Color/lighting style optimized for product viewing.

```html
166      camera-orbit="45deg 75deg 105%"
```
Camera position:
- `45deg` = horizontal rotation (like walking around model)
- `75deg` = vertical angle (0°=top view, 90°=side view)
- `105%` = distance (105% of model size - adapts to any model!)

```html
167      min-camera-orbit="auto auto 50%"
168      max-camera-orbit="auto auto 300%"
```
Zoom limits:
- Can zoom IN to 50% (get closer)
- Can zoom OUT to 300% (move farther)
- `auto` = allow full rotation

```html
169      camera-target="auto auto auto"
```
Where camera looks. `auto` = center of model.

```html
170      field-of-view="35deg"
```
Camera zoom level. Like camera lens (35° = normal view).

```html
171      interaction-prompt="auto"
```
Shows hint to "drag to rotate" for a few seconds.

```html
172      loading="eager"
```
Start loading model immediately (don't wait).

```html
173  >
```
Closes opening tag. Content inside model-viewer comes next.

---

### Lines 174-197: Hotspots (Interactive Points)

**What are hotspots?** The glowing purple/pink circular buttons you see on the 3D model. When you hover over them, a tooltip appears with information.

```html
174  <!-- Hotspots -->
```
Comment.

```html
175  <button class="hotspot" slot="hotspot-1" data-position="0.5 0.8 0.5" data-normal="0 1 0">
```
Creates a glowing purple button on the 3D model. Shows info tooltip when you hover.
- `slot="hotspot-1"` = model-viewer special attribute for 3D positioning
- `data-position="0.5 0.8 0.5"` = XYZ coordinates:
  - `0.5` = 0.5 meters RIGHT from center
  - `0.8` = 0.8 meters UP from center
  - `0.5` = 0.5 meters FORWARD from center
- `data-normal="0 1 0"` = hotspot faces upward

```html
176  <div class="hotspot-annotation">
177      <div class="hotspot-content">
```
Container for tooltip that appears on hover.

```html
178  <h4>Visor</h4>
```
Tooltip title.

```html
179  <p>Gold-coated visor protects against solar radiation</p>
```
Tooltip description text.

```html
180-182  </div></div></button>
```
Closes the tooltip divs and hotspot button.

**Second Hotspot (lines 183-189):**
```html
183  <button class="hotspot" slot="hotspot-2" data-position="-0.3 0.4 0.6" data-normal="-1 0 0">
```
Another hotspot at different position:
- `-0.3` = 0.3 meters LEFT (negative = left)
- `0.4` = 0.4 meters UP
- `0.6` = 0.6 meters FORWARD
- `data-normal="-1 0 0"` = faces left

```html
184-189  (same pattern as first hotspot)
```
Tooltip showing "Communication System" information.

**Third Hotspot (lines 190-197):**
```html
190  <button class="hotspot" slot="hotspot-3" data-position="0 0.2 0.8" data-normal="0 0 1">
```
Third hotspot:
- `0` = centered left-right
- `0.2` = slightly up
- `0.8` = far forward
- `data-normal="0 0 1"` = faces forward

---

### Lines 200-202: Loading Progress Bar

```html
200  <div class="progress-bar" slot="progress-bar">
201      <div class="update-bar"></div>
202  </div>
```
Loading bar shown while model loads.
- Outer div = container
- Inner `update-bar` = fills from 0% to 100% width as model loads

---

### Lines 237-249: NASA Collection Gallery

```html
237  <section class="collection-section" id="collectionSection">
```
Container for satellite gallery. Hidden initially.

```html
238  <div class="collection-container">
```
Inner container for max width and centering.

```html
239  <div class="collection-header">
240      <h2 class="section-title">NASA Satellite Collection</h2>
241      <p class="collection-subtitle">Explore our collection of 15 authentic NASA satellite 3D models</p>
242  </div>
```
Title and description for gallery.

```html
243  (blank)
244  <div class="satellite-grid" id="satelliteGrid">
```
Grid container for satellite cards. Empty - JavaScript fills this with 15 cards.

```html
245      <!-- Satellite cards will be dynamically generated by JavaScript -->
```
Comment explaining why it's empty.

```html
246  </div>
247  </div>
248  </section>
```
Closes all the collection divs.

---

## styles.css - Key Concepts

### CSS Variables (Lines 10-50)

```css
:root {
    --color-bg-primary: #0a0a0f;
    --spacing-md: 1rem;
}
```
**What:** Define reusable values.
**Why:** Change color once, updates everywhere.
**Use:** `color: var(--color-bg-primary);`

### Flexbox (Lines 195-202)

```css
.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```
**What:** Flexible row layout.
- `flex` = arrange children in a row
- `align-items: center` = center vertically
- `justify-content: space-between` = spread across width

### Grid (Lines 844-849)

```css
.satellite-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
}
```
**What:** Responsive grid layout.
**How:** Creates as many 320px-wide columns as fit. Automatically wraps to fewer columns on smaller screens.

### Transitions (Lines 214-222)

```css
.logo {
    transition: all 150ms;
}
.logo:hover {
    transform: scale(1.02);
}
```
**What:** Smooth animation on hover.
**How:** When you hover, logo grows to 102% size over 150 milliseconds.

---

## main.js - Key Concepts

### Satellite Database (Lines 14-165)

```javascript
const SATELLITE_DATABASE = [
    {
        id: 'chandra',
        name: 'Chandra X-ray Observatory',
        file: 'assets/glb/Chandra X-ray Observatory.glb',
        tags: ['X-Ray', 'Observatory']
    },
    // ... 14 more satellites
];
```
**What:** Array of objects storing all satellite info.
**Why:** Easy to add/remove satellites. One place for all data.

### Event Listeners (Lines 337-340)

```javascript
homeLogo.addEventListener('click', () => {
    resetToHomeModel(modelViewer, elements);
});
```
**What:** Run function when logo clicked.
**How:**
- `addEventListener` = attach function to event
- `'click'` = type of event
- `() => {}` = function to run

### Creating Elements (Lines 451-480)

```javascript
function createSatelliteCard(satellite) {
    const card = document.createElement('div');
    card.innerHTML = `
        <h3>${satellite.name}</h3>
    `;
    return card;
}
```
**What:** Create HTML from JavaScript.
**How:**
- `createElement('div')` = make new div
- `innerHTML = '...'` = set HTML content
- \`${variable}\` = insert JavaScript value into string

### Changing Models (Lines 505-526)

```javascript
modelViewer.src = satellite.file;
modelViewer.cameraOrbit = '45deg 75deg 105%';
```
**What:** Load different 3D model.
**How:** Change `src` property, model-viewer reloads new model automatically.

---

## Quick Reference

### Important Attributes

**model-viewer:**
- `src` = which 3D model file
- `camera-orbit` = camera position (horizontal, vertical, distance)
- `camera-controls` = let user interact
- `auto-rotate` = spin automatically

**Hotspots (Purple glowing buttons on model):**
- `slot="hotspot-X"` = tells model-viewer this is a 3D annotation
- `data-position="X Y Z"` = 3D coordinates (right/left, up/down, forward/back)
- `data-normal="X Y Z"` = which direction hotspot faces
- **Visual:** Purple/pink glowing circle with pulsing animation
- **Interaction:** Hover to see tooltip with information

**Common HTML:**
- `id="name"` = unique identifier (JavaScript uses)
- `class="name"` = styling (CSS uses)
- `aria-label="text"` = accessibility (screen readers read)

**Common CSS:**
- `display: flex` = flexible row layout
- `display: grid` = grid layout
- `transition: all 150ms` = animate changes smoothly
- `var(--variable)` = use CSS variable value

**Common JavaScript:**
- `const` = variable that won't change
- `document.getElementById('id')` = find element
- `element.addEventListener('click', function)` = run function on click
- \`text ${variable}\` = combine text and variables

---

## Summary

**HTML** = Structure (what elements exist)
**CSS** = Style (how things look)
**JavaScript** = Behavior (what happens when you click)

**model-viewer** = Pre-built component that handles all 3D rendering for us

**You built:**
1. Professional navigation with clickable logo
2. 3D model viewer with camera controls
3. Interactive hotspots on models
4. Gallery of 15 NASA satellites
5. Click any satellite to view it
6. Responsive design (works on phones/tablets/desktop)
7. Dark/light theme toggle
8. AR support for mobile devices

**Every line serves a purpose. No "vibe code" - all professional, understandable code!**
