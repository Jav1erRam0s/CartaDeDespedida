const botones = document.getElementsByClassName('btn-play');
const audio = document.getElementById('miAudio');

// 2. Como getElementsByClassName devuelve una lista (HTMLCollection),
// la recorremos para asignarle el evento a cada botón
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
    // Reiniciamos el audio al principio por si ya estaba reproduciéndose
    // audio.currentTime = 0;
    audio.play();
    });
}