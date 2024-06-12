<?php 
include './database/connect.php'; 
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STATA</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" type="image/x-icon" href="../assets/images/New Piskel.png">
</head>

<body>

    <main>
        <section class='vrienden'>
            <article class='pixel-corners buttons'>
                <input class='pixel-corners' id='zoeken' type='search' placeholder='Zoek naar accounts...'>
            </article>

            <article class='pixel-corners buttons friends'>
                <button class='pixel-corners selected' id='mijnVrienden'>Mijn Vrienden</button>
                <button class='pixel-corners' id='zoekVrienden'>Zoek Vrienden</button>
            </article>

            <article class='pixel-corners width60'>
                <article id='vriendenLijst'>
                    <?php
                if(isset($_SESSION['id'])) {
                    $sql = "SELECT * FROM gebruikers WHERE id =".$_SESSION['id'];
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();

    echo $row['vrienden'];
    if($row['vrienden'] == NULL){
        echo 'Oh nee, je hebt geen vrienden 🥲 druk op Zoek Vrienden om sociaal te zijn.';
    } else {
        foreach($result as $i) {
            echo '<article class="pixel-corners buttons friends w100">
            <article class="friendListItem">
                <img src='.$i['foto'].'></img>
                <article>
                    <h2>'.$i['gebruikersnaam'].'</h2>
                    <p>'.$i['id'].'</p>
                </article>
            </article>
        </article>';
    }
    }
                }
            }
                ?>
                </article>

                <article id='onlineLijst'>
                    <?php
                    $sql = "SELECT * FROM gebruikers";
$result = $conn->query($sql);

        foreach($result as $i) {
            echo '<article class="pixel-corners buttons friends w100">
            <article class="friendListItem">
                <img src='.$i['foto'].'></img>
                <article>
                    <h2>'.$i['gebruikersnaam'].'</h2>
                    <p>'.$i['id'].'</p>
                </article>
            </article>
        </article>';
    }
                ?>
                </article>

            </article>
            <section>
    </main>
</body>
<script src="/js/menu.js"></script>
<script src="/js/vrienden.js"></script>

</html>

<!--         <article class='pixel-corners buttons friends'>
            <article class='friendListItem'>
                <img src='../assets/images/arcade.png'></img>
                <article>
                    <h2>eeeeee</h2>
                    <p>eeeeeeeeeeee</p>
                </article>
            </article>
        </article> -->