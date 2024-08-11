function loadApp() {
    const appSelect = document.getElementById('app-select');
    const selectedApp = appSelect.value;
    
    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = ''; // Clear previous apps

    // Generate 5 instances of the selected app
    for (let i = 1; i <= 5; i++) {
        const appFrame = document.createElement('div');
        appFrame.classList.add('app-frame');

        switch (selectedApp) {
            case 'app1':
                appFrame.innerHTML = `<h2>App 1 - Instance ${i}</h2><p>This is a version of App 1 running...</p>`;
                break;
            case 'app2':
                appFrame.innerHTML = `<h2>App 2 - Instance ${i}</h2><p>This is a version of App 2 running...</p>`;
                break;
            case 'app3':
                appFrame.innerHTML = `<h2>App 3 - Instance ${i}</h2><p>This is a version of App 3 running...</p>`;
                break;
            case 'app4':
                appFrame.innerHTML = `<h2>App 4 - Instance ${i}</h2><p>This is a version of App 4 running...</p>`;
                break;
            case 'app5':
                appFrame.innerHTML = `<h2>App 5 - Instance ${i}</h2><p>This is a version of App 5 running...</p>`;
                break;
            default:
                appFrame.innerHTML = `<h2>Unknown App</h2><p>Select an app from the dropdown.</p>`;
        }

        appContainer.appendChild(appFrame);
    }
}
