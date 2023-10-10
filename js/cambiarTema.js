function toggleTheme() {
    const body = document.body;

    // Toggle classes for light and dark themes
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}

// Llama a toggleTheme() cuando se hace clic en el botón de cambio de tema
document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);