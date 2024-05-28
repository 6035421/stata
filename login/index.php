<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['gebruikersnaam'];
    $password = $_POST['wachtwoord'];

    $sql = "SELECT * FROM admin WHERE gebruikersnaam ='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['wachtwoord'])) {
            session_start(); // Start the session
            $_SESSION['id'] = $row['id']; // Store user ID in session
            header("Location: home.php"); // Redirect to home page
            exit();
        } else {
            echo "Invalid username or password";
        }
    } else {
        echo "Invalid username or password";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Username: <input type="text" name="gebruikersnaam"><br>
        Password: <input type="password" name="wachtwoord"><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>