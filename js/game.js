const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let x = 100;
let y = 503;
const width = 100;
const height = 100;

const backgroundImage = new Image();
backgroundImage.src = '../assets/images/classroom.jpeg';

const playerImage = new Image();
playerImage.src = '../sprite/player-normal.png';

const enemyImage = new Image();
enemyImage.src = '../sprite/enemy-idleleft.png';

const plankImage = new Image();
plankImage.src = '../sprite/plank-sprite.png';

document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        playerImage.src = '../sprite/player-jump.png';
        y -= 20;
        setTimeout(function() {
            playerImage.src = '../sprite/player-normal.png';
            y += 20;
        }, 500);
    }

    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
        playerImage.src = '../sprite/player-right.png';
        x += 10;
    }

    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        playerImage.src = '../sprite/player-left.png';
        x -= 10;
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImage, x, y, width, height);
    ctx.drawImage(enemyImage, 400, 505, 100, 100);

    // Planks
    ctx.drawImage(plankImage, 125, 600, 50, 50);
    ctx.drawImage(plankImage, 175, 600, 50, 50);
    ctx.drawImage(plankImage, 225, 600, 50, 50);
    ctx.drawImage(plankImage, 275, 600, 50, 50);
    ctx.drawImage(plankImage, 325, 600, 50, 50);
    ctx.drawImage(plankImage, 375, 600, 50, 50);
    ctx.drawImage(plankImage, 425, 600, 50, 50);
}

backgroundImage.onload = function() {
    draw();
};

playerImage.onload = function() {
    draw();
};

enemyImage.onload = function() {
    draw();
};

plankImage.onload = function() {
    draw();
};