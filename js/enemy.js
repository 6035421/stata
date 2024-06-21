// enemyXmove, enemyYmove variables
let enemyXmove = 0;
let enemyYmove = 0;

const enemyImage = new Image();
enemyImage.src = '../sprite/level1/enemy-idleleft.png';

ctx.drawImage(enemyImage, enemyX, enemyY, width, height);


// enemy ai movement (enemyXmove, enemyYmove)
function enemyAI() {
    if (enemyX > 1000) {
        enemyXmove = -1;
    }
    if (enemyX < 100) {
        enemyXmove = 1;
    }
    enemyX += enemyXmove;
}