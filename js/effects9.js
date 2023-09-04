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

const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

const PreciolicenciaSencilla = 50;
const PreciolicenciaPremium = 150;
const PreciolicenciaEmpresa = 350;

selectorLicencia.addEventListener('change', function () {
    if (selectorLicencia.value === 'sencilla') {
        descripcionLicencia.textContent = 'Licencia Sencilla: Acceso a funciones básicas.';
        precioLicencia.textContent = `$${PreciolicenciaSencilla}`;
    } else if (selectorLicencia.value === 'premium') {
        descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las características.';
        precioLicencia.textContent = `$${PreciolicenciaPremium}`;
    } else if (selectorLicencia.value === 'empresa') {
        descripcionLicencia.textContent = 'Licencia de Empresa: Acceso completo a todas las características y soporte prioritario.';
        precioLicencia.textContent = `$${PreciolicenciaEmpresa}`;
    } else {
        descripcionLicencia.textContent = 'Seleccione una Licencia';
        precioLicencia.textContent = `$`;
    }
});

comprarBtn.addEventListener('click', function () {
    if (selectorLicencia.value === 'ninguno') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, seleccione una licencia antes de comprar.',
        });
    } else {
        Swal.fire({
            icon: 'question',
            title: 'Confirmar Compra',
            text: '¿Estás seguro de comprar la licencia?',
            showCancelButton: true,
            confirmButtonText: 'Sí, Comprar',
            cancelButtonText: 'Cancelar',
        }).then((result) => { 
            if (result.isConfirmed) {
                Swal.fire('¡Licencia comprada exitosamente!', '', 'success');
            }
        });
    }
});