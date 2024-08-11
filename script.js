// Array of available apps with deep links
const availableApps = [
    { id: 'mistplay', name: 'Mistplay', link: 'mistplay://open' }
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
        appFrame.innerHTML = `<h2>${selectedApp.name} - Instance ${i}</h2>
                              <p><a href="${selectedApp.link}" target="_blank">Open ${selectedApp.name}</a></p>`;
        appContainer.appendChild(appFrame);
    }
}
