var i = 0;
var txt = 'Licencia';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
}

function mostrarCompraRealizada() {
    Swal.fire({
        title: 'Compra realizada',
        text: 'Gracias por su compra!',
        icon: 'success',

    })
}

document.getElementById('comprarInicial').addEventListener('click', function () {
    Swal.fire({
        title: '¿Quieres comprar la Licencia Inicial?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            mostrarCompraRealizada();
        }
    });
});

document.getElementById('comprarPremium').addEventListener('click', function () {
    Swal.fire({
        title: '¿Quieres comprar la Licencia Premium?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            mostrarCompraRealizada();
        }
    });
});

document.getElementById('comprarPremium+').addEventListener('click', function () {
    Swal.fire({
        title: '¿Quieres comprar la Licencia Premium Plus+?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            mostrarCompraRealizada();
        }
    });
});