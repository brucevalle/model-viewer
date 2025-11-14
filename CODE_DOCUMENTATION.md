# Code Documentation - Line by Line

**Purpose:** Understand every line of code in your NASA 3D Model Viewer project.

---

## index.html

### Document Setup

**Line 1:** `<!DOCTYPE html>`
Declares HTML5 document type. Required first line.

**Line 2:** `<html lang="en">`
Opens HTML document, sets language to English.

**Line 3:** `<head>`
Opens head section (metadata, not visible on page).

**Line 4:** `<meta charset="UTF-8">`
Sets character encoding to UTF-8 (supports all characters/emojis).

**Line 5:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
Makes site responsive on mobile devices. Width matches device width, no initial zoom.

**Line 6:** `<meta name="description" content="Professional 3D Model Viewer with Interactive Features">`
Description for search engines (appears in Google search results).

**Line 7:** `<title>3D Model Viewer | Interactive Experience</title>`
Text shown in browser tab.

**Line 10:** `<!-- Model Viewer Web Component -->`
HTML comment (not visible to users). Explains next section.

**Line 11:** `<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>`
Loads Google's model-viewer library. Provides `<model-viewer>` element. `type="module"` means modern JavaScript.

**Line 13:** `<!-- Google Fonts - Professional Typography -->`
Comment explaining fonts section.

**Line 14:** `<link rel="preconnect" href="https://fonts.googleapis.com">`
**Line 15:** `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
Pre-connects to Google Fonts servers for faster font loading.

**Line 16:** `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">`
Loads two fonts: **Inter** (body text) and **Space Grotesk** (headings) with multiple weights.

**Line 18:** `<!-- Styles -->`
Comment for CSS link.

**Line 19:** `<link rel="stylesheet" href="css/styles.css?v=6">`
Links CSS file. `?v=6` forces browser to reload latest version (cache busting).

**Line 20:** `</head>`
Closes head section.

---

### Body and Loading Screen

**Line 21:** `<body>`
Opens body section (visible page content starts here).

**Line 22:** `<!-- Loading Screen -->`
Comment.

**Line 23:** `<div id="loadingScreen" class="loading-screen">`
Container for loading animation. `id` for JavaScript, `class` for CSS styling.

**Line 24:** `<div class="loading-content">`
Inner container for centering content.

**Line 25:** `<div class="loading-spinner"></div>`
Spinning circle animation (styled with CSS).

**Line 26:** `<p class="loading-text">Loading 3D Model...</p>`
Loading message text.

**Line 27-28:** `</div>` `</div>`
Closes loading divs.

---

### Header Navigation

**Line 30:** `<!-- Navigation Header -->`
Comment.

**Line 31:** `<header class="header">`
Semantic header element (tells browser this is page header).

**Line 32:** `<nav class="nav-container">`
Navigation container (semantic element for navigation).

**Line 33:** `<button class="logo" id="homeLogo" aria-label="Return to home">`
Clickable logo button. Returns to astronaut demo. `aria-label` helps screen readers.

**Line 34:** `<span class="logo-icon">3D</span>`
"3D" text in gradient box.

**Line 35:** `<span class="logo-text">Model Viewer</span>`
"Model Viewer" text.

**Line 36:** `</button>`
Closes logo button.

**Line 37:** `<div class="nav-links">`
Container for navigation buttons.

**Line 38:** `<button class="nav-btn active" data-section="viewer">Viewer</button>`
Viewer tab button. `active` class highlights current section. `data-section` tells JavaScript which section to show.

**Line 39:** `<button class="nav-btn" data-section="collection">NASA Collection</button>`
Satellite gallery tab button.

**Line 40:** `<button class="nav-btn" data-section="features">Features</button>`
Features tab button.

**Line 41:** `<button class="nav-btn" data-section="about">About</button>`
About tab button.

**Line 42:** `</div>`
Closes nav-links div.

**Line 43:** `<button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">`
Dark/light theme switch button.

**Line 44-46:** SVG sun icon (visible in dark mode).

**Line 47-49:** SVG moon icon (visible in light mode).

**Line 50:** `</button>`
Closes theme toggle.

**Line 51:** `</nav>`
Closes navigation.

**Line 52:** `</header>`
Closes header.

---

### Model Viewer Section

**Line 54:** `<!-- Main Content -->`
Comment.

**Line 55:** `<main class="main-content">`
Main content area (semantic element).

**Line 56:** `<!-- Model Viewer Section -->`
Comment.

**Line 57:** `<section class="viewer-section active" id="viewerSection">`
Viewer section. `active` makes it visible initially.

**Line 58:** `<div class="viewer-container">`
Container splitting screen into info panel (left) and 3D viewer (right).

**Line 59:** `<!-- Model Information Panel -->`
Comment.

**Line 60:** `<aside class="info-panel">`
Left sidebar with model information (semantic `<aside>`).

**Line 61:** `<div class="info-content">`
Container for info panel content.

**Line 62:** `<h1 class="model-title">Astronaut Helmet</h1>`
Model name (JavaScript updates this when switching models).

**Line 63:** `<p class="model-subtitle">NASA Apollo 11 Mission</p>`
Model subtitle/category.

**Line 64:** `<!-- Customization Controls -->`
Comment marking controls section start.

**Line 65:** `<div class="model-description">`
Description box with border.

**Line 66:** `<p>Experience a highly detailed 3D reconstruction...</p>`
Model description text.

**Line 67-68:** `</div>` closing tags.

**Line 69:** `<div class="stats-grid">`
Grid for 3 statistics (Year, Polygons, Materials).

**Line 70:** `<div class="stat-item">`
First stat box.

**Line 71:** `<span class="stat-value">1969</span>`
Stat value (large number).

**Line 72:** `<span class="stat-label">Year</span>`
Stat label (small text below).

**Line 73:** `</div>`
Closes stat item (pattern repeats for 2 more stats).

**Line 83:** `<!-- Customization Controls -->`
Comment.

**Line 84:** `<div class="controls-section">`
Container for all controls.

**Line 85:** `<h3 class="controls-title">Customize View</h3>`
Controls section heading.

**Line 87:** `<div class="control-group">`
Container for one control.

**Line 88:** `<label class="control-label">`
Label wrapping control.

**Line 89:** `<span>Environment</span>`
Label text.

**Line 90:** `<select id="environmentSelector" class="control-select">`
Dropdown menu. JavaScript listens to changes.

**Line 91-94:** `<option>` elements for dropdown choices (Neutral, Studio, Warehouse, Outdoor).

**Line 95:** `</select>`
Closes select.

**Line 96-97:** Closing tags.

**Line 99:** `<div class="control-group">`
Exposure slider control group.

**Line 100-102:** Exposure range slider. `min="0" max="2" step="0.1" value="1"` sets slider limits.

**Line 106:** `<div class="control-group">`
Shadow intensity slider group.

**Line 107-109:** Shadow slider (same pattern as exposure).

**Line 113:** `<div class="control-group checkbox-group">`
Checkbox control group.

**Line 114:** `<label class="checkbox-label">`
Checkbox label.

**Line 115:** `<input type="checkbox" id="autoRotateToggle" checked>`
Checkbox input. `checked` means on by default. JavaScript toggles auto-rotate.

**Line 116:** `<span class="checkbox-custom"></span>`
Custom styled checkbox (hides default browser checkbox).

**Line 117:** `<span>Auto Rotate</span>`
Checkbox label text.

**Line 118-119:** Closing tags.

**Line 121-127:** Wireframe mode checkbox (same pattern as auto-rotate).

**Line 130:** `<!-- Action Buttons -->`
Comment.

**Line 131:** `<div class="action-buttons">`
Button container.

**Line 132:** `<button class="btn btn-primary" id="arButton">`
AR (Augmented Reality) button. `btn-primary` = purple gradient style.

**Line 133-137:** SVG icon (3D layers).

**Line 138:** `View in AR`
Button text.

**Line 139:** `</button>`
Closes AR button.

**Line 140:** `<button class="btn btn-secondary" id="resetCamera">`
Reset view button. `btn-secondary` = gray style.

**Line 141-144:** SVG icon (circular arrow).

**Line 145:** `Reset View`
Button text.

**Line 146:** `</button>`
Closes reset button.

**Line 147-149:** Closing tags for action buttons, info content, info panel.

---

### 3D Model Viewer Element

**Line 151:** `<!-- 3D Model Viewer -->`
Comment.

**Line 152:** `<div class="model-viewer-wrapper">`
Container for 3D viewer (right side of screen).

**Line 153:** `<model-viewer`
Opens model-viewer web component.

**Line 154:** `id="modelViewer"`
ID for JavaScript to change models.

**Line 155:** `src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"`
3D model file URL. `.glb` = 3D model format.

**Line 156:** `alt="A 3D model of an astronaut helmet"`
Description for accessibility (screen readers).

**Line 157:** `shadow-intensity="1"`
Shadow darkness. 0 = none, 2 = very dark, 1 = normal.

**Line 158:** `camera-controls`
Enables drag-to-rotate, scroll-to-zoom.

**Line 159:** `auto-rotate`
Model spins slowly automatically.

**Line 160:** `ar`
Enables AR button.

**Line 161:** `ar-modes="webxr scene-viewer quick-look"`
AR methods: webxr (Android), quick-look (iOS).

**Line 162:** `environment-image="neutral"`
Lighting environment. Options: neutral, studio, warehouse, outdoor.

**Line 163:** `exposure="1"`
Brightness. 0 = dark, 2 = bright.

**Line 164:** `tone-mapping="commerce"`
Color/lighting style optimized for product display.

**Line 165:** `camera-orbit="45deg 75deg 105%"`
Camera position: 45° horizontal rotation, 75° vertical angle, 105% distance from model.

**Line 166:** `min-camera-orbit="auto auto 50%"`
Minimum zoom: can get as close as 50% distance. `auto` = allow full rotation.

**Line 167:** `max-camera-orbit="auto auto 300%"`
Maximum zoom: can zoom out to 300% distance.

**Line 168:** `camera-target="auto auto auto"`
Camera looks at model center. `auto` = automatically centers.

**Line 169:** `field-of-view="35deg"`
Camera lens angle. 35° = normal view (not fisheye, not telephoto).

**Line 170:** `interaction-prompt="auto"`
Shows "drag to rotate" hint briefly.

**Line 171:** `loading="eager"`
Start loading model immediately.

**Line 172:** `>`
Closes opening tag. Content inside model-viewer comes next.

---

### Hotspots (Purple Glowing Buttons)

**Line 174:** `<!-- Hotspots -->`
Comment. **Note:** Hotspots are the purple/pink glowing circles on the model.

**Line 175:** `<button class="hotspot" slot="hotspot-1" data-position="0.5 0.8 0.5" data-normal="0 1 0">`
Creates glowing button on 3D model.
- `slot="hotspot-1"` = model-viewer positions this in 3D space
- `data-position="0.5 0.8 0.5"` = XYZ coordinates: 0.5m right, 0.8m up, 0.5m forward
- `data-normal="0 1 0"` = hotspot faces upward

**Line 176:** `<div class="hotspot-annotation">`
Tooltip container (appears on hover).

**Line 177:** `<div class="hotspot-content">`
Tooltip content wrapper.

**Line 178:** `<h4>Visor</h4>`
Tooltip title.

**Line 179:** `<p>Gold-coated visor protects against solar radiation</p>`
Tooltip description.

**Line 180-182:** Closing tags for tooltip and hotspot button.

**Lines 183-189:** Second hotspot (Communication System) - same pattern, different position `-0.3 0.4 0.6`.

**Lines 190-197:** Third hotspot (Life Support Connection) - position `0 0.2 0.8`.

**Note:** When you click a satellite, JavaScript removes these hotspots (they only apply to astronaut helmet).

---

### Progress Bar and AR Prompt

**Line 199:** `<!-- Loading Progress Bar -->`
Comment.

**Line 200:** `<div class="progress-bar" slot="progress-bar">`
Loading bar container. `slot` tells model-viewer to position this.

**Line 201:** `<div class="update-bar"></div>`
Inner bar that fills 0-100% as model loads. JavaScript updates width.

**Line 202:** `</div>`
Closes progress bar.

**Line 204:** `<!-- AR Prompt -->`
Comment.

**Line 205:** `<div id="ar-prompt" slot="ar-button">`
Custom AR button (appears when AR available).

**Line 206:** `<div class="ar-prompt-content">`
AR button content wrapper.

**Line 207-211:** SVG icon (3D layers).

**Line 212:** `<span>View in your space</span>`
AR button text.

**Line 213-214:** Closing tags.

**Line 215:** `</model-viewer>`
Closes model-viewer element.

---

### Viewer Controls Overlay

**Line 217:** `<!-- Viewer Controls Overlay -->`
Comment.

**Line 218:** `<div class="viewer-controls">`
Top-right corner buttons.

**Line 219:** `<button class="control-btn" id="fullscreenBtn" aria-label="Toggle fullscreen">`
Fullscreen button.

**Line 220-223:** SVG icon (four corner brackets).

**Line 224:** `</button>`
Closes fullscreen button.

**Line 225:** `<button class="control-btn" id="screenshotBtn" aria-label="Take screenshot">`
Screenshot button.

**Line 226-230:** SVG icon (camera).

**Line 231:** `</button>`
Closes screenshot button.

**Line 232:** `</div>`
Closes viewer controls.

**Line 233:** `</div>`
Closes model-viewer-wrapper.

**Line 234:** `</div>`
Closes viewer-container.

**Line 235:** `</section>`
Closes viewer section.

---

### NASA Collection Section

**Line 237:** `<!-- NASA Collection Section -->`
Comment.

**Line 238:** `<section class="collection-section" id="collectionSection">`
Satellite gallery section (hidden initially).

**Line 239:** `<div class="collection-container">`
Container for max-width and centering.

**Line 240:** `<div class="collection-header">`
Header area.

**Line 241:** `<h2 class="section-title">NASA Satellite Collection</h2>`
Gallery title.

**Line 242:** `<p class="collection-subtitle">Explore our collection of 15 authentic NASA satellite 3D models</p>`
Gallery subtitle.

**Line 243:** `</div>`
Closes header.

**Line 245:** `<div class="satellite-grid" id="satelliteGrid">`
Grid container for satellite cards. **Empty - JavaScript fills this with 15 cards.**

**Line 246:** `<!-- Satellite cards will be dynamically generated by JavaScript -->`
Comment explaining why empty.

**Line 247:** `</div>`
Closes satellite grid.

**Line 248:** `</div>`
Closes collection container.

**Line 249:** `</section>`
Closes collection section.

---

### Features and About Sections

**Line 251:** `<!-- Features Section -->`
Features section (4 feature cards).

**Line 265:** `<!-- About Section -->`
About section (project information).

---

### Footer

**Line 277:** `<!-- Footer -->`
Comment.

**Line 278:** `<footer class="footer">`
Page footer.

**Line 279:** `<div class="footer-content">`
Footer content wrapper.

**Line 280:** `<p>&copy; 2025 3D Model Viewer. Built with modern web technologies.</p>`
Copyright text. `&copy;` = © symbol.

**Line 281-283:** Closing tags.

**Line 285:** `<!-- JavaScript -->`
Comment.

**Line 286:** `<script src="js/main.js?v=6"></script>`
Links JavaScript file. `?v=6` = cache busting.

**Line 287:** `</body>`
Closes body.

**Line 288:** `</html>`
Closes HTML document.

---

## styles.css - Key Concepts

**Lines 10-50:** CSS Variables (Design System)
```css
:root {
    --color-bg-primary: #0a0a0f;
}
```
Defines reusable colors, spacing, fonts. Use with `var(--color-bg-primary)`. Change once, updates everywhere.

**Lines 181-193:** Header with Glassmorphism
```css
.header {
    background: var(--color-bg-glass);
    backdrop-filter: blur(16px);
}
```
Creates frosted glass effect. Semi-transparent background with blur.

**Lines 195-202:** Flexbox Navigation
```css
.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```
Flexible layout. Centers items vertically, spreads items horizontally.

**Lines 844-849:** Responsive Grid
```css
.satellite-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
```
Creates columns that automatically adjust to screen size. Minimum 320px per column.

**Lines 214-227:** Hover Animations
```css
.logo:hover {
    transform: scale(1.02);
    transition: all 150ms;
}
```
Smooth size change on hover over 150 milliseconds.

---

## main.js - Key Concepts

**Lines 14-165:** Satellite Database
```javascript
const SATELLITE_DATABASE = [
    {
        id: 'chandra',
        name: 'Chandra X-ray Observatory',
        file: 'assets/glb/Chandra X-ray Observatory.glb'
    }
];
```
Array of 15 objects storing all satellite information. Easy to add/remove satellites.

**Lines 337-340:** Event Listener
```javascript
homeLogo.addEventListener('click', () => {
    resetToHomeModel(modelViewer, elements);
});
```
Runs function when logo clicked. `addEventListener` attaches function to click event.

**Lines 451-480:** Dynamic HTML Creation
```javascript
const card = document.createElement('div');
card.innerHTML = `<h3>${satellite.name}</h3>`;
```
Creates HTML elements from JavaScript. Template literals `${}` insert variables.

**Lines 505-508:** Remove Hotspots
```javascript
const oldHotspots = modelViewer.querySelectorAll('.hotspot');
oldHotspots.forEach(hotspot => hotspot.remove());
```
Finds all hotspot buttons and removes them before loading new satellite model.

**Lines 509-511:** Change Model
```javascript
modelViewer.src = satellite.file;
modelViewer.cameraOrbit = '45deg 75deg 105%';
```
Changes which 3D model displays. model-viewer reloads automatically.

---

## Quick Reference

**model-viewer attributes:**
- `src` = 3D model file path
- `camera-orbit` = position (horizontal, vertical, distance)
- `camera-controls` = enable drag/zoom
- `auto-rotate` = spin automatically
- `ar` = enable AR button

**Hotspot attributes:**
- `slot="hotspot-X"` = 3D positioning system
- `data-position="X Y Z"` = 3D coordinates (right/left, up/down, forward/back)
- `data-normal="X Y Z"` = which direction hotspot faces
- **Visual:** Purple/pink glowing circle
- **Only on astronaut helmet** (removed for satellites)

**HTML:**
- `id="name"` = unique identifier (JavaScript uses)
- `class="name"` = styling hook (CSS uses)
- `aria-label="text"` = accessibility description

**CSS:**
- `display: flex` = flexible row layout
- `display: grid` = grid layout
- `var(--variable)` = use CSS variable
- `transition: all 150ms` = smooth animation

**JavaScript:**
- `const` = constant variable (can't reassign)
- `document.getElementById('id')` = find element
- `element.addEventListener('click', fn)` = run function on click
- \`text ${variable}\` = template literal (insert variables in strings)

---

## Summary

**HTML** = Structure (elements and content)
**CSS** = Style (colors, layout, animations)
**JavaScript** = Behavior (interactive features)

**You built:**
1. Professional navigation with clickable logo
2. 3D viewer with camera controls
3. Hotspots on astronaut (removed for satellites)
4. Gallery of 15 NASA satellites
5. Click satellites to view them
6. Responsive design (all devices)
7. Dark/light theme toggle
8. AR support

**Professional code - no "vibe coding"!**
