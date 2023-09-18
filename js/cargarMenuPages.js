document.addEventListener('DOMContentLoaded', function() {
    const contenedorMenu=document.getElementById("menuContenedor");
    const menuHtml = generarMenuPages();

    contenedorMenu.innerHTML=menuHtml;
})