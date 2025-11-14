/**
 * Main JavaScript for 3D Model Viewer
 * Handles all interactive features, controls, and user interactions
 */

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * Initialize the application
 * Sets up all event listeners and initializes components
 */
function initializeApp() {
    // Get DOM elements
    const elements = getElements();

    // Initialize components
    initializeTheme(elements);
    initializeNavigation(elements);
    initializeModelViewer(elements);
    initializeControls(elements);
    initializeLoadingScreen(elements);

    // Set up event listeners
    setupEventListeners(elements);
}

/**
 * Get all required DOM elements
 * @returns {Object} Object containing all DOM element references
 */
function getElements() {
    return {
        // Theme
        themeToggle: document.getElementById('themeToggle'),

        // Navigation
        navButtons: document.querySelectorAll('.nav-btn'),
        sections: {
            viewer: document.getElementById('viewerSection'),
            features: document.getElementById('featuresSection'),
            about: document.getElementById('aboutSection')
        },

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

/**
 * Initialize theme based on user preference
 * @param {Object} elements - DOM elements object
 */
function initializeTheme(elements) {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Theme toggle event listener
    elements.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

/**
 * Set the application theme
 * @param {string} theme - Theme name ('dark' or 'light')
 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Add smooth transition for theme change
    document.body.style.transition = 'background-color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// ========================================
// NAVIGATION
// ========================================

/**
 * Initialize navigation functionality
 * @param {Object} elements - DOM elements object
 */
function initializeNavigation(elements) {
    elements.navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionName = button.getAttribute('data-section');
            navigateToSection(sectionName, elements);
        });
    });
}

/**
 * Navigate to a specific section
 * @param {string} sectionName - Name of the section to navigate to
 * @param {Object} elements - DOM elements object
 */
function navigateToSection(sectionName, elements) {
    // Update active nav button
    elements.navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-section') === sectionName);
    });

    // Update active section with fade animation
    Object.keys(elements.sections).forEach(key => {
        const section = elements.sections[key];
        if (key === sectionName) {
            section.classList.add('active');
            section.style.animation = 'fadeIn 0.3s ease';
        } else {
            section.classList.remove('active');
        }
    });
}

// ========================================
// MODEL VIEWER INITIALIZATION
// ========================================

/**
 * Initialize the model viewer component
 * @param {Object} elements - DOM elements object
 */
function initializeModelViewer(elements) {
    const modelViewer = elements.modelViewer;

    // Handle model load event
    modelViewer.addEventListener('load', () => {
        console.log('3D model loaded successfully');
        hideLoadingScreen(elements);
    });

    // Handle model error event
    modelViewer.addEventListener('error', (event) => {
        console.error('Error loading 3D model:', event);
        hideLoadingScreen(elements);
        showErrorMessage('Failed to load 3D model. Please try again.');
    });

    // Handle progress event
    modelViewer.addEventListener('progress', (event) => {
        const progressBar = document.querySelector('.update-bar');
        if (progressBar) {
            const progress = event.detail.totalProgress * 100;
            progressBar.style.width = `${progress}%`;
        }
    });

    // Handle camera change events
    modelViewer.addEventListener('camera-change', () => {
        // You can add custom behavior when camera changes
        // For example, update UI to show current camera position
    });
}

// ========================================
// CONTROLS
// ========================================

/**
 * Initialize all control elements
 * @param {Object} elements - DOM elements object
 */
function initializeControls(elements) {
    initializeEnvironmentControl(elements);
    initializeExposureControl(elements);
    initializeShadowControl(elements);
    initializeAutoRotateControl(elements);
    initializeWireframeControl(elements);
}

/**
 * Initialize environment selector
 * @param {Object} elements - DOM elements object
 */
function initializeEnvironmentControl(elements) {
    const { environmentSelector, modelViewer } = elements;

    // Environment images mapping
    const environments = {
        neutral: 'neutral',
        studio: 'legacy',
        warehouse: 'whipple_creek_regional_park_04_1k.hdr',
        outdoor: 'aircraft_workshop_01_1k.hdr'
    };

    environmentSelector.addEventListener('change', (e) => {
        const selectedEnvironment = e.target.value;
        modelViewer.environmentImage = environments[selectedEnvironment];

        // Add smooth transition effect
        modelViewer.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            modelViewer.style.transition = '';
        }, 300);
    });
}

/**
 * Initialize exposure control
 * @param {Object} elements - DOM elements object
 */
function initializeExposureControl(elements) {
    const { exposureSlider, modelViewer } = elements;

    exposureSlider.addEventListener('input', (e) => {
        const exposureValue = parseFloat(e.target.value);
        modelViewer.exposure = exposureValue;
    });
}

/**
 * Initialize shadow intensity control
 * @param {Object} elements - DOM elements object
 */
function initializeShadowControl(elements) {
    const { shadowSlider, modelViewer } = elements;

    shadowSlider.addEventListener('input', (e) => {
        const shadowValue = parseFloat(e.target.value);
        modelViewer.shadowIntensity = shadowValue;
    });
}

/**
 * Initialize auto-rotate toggle
 * @param {Object} elements - DOM elements object
 */
function initializeAutoRotateControl(elements) {
    const { autoRotateToggle, modelViewer } = elements;

    autoRotateToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            modelViewer.setAttribute('auto-rotate', '');
        } else {
            modelViewer.removeAttribute('auto-rotate');
        }
    });
}

/**
 * Initialize wireframe mode toggle
 * Note: This is a demonstration - actual wireframe requires additional configuration
 * @param {Object} elements - DOM elements object
 */
function initializeWireframeControl(elements) {
    const { wireframeToggle, modelViewer } = elements;

    wireframeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            // Add custom styling or attributes for wireframe mode
            modelViewer.style.filter = 'brightness(1.2) contrast(1.1)';
            console.log('Wireframe mode enabled (demo)');
        } else {
            modelViewer.style.filter = '';
            console.log('Wireframe mode disabled');
        }
    });
}

// ========================================
// BUTTON ACTIONS
// ========================================

/**
 * Set up all event listeners for buttons and interactive elements
 * @param {Object} elements - DOM elements object
 */
function setupEventListeners(elements) {
    setupARButton(elements);
    setupResetCameraButton(elements);
    setupFullscreenButton(elements);
    setupScreenshotButton(elements);
    setupHotspotInteractions();
}

/**
 * Set up AR button functionality
 * @param {Object} elements - DOM elements object
 */
function setupARButton(elements) {
    const { arButton, modelViewer } = elements;

    arButton.addEventListener('click', () => {
        // Activate AR mode
        modelViewer.activateAR();
    });

    // Check if AR is supported
    if (!modelViewer.canActivateAR) {
        arButton.disabled = true;
        arButton.style.opacity = '0.5';
        arButton.title = 'AR not supported on this device';
    }
}

/**
 * Set up reset camera button
 * @param {Object} elements - DOM elements object
 */
function setupResetCameraButton(elements) {
    const { resetCamera, modelViewer } = elements;

    resetCamera.addEventListener('click', () => {
        // Reset camera to initial orbit
        modelViewer.resetTurntableRotation();
        modelViewer.cameraOrbit = '45deg 75deg 2.5m';

        // Visual feedback
        resetCamera.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            resetCamera.style.transform = '';
        }, 300);
    });
}

/**
 * Set up fullscreen button
 * @param {Object} elements - DOM elements object
 */
function setupFullscreenButton(elements) {
    const { fullscreenBtn, modelViewer } = elements;
    const viewerWrapper = modelViewer.parentElement;

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            if (viewerWrapper.requestFullscreen) {
                viewerWrapper.requestFullscreen();
            } else if (viewerWrapper.webkitRequestFullscreen) {
                viewerWrapper.webkitRequestFullscreen();
            } else if (viewerWrapper.msRequestFullscreen) {
                viewerWrapper.msRequestFullscreen();
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });

    // Update button icon based on fullscreen state
    document.addEventListener('fullscreenchange', updateFullscreenIcon);
    document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
    document.addEventListener('msfullscreenchange', updateFullscreenIcon);

    function updateFullscreenIcon() {
        const svg = fullscreenBtn.querySelector('svg');
        if (document.fullscreenElement) {
            // Show exit fullscreen icon
            svg.innerHTML = '<path d="M7 3V7H3M13 7H17V3M17 13V17H13M7 17H3V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
        } else {
            // Show enter fullscreen icon
            svg.innerHTML = '<path d="M3 7V3H7M13 3H17V7M17 13V17H13M7 17H3V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
        }
    }
}

/**
 * Set up screenshot button
 * @param {Object} elements - DOM elements object
 */
function setupScreenshotButton(elements) {
    const { screenshotBtn, modelViewer } = elements;

    screenshotBtn.addEventListener('click', async () => {
        try {
            // Take screenshot of the model
            const screenshot = await modelViewer.toDataURL('image/png');

            // Create download link
            const link = document.createElement('a');
            link.href = screenshot;
            link.download = `3d-model-screenshot-${Date.now()}.png`;
            link.click();

            // Visual feedback
            screenshotBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                screenshotBtn.style.transform = '';
            }, 200);

            showSuccessMessage('Screenshot saved successfully!');
        } catch (error) {
            console.error('Error taking screenshot:', error);
            showErrorMessage('Failed to capture screenshot');
        }
    });
}

/**
 * Set up hotspot interactions
 * Adds click and hover animations to hotspots
 */
function setupHotspotInteractions() {
    const hotspots = document.querySelectorAll('.hotspot');

    hotspots.forEach(hotspot => {
        // Add click ripple effect
        hotspot.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            hotspot.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// LOADING SCREEN
// ========================================

/**
 * Initialize loading screen
 * @param {Object} elements - DOM elements object
 */
function initializeLoadingScreen(elements) {
    // If model loads quickly, ensure loading screen shows for minimum time
    const minLoadTime = 1000; // 1 second minimum
    const startTime = Date.now();

    elements.modelViewer.addEventListener('load', () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadTime - elapsed);

        setTimeout(() => {
            hideLoadingScreen(elements);
        }, remaining);
    });
}

/**
 * Hide the loading screen with fade animation
 * @param {Object} elements - DOM elements object
 */
function hideLoadingScreen(elements) {
    const { loadingScreen } = elements;
    loadingScreen.classList.add('hidden');

    // Remove from DOM after animation completes
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 300);
}

// ========================================
// USER FEEDBACK
// ========================================

/**
 * Show success message to user
 * @param {string} message - Success message to display
 */
function showSuccessMessage(message) {
    showToast(message, 'success');
}

/**
 * Show error message to user
 * @param {string} message - Error message to display
 */
function showErrorMessage(message) {
    showToast(message, 'error');
}

/**
 * Display a toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type of toast ('success' or 'error')
 */
function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    // Toast styles
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    // Add to DOM
    document.body.appendChild(toast);

    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

/**
 * Set up keyboard shortcuts for better UX
 */
document.addEventListener('keydown', (e) => {
    // F key for fullscreen
    if (e.key === 'f' || e.key === 'F') {
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        if (fullscreenBtn) fullscreenBtn.click();
    }

    // R key to reset camera
    if (e.key === 'r' || e.key === 'R') {
        const resetCamera = document.getElementById('resetCamera');
        if (resetCamera) resetCamera.click();
    }

    // S key for screenshot
    if (e.key === 's' || e.key === 'S') {
        e.preventDefault(); // Prevent browser save dialog
        const screenshotBtn = document.getElementById('screenshotBtn');
        if (screenshotBtn) screenshotBtn.click();
    }

    // Space key to toggle auto-rotate
    if (e.key === ' ' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        const autoRotateToggle = document.getElementById('autoRotateToggle');
        if (autoRotateToggle) {
            autoRotateToggle.checked = !autoRotateToggle.checked;
            autoRotateToggle.dispatchEvent(new Event('change'));
        }
    }
});

// ========================================
// PERFORMANCE MONITORING
// ========================================

/**
 * Log performance metrics (for development)
 */
if (window.performance && window.performance.measure) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}

// ========================================
// EXPORT FOR DEBUGGING (Development only)
// ========================================

// Make functions available in console for debugging
window.debugModelViewer = {
    getElements,
    setTheme,
    navigateToSection,
    showSuccessMessage,
    showErrorMessage
};

console.log('3D Model Viewer initialized successfully');
console.log('Available keyboard shortcuts:');
console.log('  F - Toggle fullscreen');
console.log('  R - Reset camera');
console.log('  S - Take screenshot');
console.log('  Space - Toggle auto-rotate');
