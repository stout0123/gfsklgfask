let totalEarnings = 0;

function addGame() {
    const gameName = document.getElementById('game').value;
    const earnings = parseFloat(document.getElementById('earnings').value);
    const timeSpent = parseFloat(document.getElementById('time').value);

    if (gameName && earnings && timeSpent) {
        // Update total earnings
        totalEarnings += earnings;
        document.getElementById('totalEarnings').textContent = totalEarnings.toFixed(2);
        
        // Add game to the list
        const gameList = document.getElementById('gameList');
        const li = document.createElement('li');
        li.textContent = `${gameName} - $${earnings.toFixed(2)} earned in ${timeSpent} minutes`;
        gameList.appendChild(li);

        // Clear input fields
        document.getElementById('game').value = '';
        document.getElementById('earnings').value = '';
        document.getElementById('time').value = '';
    } else {
        alert('Please fill in all fields');
    }
}
