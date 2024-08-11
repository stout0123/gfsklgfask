// Array of available apps - you can populate this dynamically or manually
const availableApps = [
    { id: 'app1', name: 'App 1' },
    { id: 'app2', name: 'App 2' },
    { id: 'app3', name: 'App 3' },
    { id: 'app4', name: 'App 4' },
    { id: 'app5', name: 'App 5' }
];

// Populate the select dropdown with available apps
window.onload = () => {
    const appSelect = document.getElementById('app-select');
    availableApps.forEach(app => {
        const option = document.createElement('option');
        option.value = app.id;
        option.textContent = app.name;
        appSelect.appendChild(option);
    });
}

function loadApp() {
    const appSelect = document.getElementById('app-select');
    const selectedAppId = appSelect.value;
    const selectedApp = availableApps.find(app => app.id === selectedAppId);

    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = ''; // Clear previous apps

    // Generate 5 instances of the selected app
    for (let i = 1; i <= 5; i++) {
        const appFrame = document.createElement('div');
        appFrame.classList.add('app-frame');
        appFrame.innerHTML = `<h2>${selectedApp.name} - Instance ${i}</h2><p>This is a version of ${selectedApp.name} running...</p>`;
        appContainer.appendChild(appFrame);
    }
}
