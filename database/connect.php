<?php
$servername = "sql312.infinityfree.com";
$username = "if0_36552308";
$password = "vfuFuHMoRuiUh";
$dbname = "if0_36552308_stata";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>