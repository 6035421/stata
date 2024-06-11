<?php 

function grantBadge ($name) {
    include '../database/connect.php';
    $stmt = $conn->prepare("INSERT INTO gebruikers (badges) VALUES (?)");
        $stmt->bind_param("s", $name);
    
        $stmt->execute();

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

        $stmt->close();
}
        ?>