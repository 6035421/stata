<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STATA</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/game.css">
    <link rel="icon" type="image/x-icon" href="../assets/images/New Piskel.png">
</head>
<body>
    <!-- header -->
    <header>

    </header>

    <!-- Main -->
    <main>
        <section id="menu">
            <article class="menu">
                <img src="/sprite/player.gif" alt="player">
                <button class='pixel-corners' id="start">❚❚</button>
                <button class='pixel-corners' id="home">Home</button>
                <button class='pixel-corners' id="settings">Settings</button>
                <button class='pixel-corners' id="about">About</button>
                <button class='pixel-corners' id="fullscreen">Fullscreen</button>

                <p id='highscore'></p>
            </article>
        </section>
        <section id="game">
            <article class="canvas">
                <canvas id="gameCanvas" width="1500" height="650">
                    Your browser does not support the HTML5 canvas element.
                    
                </canvas>
            </article>
        </section>
    </main>

    <div id='testDiv'></div>

    <!-- footer -->
    <footer>

    </footer>
</body>
    <script src="/js/game.js"></script>
    <script src="/js/index.js"></script>
</html>