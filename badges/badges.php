<?php 

function grantBadge ($name) {
    session_start();
    include '../database/connect.php';

    $sql = "UPDATE `gebruikers` SET `badges` = CONCAT(`badges`, ',', '".$name."') WHERE id = '".$_SESSION['id']."'";

    $result = $conn->query($sql);

        $sql = "SELECT * FROM badges WHERE naam = '".$name."'";

        $result = $conn->query($sql);
    
        $row = $result->fetch_object();

            echo "<article id='badge' class='pixel-corners buttons friends widthMax heightMax badges'>
            <article class='friendListItem'>
                <img src='".$row->foto."'></img>
                <article>
                    <h2>Badge granted: ${name}!</h2>
                </article>
            </article>
        </article>";

        echo "<script src='../js/removeBadge.js'></script>";

        $conn->close();
}
        ?>