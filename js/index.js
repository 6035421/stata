const fullscreenButton = document.getElementById("fullscreen");
const gameCanvas = document.getElementById("gameCanvas");
const body = document.body
const home = document.getElementById('home');
const restart = document.getElementById('restart');

restart.addEventListener('click', function () {
    window.location.reload();
});

home.onclick = function () {
    window.location.href = '../index.php';
}

fullscreenButton.addEventListener("click", () => {
    if(fullscreenButton.innerHTML == '⛶') {
        fullscreenButton.innerHTML = '✖ ';

    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { // Firefox
        body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { // Chrome, Safari and Opera
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { // IE/Edge
        body.msRequestFullscreen();
    }
} else {
    fullscreenButton.innerHTML = '⛶';

    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
}
});