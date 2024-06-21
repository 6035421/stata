<?php
session_start();
include '../database/connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['gebruikersnaam'];
    $password = $_POST['wachtwoord'];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM gebruikers WHERE gebruikersnaam = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        // Verify the hashed password
        if (password_verify($password, $row['wachtwoord'])) {
            $_SESSION['id'] = $row['id'];
            $_SESSION['gebruikersnaam'] = $row['gebruikersnaam'];
            header("Location: /index.php");
            exit();
        } else {
            echo "Invalid username or password";
        }
    } else {
        echo "Invalid username or password";
    }

    $stmt->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/login-signup.css">
    <link rel="icon" type="image/x-icon" href="../assets/images/New Piskel.png">
</head>
<body>
    <article id='logo'>
        <img src="/assets/images/logo.png" alt="player">
    </article>
    <section class="abovetext">
        <h1>Login</h1>
        <p>Log in je account om vrienden te maken.</p>
    </section>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Username: <input type="text" name="gebruikersnaam" required><br>
        Password: <input type="password" name="wachtwoord" required><br>
        <input type="submit" value="Login">
    </form>
        -
    <a href='../signup/index.php'>Sign-Up Instead</a>
</body>
</html>