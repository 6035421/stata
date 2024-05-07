const startButton = document.getElementById('start');

startButton.addEventListener('click', function() {
    if (startButton.textContent === '▶') {
        startButton.textContent = '❚❚';
    } else {
        startButton.textContent = '▶';
    }
});