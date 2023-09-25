<<<<<<< HEAD
function toggleTheme() {
    const body = document.body;

    // Toggle classes for light and dark themes
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}

// Llama a toggleTheme() cuando se hace clic en el botón de cambio de tema
=======
function toggleTheme() {
    const body = document.body;

    // Toggle classes for light and dark themes
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}

// Llama a toggleTheme() cuando se hace clic en el botón de cambio de tema
>>>>>>> 9389d66f73e16b2ada8633d5cb59078956fe0568
document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);