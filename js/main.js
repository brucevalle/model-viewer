/**
 * Main JavaScript for 3D Model Viewer
 * Handles all interactive features and controls
 */

// ========================================
// INITIALIZATION
// ========================================

console.log('🚀 3D Model Viewer loaded!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Initializing application...');
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    // Get DOM elements
    const elements = getElements();

    // Initialize components
    initializeTheme(elements);
    initializeModelViewer(elements);
    initializeControls(elements);
    initializeLoadingScreen(elements);
    setupEventListeners(elements);
}

/**
 * Get all required DOM elements
 */
function getElements() {
    return {
        // Theme
        themeToggle: document.getElementById('themeToggle'),

        // Model Viewer
        modelViewer: document.getElementById('modelViewer'),

        // Controls
        environmentSelector: document.getElementById('environmentSelector'),
        exposureSlider: document.getElementById('exposureSlider'),
        shadowSlider: document.getElementById('shadowSlider'),
        autoRotateToggle: document.getElementById('autoRotateToggle'),
        wireframeToggle: document.getElementById('wireframeToggle'),

        // Buttons
        arButton: document.getElementById('arButton'),
        resetCamera: document.getElementById('resetCamera'),
        fullscreenBtn: document.getElementById('fullscreenBtn'),
        screenshotBtn: document.getElementById('screenshotBtn'),

        // Loading
        loadingScreen: document.getElementById('loadingScreen')
    };
}

// ========================================
// THEME MANAGEMENT
// ========================================

function initializeTheme(elements) {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    elements.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// ========================================
// MODEL VIEWER
// ========================================

function initializeModelViewer(elements) {
    const modelViewer = elements.modelViewer;

    modelViewer.addEventListener('load', () => {
        console.log('✅ 3D model loaded successfully');
        hideLoadingScreen(elements);
    });

    modelViewer.addEventListener('error', (event) => {
        console.error('❌ Error loading 3D model:', event);
        hideLoadingScreen(elements);
    });

    modelViewer.addEventListener('progress', (event) => {
        const progressBar = document.querySelector('.update-bar');
        if (progressBar) {
            const progress = event.detail.totalProgress * 100;
            progressBar.style.width = `${progress}%`;
        }
    });
}

// ========================================
// CONTROLS
// ========================================

function initializeControls(elements) {
    // Environment selector
    const environments = {
        neutral: 'neutral',
        studio: 'legacy',
        warehouse: 'whipple_creek_regional_park_04_1k.hdr',
        outdoor: 'aircraft_workshop_01_1k.hdr'
    };

    elements.environmentSelector.addEventListener('change', (e) => {
        const selectedEnvironment = e.target.value;
        elements.modelViewer.environmentImage = environments[selectedEnvironment];
    });

    // Exposure slider
    elements.exposureSlider.addEventListener('input', (e) => {
        elements.modelViewer.exposure = parseFloat(e.target.value);
    });

    // Shadow slider
    elements.shadowSlider.addEventListener('input', (e) => {
        elements.modelViewer.shadowIntensity = parseFloat(e.target.value);
    });

    // Auto-rotate toggle
    elements.autoRotateToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            elements.modelViewer.setAttribute('auto-rotate', '');
        } else {
            elements.modelViewer.removeAttribute('auto-rotate');
        }
    });

    // Wireframe toggle
    elements.wireframeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            elements.modelViewer.style.filter = 'brightness(1.2) contrast(1.1)';
        } else {
            elements.modelViewer.style.filter = '';
        }
    });
}

// ========================================
// BUTTON ACTIONS
// ========================================

function setupEventListeners(elements) {
    // AR Button - trigger model-viewer's built-in AR
    elements.arButton.addEventListener('click', () => {
        // Try to activate AR through model-viewer
        if (elements.modelViewer.canActivateAR) {
            elements.modelViewer.activateAR();
        } else {
            // Fallback: try clicking the internal AR button
            const internalArButton = elements.modelViewer.shadowRoot?.querySelector('button[slot="ar-button"]');
            if (internalArButton) {
                internalArButton.click();
            } else {
                alert('AR is not supported on this device. Please try on a mobile device with AR capabilities (iOS Safari or Android Chrome).');
            }
        }
    });

    // Wait for model-viewer to be ready before checking AR support
    elements.modelViewer.addEventListener('load', () => {
        updateArButtonState(elements);
    });

    // Also check AR status changes
    elements.modelViewer.addEventListener('ar-status', (event) => {
        console.log('AR Status:', event.detail.status);
    });

    // Initial check (delayed to allow model-viewer to initialize)
    setTimeout(() => updateArButtonState(elements), 100);

    // Reset Camera Button
    elements.resetCamera.addEventListener('click', () => {
        elements.modelViewer.resetTurntableRotation();
        elements.modelViewer.cameraOrbit = '45deg 75deg 105%';
        elements.modelViewer.fieldOfView = '35deg';
    });

    // Fullscreen Button
    const viewerWrapper = elements.modelViewer.parentElement;
    elements.fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            if (viewerWrapper.requestFullscreen) {
                viewerWrapper.requestFullscreen();
            } else if (viewerWrapper.webkitRequestFullscreen) {
                viewerWrapper.webkitRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    });

    // Screenshot Button
    elements.screenshotBtn.addEventListener('click', async () => {
        try {
            const screenshot = await elements.modelViewer.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = screenshot;
            link.download = `3d-model-screenshot-${Date.now()}.png`;
            link.click();
        } catch (error) {
            console.error('Error taking screenshot:', error);
            alert('Failed to capture screenshot');
        }
    });
}

// ========================================
// LOADING SCREEN
// ========================================

function initializeLoadingScreen(elements) {
    const minLoadTime = 1000;
    const startTime = Date.now();

    elements.modelViewer.addEventListener('load', () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadTime - elapsed);

        setTimeout(() => {
            hideLoadingScreen(elements);
        }, remaining);
    });
}

function hideLoadingScreen(elements) {
    const { loadingScreen } = elements;
    loadingScreen.classList.add('hidden');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 300);
}

/**
 * Update AR button state based on device capability
 */
function updateArButtonState(elements) {
    const canAR = elements.modelViewer.canActivateAR;
    console.log('AR Support:', canAR);

    if (!canAR) {
        elements.arButton.title = 'AR requires a mobile device with AR support';
        // Don't disable - let users try anyway, model-viewer handles fallbacks
    } else {
        elements.arButton.title = 'View this model in AR';
    }
}

console.log('✅ 3D Model Viewer initialized successfully');
