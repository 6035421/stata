const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start');
let x = 100;
let y = 503;
const width = 100;
const height = 100;

const backgroundImage = new Image();
backgroundImage.src = '../assets/images/classroom.jpeg';

const playerImage = new Image();
playerImage.src = '../sprite/player-normal.png';

const enemyImage = new Image();
enemyImage.src = '../sprite/level1/enemy-idleleft.png';

const plankImage = new Image();
plankImage.src = '../sprite/plank-sprite.png';

const barrelImage = new Image();
barrelImage.src = '../sprite/level1/barrel-lay.png';

const barrelgroundImage = new Image();
barrelgroundImage.src = '../sprite/level1/barrelground.png';

const rollbarrelImage = new Image();
rollbarrelImage.src = '../sprite/level1/barrel-roll.png';

const rollbarrelImage2 = new Image();
rollbarrelImage2.src = '../sprite/level1/barrel-roll2.png';

const rollbarrelImage3 = new Image();
rollbarrelImage3.src = '../sprite/level1/barrel-roll3.png';

const ladderImage = new Image();
ladderImage.src = '../sprite/ladder.png';

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
        playerImage.src = '../sprite/player-jump.png';
        y -= 20;
        setTimeout(function () {
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
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Enemy
    ctx.drawImage(enemyImage, 1300, 110, 100, 100);

    // Planks
    ctx.drawImage(plankImage, 125, 600, 50, 50);
    ctx.drawImage(plankImage, 175, 600, 50, 50);
    ctx.drawImage(plankImage, 225, 600, 50, 50);
    ctx.drawImage(plankImage, 275, 600, 50, 50);
    ctx.drawImage(plankImage, 325, 600, 50, 50);
    ctx.drawImage(plankImage, 375, 600, 50, 50);
    ctx.drawImage(plankImage, 425, 600, 50, 50);

    // Planks Row 2
    ctx.drawImage(plankImage, 425, 470, 50, 50);
    ctx.drawImage(plankImage, 475, 470, 50, 50);
    ctx.drawImage(plankImage, 525, 470, 50, 50);
    ctx.drawImage(plankImage, 575, 470, 50, 50);

    // Barrelgrounds
    ctx.drawImage(barrelgroundImage, 1200, 200, 50, 50);
    ctx.drawImage(barrelgroundImage, 1250, 200, 50, 50);
    ctx.drawImage(barrelgroundImage, 1300, 200, 50, 50);
    ctx.drawImage(barrelgroundImage, 1350, 200, 50, 50);
    ctx.drawImage(barrelgroundImage, 1400, 200, 50, 50);
    ctx.drawImage(barrelgroundImage, 1450, 200, 50, 50);

    // Barrels
    ctx.drawImage(barrelImage, 1200, 140, 100, 100);

    let prevRollBarrelX = 1250;
    let prevRollBarrelY = 140;
    let prevRollBarrelWidth = 100;
    let prevRollBarrelHeight = 100;

    
    // Roll Barrels
    ctx.drawImage(rollbarrelImage, prevRollBarrelX, prevRollBarrelY, prevRollBarrelWidth, prevRollBarrelHeight);
    setTimeout(() => {
        ctx.clearRect(prevRollBarrelX, prevRollBarrelY, prevRollBarrelWidth, prevRollBarrelHeight);
        ctx.drawImage(rollbarrelImage2, 1300, 140, 100, 100);
        prevRollBarrelX = 1300;
        prevRollBarrelY = 140;
    }, 1000);
    setTimeout(() => {
        ctx.clearRect(prevRollBarrelX, prevRollBarrelY, prevRollBarrelWidth, prevRollBarrelHeight);
        ctx.drawImage(rollbarrelImage3, 1350, 140, 100, 100);
        prevRollBarrelX = 1350;
        prevRollBarrelY = 140;
    }, 2000);

    // Ladder
    ctx.drawImage(ladderImage, 400, 520, 100, 100);

    // Player
    ctx.drawImage(playerImage, x, y, width, height);
}

// Draw function
backgroundImage.onload = function () {
    draw();
};

playerImage.onload = function () {
    draw();
};

enemyImage.onload = function () {
    draw();
};

plankImage.onload = function () {
    draw();
};

barrelImage.onload = function () {
    draw();
}

barrelgroundImage.onload = function () {
    draw();
}



// Start button
startButton.addEventListener('click', function () {
    if (startButton.textContent === '▶') {
        startButton.textContent = '❚❚';
        gameCanvas.style.display = 'block';
        const ctx = gameCanvas.getContext('2d');
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);


        gameCanvas.style.display = 'block';
        const backgroundImage = new Image();
        backgroundImage.src = '../assets/images/classroom.jpeg';
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        backgroundImage.onload = function () {
            draw();
        };

    } else {
        startButton.textContent = '▶';
        const ctx = gameCanvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText('PAUSED', gameCanvas.width / 2 - 100, gameCanvas.height / 2);
        // When paused the player can't move
        document.removeEventListener('keydown', function (event) {
            if (event.code === 'KeyW' || event.code === 'ArrowUp') {
                playerImage.src = '../sprite/player-jump.png';
                y -= 20;
                setTimeout(function () {
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
    }
});