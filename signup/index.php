<?php
include '../database/connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['gebruikersnaam'];
    $password = $_POST['wachtwoord'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO gebruikers (gebruikersnaam, wachtwoord) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashed_password);

    if ($stmt->execute()) {
        echo "User registered successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
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
        Username: <input type="text" name="gebruikersnaam" required><br>
        Password: <input type="password" name="wachtwoord" required><br>
        <input type="submit" value="Sign Up">
    </form>
</body>
</html>