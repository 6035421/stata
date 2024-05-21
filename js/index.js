const fullscreenButton = document.getElementById("fullscreen");
const gameCanvas = document.getElementById("gameCanvas");
const body = document.body

fullscreenButton.addEventListener("click", () => {
    if(fullscreenButton.innerHTML == 'Fullscreen') {
        fullscreenButton.innerHTML = 'Close Fullscreen';

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
    fullscreenButton.innerHTML = 'Fullscreen';

    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
}
});