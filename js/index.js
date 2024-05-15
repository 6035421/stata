const fullscreenButton = document.getElementById("fullscreen");
const gameCanvas = document.getElementById("gameCanvas");

fullscreenButton.addEventListener("click", () => {
    if (gameCanvas.requestFullscreen) {
        gameCanvas.requestFullscreen();
    } else if (gameCanvas.mozRequestFullScreen) { // Firefox
        gameCanvas.mozRequestFullScreen();
    } else if (gameCanvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
        gameCanvas.webkitRequestFullscreen();
    } else if (gameCanvas.msRequestFullscreen) { // IE/Edge
        gameCanvas.msRequestFullscreen();
    }
});