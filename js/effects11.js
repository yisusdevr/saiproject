function typeWriter() {
    var i = 0;
    var txt = 'Descarga y Manual de Usuario';
    var speed = 50;

    if (document.getElementById("titleD")) {
        var title = document.getElementById("titleD");
        title.innerHTML = "";
        setTimeout(function() {
            function type() {
                if (i < txt.length) {
                    title.innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }, 1000);
    }
}
