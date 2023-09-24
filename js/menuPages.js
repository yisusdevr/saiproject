function generarMenuPages(){
    const menuPages = `<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <a class="navbar-brand" href="../index.html">
            <img src="../img/logo_claro.png" alt="Logo de SAI" class="navbar-logo" width="100">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contactanos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">Sobre nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="requirements.html">Cómo funciona</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="license.html">Licencias</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="ptc.html">Tematica PTC</a>
                </li>
                <div class="theme-switch-wrapper">
                    <label class="theme-switch">
                    <div class="theme-icon">
                        <i class="bi bi-moon-fill"></i>
                    </div>
                    <input type="checkbox" id="theme-toggle" onclick="toggleTheme()">
                    <div class="slider round"></div>
                </label>
                </div>
            </ul>
        </div>
    </div>
</nav>`;

return menuPages;
}
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    const isDark = body.classList.contains("dark-theme");
    const themeToggle = document.getElementById("theme-toggle");

    if (isDark) {
        themeToggle.innerText = "Cambiar a Modo Claro";
    } else {
        themeToggle.innerText = "Cambiar a Modo Oscuro";
    }
}

