function loadPages() {
    const urls = [
        'https://example.com/account1',
        'https://example.com/account2',
        'https://example.com/account3',
        'https://example.com/account4',
        'https://example.com/account5'
    ];

    for (let i = 0; i < urls.length; i++) {
        document.getElementById(`account${i + 1}`).src = urls[i];
    }
}
