// Array of available apps with deep links
const availableApps = [
    { id: 'app1', name: 'Google Maps', link: 'geo:0,0?q=restaurants' },
    { id: 'app2', name: 'YouTube', link: 'vnd.youtube://www.youtube.com/watch?v=example' },
    { id: 'app3', name: 'Twitter', link: 'twitter://user?screen_name=example' },
    { id: 'app4', name: 'WhatsApp', link: 'whatsapp://send?text=Hello' },
    { id: 'app5', name: 'Facebook', link: 'fb://profile/12345' },
    { id: 'app6', name: 'Mistplay', link: 'mistplay://app' } // Mistplay entry
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
                              <p><a href="${selectedApp.link}">Open ${selectedApp.name}</a></p>`;
        appContainer.appendChild(appFrame);
    }
}
