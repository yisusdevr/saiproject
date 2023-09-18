document.addEventListener('DOMContentLoaded', function() {
    const contenedorMenu=document.getElementById("menuContenedor");
    const menuHtml = generarMenuIndex();

    contenedorMenu.innerHTML=menuHtml;
})