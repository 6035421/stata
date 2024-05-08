const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const x = 100;
let y = 100;
const width = 100;
const height = 100;

const backgroundImage = new Image();
backgroundImage.src = '../assets/images/classroom.jpeg';

const playerImage = new Image();
playerImage.src = '../sprite/player-normal.png';

const plankImage = new Image();
plankImage.src = '../sprite/plank-sprite.png';

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        playerImage.src = '../sprite/player-jump.png';
        setTimeout(function() {
            playerImage.src = '../sprite/player-normal.png';
        }, 500);
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImage, x, y, width, height);
    ctx.drawImage(plankImage, 125, 195, 50, 50);
}

backgroundImage.onload = function() {
    draw();
};

playerImage.onload = function() {
    draw();
};

plankImage.onload = function() {
    draw();
};