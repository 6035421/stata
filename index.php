<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STATA</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="icon" type="image/x-icon" href="../assets/images/New Piskel.png">
</head>

<body>
    <!-- Header -->
    <header>

    </header>

    <!-- Main -->
    <main class='HomeMenuList'>
        <section>
            <article id='logo'>
                <img src="/assets/images/logo.png" alt="player">
            </article>
            <?php echo '    <h1>Welkom admin, ' . $_SESSION['gebruikersnaam'] . '</h1><br />' ?>

            <article id='buttons'>
                <a class='pixel-corners' id='play' href='./game/index.php'>Play</a>

                <?php
        if(isset($_SESSION['password'])) {
            echo "<a class='pixel-corners' id='vrienden' href='./vrienden.php'>Vrienden</a>";
            echo "<a class='pixel-corners' id='account' href='./profile.php'>Account</a>";
        } else {
            echo "<a class='pixel-corners' id='vrienden' disabled href='./login/index.php'>Vrienden</a>";
            echo "<a class='pixel-corners' id='account' href='./login/index.php'>Account</a>";
        }
        ?>

            </article>
        </section>
    </main>

    <!-- Footer -->
    <footer>

    </footer>
</body>
<script src="/js/menu.js"></script>

</html>