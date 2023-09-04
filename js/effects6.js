var i = 0;
var txt = 'Contacto';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
}


const formulario = document.getElementById('formularioContacto');
const pepe = document.getElementById('pepe');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombreInput = document.getElementById('nombre');
  const nombreValor = nombreInput.value;
  const mensaje = document.getElementById("mensaje");
  const mensajeValor = mensaje.value;
  const correo = document.getElementById("correo");
  const correoValor = correo.value;

  Swal.fire({
    icon: 'success',
    title: '¡Formulario Enviado!',
    text: `Gracias por tus comentarios ${nombreValor}. Tu mensaje ha sido enviado correctamente.`,
  });

  formulario.reset();
});
