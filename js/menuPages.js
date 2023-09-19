function generarMenuPages(){
    const menuPages = `<nav class="navbar navbar-expand-lg  fixed-top"data-bs-theme="dark"  >
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
                  <a class="nav-link" href="license.html">Licencia del programa</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="ptc.html">Tematica PTC</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

return menuPages;
}