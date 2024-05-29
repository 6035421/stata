const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start');
const startTime = performance.now();

const scoreEl = document.getElementById('highscore');
let scoreTimer, score = 0;

let playerImage, x, y, width, height;

let forward = null, backward = null, jumping = null;

let interval;

let menu = document.getElementById('menu');

level = 1;

function changeLevel(level) {
    window.level = level;

    initPlayer();

    if (level === 1) {
        console.log('Level 1');

        const backgroundImage = new Image();
        backgroundImage.src = '../assets/images/classroom.jpeg';

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

            //planks row 3
            ctx.drawImage(plankImage, 1000, 600, 50, 50);
            ctx.drawImage(plankImage, 1050, 600, 50, 50);
            ctx.drawImage(plankImage, 1100, 600, 50, 50);
            ctx.drawImage(plankImage, 1150, 600, 50, 50);
            ctx.drawImage(plankImage, 1200, 600, 50, 50);
            ctx.drawImage(plankImage, 1250, 600, 50, 50);
            ctx.drawImage(plankImage, 1300, 600, 50, 50);

            //ladder row 3
            ctx.drawImage(ladderImage, 1250, 515, 100, 100);
            ctx.drawImage(ladderImage, 1250, 430, 100, 100);
            ctx.drawImage(ladderImage, 1250, 345, 100, 100);

            //planks row 4
            ctx.drawImage(plankImage, 1275, 300, 50, 50);
            ctx.drawImage(plankImage, 1225, 300, 50, 50);

            //planks row 5
            ctx.drawImage(plankImage, 1000, 370, 50, 50);
            ctx.drawImage(plankImage, 950, 370, 50, 50);

            //planks row 6
            ctx.drawImage(plankImage, 1000, 270, 50, 50);
            ctx.drawImage(plankImage, 950, 270, 50, 50);

            // Barrelgrounds
            // Top Row
            ctx.drawImage(barrelgroundImage, 120, 130, 50, 50);
            ctx.drawImage(barrelgroundImage, 170, 130, 50, 50);
            ctx.drawImage(barrelgroundImage, 220, 130, 50, 50);
            ctx.drawImage(barrelgroundImage, 270, 130, 50, 50);
            ctx.drawImage(barrelgroundImage, 320, 130, 50, 50);
            ctx.drawImage(barrelgroundImage, 370, 130, 50, 50);

            // Row 1
            ctx.drawImage(barrelgroundImage, 1200, 150, 50, 50);
            ctx.drawImage(barrelgroundImage, 1250, 150, 50, 50);
            ctx.drawImage(barrelgroundImage, 1300, 150, 50, 50);
            ctx.drawImage(barrelgroundImage, 1350, 150, 50, 50);
            ctx.drawImage(barrelgroundImage, 1400, 150, 50, 50);
            ctx.drawImage(barrelgroundImage, 1450, 150, 50, 50);

            // Barrels
            ctx.drawImage(barrelImage, 120, 70, 100, 100);

            // Boss
            ctx.drawImage(bossImage, 120, 40, 100, 100);

            // Enemy
            ctx.drawImage(enemyImage, 1300, 60, 100, 100);

            // Ladder
            ctx.drawImage(ladderImage, 400, 515, 100, 100);

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
        let x = 400;
        let y = 410;
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
            ctx.drawImage(playerImage, x, y, width, height);

            // No texture
            ctx.drawImage(notextureImage, 425, 505, 50, 50);
            ctx.drawImage(notextureImage, 475, 505, 50, 50);
            ctx.drawImage(notextureImage, 525, 505, 50, 50);
            ctx.drawImage(notextureImage, 575, 505, 50, 50);
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

        const endTime = performance.now();
        const loadTime = endTime - startTime;
        console.log(`Level 2 geladen in ${loadTime} milliseconden`);
    }

    // Level 3 
    if (level === 3) {
        let x = 100;
        let y = 100;
        const startTime = performance.now();
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const backgroundImage = new Image();
        backgroundImage.src = '../assets/images/suburbia.png';

        const playerImage = new Image();
        playerImage.src = '../sprite/player-normal.png';

        const notextureImage = new Image();
        notextureImage.src = '../sprite/notexture.png';

        function draw() {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            // Player
            ctx.drawImage(playerImage, x, y, width, height);

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

        const endTime = performance.now();
        const loadTime = endTime - startTime;
        console.log(`Level 3 geladen in ${loadTime} milliseconden`);
    }
};

// Start button
startButton.addEventListener('click', function () {
    if (startButton.textContent === '▶') {
        menu.classList.remove('gameOverMenu');

        startScoreCounting();

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

        changeLevel(level);
    } else {
        menu.classList.add('gameOverMenu');

        cancelScoreCounting();
        clearInterval(interval);

        startButton.textContent = '▶';
        const ctx = gameCanvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText('PAUSED', gameCanvas.width / 2 - 100, gameCanvas.height / 2);

        ctx.font = '15px Arial';
        ctx.fillText(`Current score: ${score.toFixed(3)}`, gameCanvas.width / 2 - 75, (gameCanvas.height / 2) + 26);
        // When paused the player can't move

        removeControls();
    }
});

function cancelScoreCounting() {
    scoreEl.style.display = 'none';

    window.clearInterval(scoreTimer);
}

function startScoreCounting() {
    scoreEl.style.display = 'block';

    scoreTimer = window.setInterval(function () {
        score += 0.01;
        scoreEl.innerHTML = `Score: ${score.toFixed(3)}`
    }, 1);
}

function addControls() {
    document.addEventListener('keyup', function (event) {
        if (event.code === 'KeyW' || event.code === 'ArrowUp' || event.code === 'Space') {
            clearInterval(jumping);
            jumping = null;
        }

        if (event.code === 'ArrowRight' || event.code === 'KeyD') {
            clearInterval(forward);
            forward = null;
        }

        if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
            clearInterval(backward);
            backward = null;
        }
    });

    document.addEventListener('keydown', function (event) {
        if ((event.code === 'KeyW' || event.code === 'ArrowUp' || event.code === 'Space') && jumping === null) {
            jumping = window.setInterval(function () {
                playerImage.src = '../sprite/player-jump.png';
                y -= 30;

                fall();
            }, 70);
        }

        if ((event.code === 'ArrowRight' || event.code === 'KeyD') && forward === null) {
            forward = window.setInterval(function () {
                playerImage.src = '../sprite/player-right.png';

                if (x > (window.innerWidth - 75)) {
                    return;
                }

                checkUnderground();
                x += 10;

            }, 70);
        }

        if ((event.code === 'ArrowLeft' || event.code === 'KeyA') && backward === null) {
            backward = window.setInterval(function () {
                playerImage.src = '../sprite/player-left.png';

                if (x === -10) {
                    return;
                }

                checkUnderground();
                x -= 10;

            }, 70);
        }
    });
}

function removeControls() {
    document.removeEventListener('keyup', function (event) {
        if (event.code === 'KeyW' || event.code === 'ArrowUp' || event.code === 'Space') {
            clearInterval(jumping);
            jumping = null;
        }

        if (event.code === 'ArrowRight' || event.code === 'KeyD') {
            clearInterval(forward);
            forward = null;
        }

        if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
            clearInterval(backward);
            backward = null;
        }
    });

    document.removeEventListener('keydown', function (event) {
        if ((event.code === 'KeyW' || event.code === 'ArrowUp' || event.code === 'Space') && jumping === null) {
            jumping = window.setInterval(function () {
                playerImage.src = '../sprite/player-jump.png';
                y -= 30;

                fall();
            }, 70);
        }

        if ((event.code === 'ArrowRight' || event.code === 'KeyD') && forward === null) {
            forward = window.setInterval(function () {
                playerImage.src = '../sprite/player-right.png';

                if (x > (window.innerWidth - 75)) {
                    return;
                }

                checkUnderground();
                x += 10;

            }, 70);
        }

        if ((event.code === 'ArrowLeft' || event.code === 'KeyA') && backward === null) {
            backward = window.setInterval(function () {
                playerImage.src = '../sprite/player-left.png';

                if (x === -10) {
                    return;
                }

                checkUnderground();
                x -= 10;

            }, 70);
        }
    });
}

function initPlayer() {
    x = 100;
    y = 503;
    width = 100;
    height = 100;

    playerImage = new Image();
    playerImage.src = '../sprite/player-normal.png';

    addControls();
}

function fall() {
    clearInterval(interval);
    interval = setInterval(function () {
        playerImage.src = '../sprite/player-normal.png';
        y += 1;

        if (checkDeath()) {
            gameOver();
        }

        console.log(y + parseInt(playerImage.height))
        let color = ctx.getImageData(x, y + 35 + parseInt(playerImage.height), 1, 1).data.join(',');
        console.log(color)
        console.log(color == '172,133,91,255');

        document.getElementById('testDiv').style.top = y + 35 + parseInt(playerImage.height) + 'px';
        document.getElementById('testDiv').style.left = x + 'px'

        if (color == '172,133,91,255') {
            clearInterval(interval);
        }
    }, 1); // 1000 voor testen
}

function checkUnderground() {

}

changeLevel(level);
startScoreCounting();

function checkDeath() {
    return y > (window.innerHeight - 65);
}

function gameOver() {
    cancelScoreCounting();
    clearInterval(interval);

    menu.classList.add('gameOverMenu');

    window.setTimeout(function () { // for some reason this needs to be delayed, couldnt find why
        const ctx = gameCanvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText('GAME OVER', gameCanvas.width / 2 - 150, gameCanvas.height / 2);

        ctx.font = '15px Arial';
        ctx.fillText(`Current score: ${score.toFixed(3)}`, gameCanvas.width / 2 - 75, (gameCanvas.height / 2) + 26);
        // When paused the player can't move

        removeControls();
    }, 10);
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const xx = event.clientX - rect.left
    const xy = event.clientY - rect.top
    console.log("x: " + xx + " y: " + xy)
    console.log("x: " + x + " y: " + y)
}

canvas.addEventListener('mousedown', function (e) {
    getCursorPosition(canvas, e)
})