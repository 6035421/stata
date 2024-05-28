<?php
include './database/connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['gebruikersnaam'];
    $password = $_POST['wachtwoord'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO admin (gebruikersnaam, wachtwoord) VALUES ('$username', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "User registered successfully";

        $conn->query($update_sql);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Sign Up</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h2>Sign Up</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Username: <input type="text" name="gebruikersnaam"><br>
        Password: <input type="password" name="wachtwoord"><br>
        <input type="submit" value="Sign Up">
    </form>
</body>
</html>
