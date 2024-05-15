<?php
include './database/connect.php';

if (isset($_GET['id']) && !empty($_GET['id'])) {
    $user_id = $_GET['id'];

    $user_sql = "SELECT * FROM gebruikers WHERE id = $user_id";
    $user_result = $conn->query($user_sql);
    $user_row = $user_result->fetch_assoc();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STATA</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="icon" type="image/x-icon" href="../assets/images/New Piskel.png">
</head>
<body>
    <!-- Header -->
    <header>

    </header>

    <!-- Main -->
    <main>
    <?php if (isset($user_row) && $user_row): ?>
            <section id="profile">
                <h1>Profile</h1>
                <article id="profile-pic">
                    <img class="profile-picture" src="<?php echo $user_row['foto']; ?>" alt="Profile Picture">
                </article>
                <h3>ID: <?php echo $user_row['id']; ?></h3>
                <h3>Username: <?php echo $user_row['gebruikersnaam']; ?></h3>
            <?php else: ?>
                            <p>User not found</p>
            <?php endif; ?>
        </section>
    </main>

    <!-- Footer -->
    <footer>

    </footer>
</body>
    <script src="/js/index.js"></script>
</html>