var i2 = 0;
var txt2 = 'Conoce al equipo detras de SAI ';
var speed2 = 50;

function typeSlogan() {
  if (i2 < txt2.length) {
    document.getElementById("eslogan").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeSlogan, speed);
  }
}