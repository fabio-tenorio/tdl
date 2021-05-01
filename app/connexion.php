<!-- Une fois connecté, l’utilisateur du site devra être redirigé vers une page
“todolist.php”. -->
<?php
session_start();
require_once 'db.php';
$db = new db;
if (isset($_POST['signin'])) {
    $_SESSION['user'] = $db->signIn($_POST);
    var_dump($_SESSION);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>pomodoro | my todolist</title>
</head>
<body>
    <div class="parent">
        <h1>sign in</h1>
        <form class="box" method="POST">
            <div class="form-item form-group">
                <label for="login">login</label>
                <input type="text" id="login" name="login" placeholder="your login">
            </div>
            <div class="form-item form-group">
                <label for="password">password</label>
                <input type="password" id="password" name="password" placeholder="your password">
            </div>
            <button type="submit" class="btn btn-primary col-12 m-auto" id="signin-button" name="signin">sign in</button>
        </form>
        <di>
            <a href="../index.php">home</a>
            <a href="inscription.php">sign up</a>
        </di>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>
</html>