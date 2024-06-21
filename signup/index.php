<?php
include '../database/connect.php';
include '../badges/badges.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['gebruikersnaam'];
    $password = $_POST['wachtwoord'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO gebruikers (gebruikersnaam, wachtwoord, badges) VALUES (?, ?, 'Nom Nom Nom welcome to STATA
')");
    $stmt->bind_param("ss", $username, $hashed_password);

    if ($stmt->execute()) {
        grantBadge('Nom Nom Nom welcome to STATA');
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
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/login-signup.css">
</head>
<body>
    <article id='logo'>
        <img src="/assets/images/logo.png" alt="player">
    </article>
    
    <section class="abovetext">
        <h1>Signup</h1>
        <p>Sign up voor een account om vrienden te maken.</p>
    </section>    

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        Username: <input type="text" name="gebruikersnaam" required><br>
        Password: <input type="password" name="wachtwoord" required><br>
        <input type="submit" value="Sign Up">
    </form>
    -
    <a href='../login/index.php'>Login Instead</a>
</body>
</html>