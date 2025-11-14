// Get elements
const viewer = document.getElementById('viewer');
const environment = document.getElementById('environment');
const exposure = document.getElementById('exposure');
const shadow = document.getElementById('shadow');
const exposureValue = document.getElementById('exposureValue');
const shadowValue = document.getElementById('shadowValue');

// Environment control
environment.addEventListener('change', (e) => {
    viewer.environmentImage = e.target.value;
});

// Exposure control
exposure.addEventListener('input', (e) => {
    viewer.exposure = e.target.value;
    exposureValue.textContent = e.target.value;
});

// Shadow control
shadow.addEventListener('input', (e) => {
    viewer.shadowIntensity = e.target.value;
    shadowValue.textContent = e.target.value;
});

// Reset camera
function resetCamera() {
    viewer.cameraOrbit = '45deg 75deg 105%';
    viewer.fieldOfView = '35deg';
}

// AR toggle
function toggleAR() {
    if (viewer.canActivateAR) {
        viewer.activateAR();
    } else {
        alert('AR not supported on this device');
    }
}
