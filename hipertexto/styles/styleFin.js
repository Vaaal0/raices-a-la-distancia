document.addEventListener('DOMContentLoaded', function (event) {
    var string = "Parece que has decidido ir a casa, quizá otro día conozcas un nuevo amigo";
    var str = string.split("");
    var el = document.getElementById('str');
    var delay = 90; // Ajusta el tiempo de retraso según sea necesario

    function animate() {
        if (str.length > 0) {
            el.innerHTML += str.shift();
            setTimeout(animate, delay);
        }
    }

    animate();
});
