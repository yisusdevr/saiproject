var i3 = 0;
var txt3 = '            El Sistema de Administración Inmobiliaria (SAI) es una solución tecnológica integral diseñada para agilizar y optimizar la gestión de propiedades inmobiliarias. Dirigido a agentes inmobiliarios, empresas de gestión de propiedades y propietarios individuales, el SAI ofrece una plataforma centralizada y eficiente para gestionar todas las etapas del ciclo de vida de las propiedades, desde la adquisición y alquiler hasta la venta ';
var speed3 = 30;

function typeSlogan2() {
  if (i3 < txt3.length) {
    document.getElementById("eslogan2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeSlogan2, speed);
  }
}