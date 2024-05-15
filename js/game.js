const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start');
const startTime = performance.now();
level = 1;

function changeLevel(level) {
    if (level === 1) {
        console.log('Level 1');
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

        const bossImage = new Image();
        bossImage.src = '../sprite/level1/level1boss - idle.png';

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
            // Top Row
            ctx.drawImage(barrelgroundImage, 120, 100, 50, 50);
            ctx.drawImage(barrelgroundImage, 170, 100, 50, 50);
            ctx.drawImage(barrelgroundImage, 220, 100, 50, 50);
            ctx.drawImage(barrelgroundImage, 270, 100, 50, 50);
            ctx.drawImage(barrelgroundImage, 320, 100, 50, 50);
            ctx.drawImage(barrelgroundImage, 370, 100, 50, 50);

            // Row 1
            ctx.drawImage(barrelgroundImage, 1200, 200, 50, 50);
            ctx.drawImage(barrelgroundImage, 1250, 200, 50, 50);
            ctx.drawImage(barrelgroundImage, 1300, 200, 50, 50);
            ctx.drawImage(barrelgroundImage, 1350, 200, 50, 50);
            ctx.drawImage(barrelgroundImage, 1400, 200, 50, 50);
            ctx.drawImage(barrelgroundImage, 1450, 200, 50, 50);

            // Barrels
            ctx.drawImage(barrelImage, 120, 40, 100, 100);

            // Boss
            ctx.drawImage(bossImage, 120, 10, 100, 100);

            // Enemy
            ctx.drawImage(enemyImage, 1300, 110, 100, 100);

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

        bossImage.onload = function () {
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

        const endTime = performance.now();
        const loadTime = endTime - startTime;
        console.log(`Level 1 geladen in ${loadTime} milliseconden`);
    }

    // Level 2 in level2.js
    if (level === 2) {
        const startTime = performance.now();
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const backgroundImage = new Image();
        backgroundImage.src = '../assets/images/park.png';

        const playerImage = new Image();
        playerImage.src = '../sprite/player-normal.png';

        const notextureImage = new Image();
        notextureImage.src = '../sprite/notexture.png';

        function draw() {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            // Player
            ctx.drawImage(playerImage, 100, 100, 100, 100);

            // No texture
            ctx.drawImage(notextureImage, 125, 195, 50, 50);
            ctx.drawImage(notextureImage, 175, 195, 50, 50);
            ctx.drawImage(notextureImage, 225, 195, 50, 50);
        }

        backgroundImage.onload = function () {
            draw();
        };

        playerImage.onload = function () {
            draw();
        }

        notextureImage.onload = function () {
            draw();
        }

    }

    const endTime = performance.now();
    const loadTime = endTime - startTime;
    console.log(`Level 2 geladen in ${loadTime} milliseconden`);
};

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

changeLevel(1);