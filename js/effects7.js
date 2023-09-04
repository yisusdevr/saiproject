var i4 = 0;
var txt4 = 'Revisa como funciona SAI y sus requerimientos del sistema';
var speed4 = 30;

function typeSlogan() {
  if (i4 < txt4.length) {
    document.getElementById("eslogan4").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeSlogan, speed);
  }
}