const fullscreenButton = document.getElementById("fullscreen");
const gameCanvas = document.body

fullscreenButton.addEventListener("click", () => {
    if(fullscreenButton.innerHTML == 'Fullscreen') {
        fullscreenButton.innerHTML = 'Close Fullscreen';

    if (gameCanvas.requestFullscreen) {
        gameCanvas.requestFullscreen();
    } else if (gameCanvas.mozRequestFullScreen) { // Firefox
        gameCanvas.mozRequestFullScreen();
    } else if (gameCanvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
        gameCanvas.webkitRequestFullscreen();
    } else if (gameCanvas.msRequestFullscreen) { // IE/Edge
        gameCanvas.msRequestFullscreen();
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