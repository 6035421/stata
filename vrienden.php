<?php 
include './database/connect.php'; 
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
                <button class='pixel-corners selected' id='mijnVrienden'>Mijn Vrienden - 0</button>
                <button class='pixel-corners' id='zoekVrienden'>Zoek Vrienden - 2</button>
            </article>

            <article class='pixel-corners'>
                <?php
                if(isset($_SESSION['id'])) {
                    $sql = "SELECT * FROM gebruikers WHERE id =".$_SESSION['id'];
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();

    echo $row['vrienden'];
    if($row['vrienden'] == NULL){
        echo 'hi';
    }
                }
            }
                ?>
            </article>
            <section>
    </main>
</body>
<script src="/js/menu.js"></script>

</html>