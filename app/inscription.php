<?php require_once 'db.php';
$db = new db;
// var_dump($db);
if (isset($_POST['signup'])) {
    $db->signUp($_POST);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>pomodoro | my todo list</title>
</head>
<body>
    <div class="container parent">
        <h1>sign up</h1>
        <form class="box" method="POST">
            <div class="form-item form-group my-2">
                <label for="name">name</label>
                <input type="text" id="text" name="name">
            </div>
            <div class="form-item form-group my-2">
                <label for="lastname">last name</label>
                <input type="text" id="lastname" name="lastname">
            </div>
            <div class="form-item form-group my-2">
                <label for="login">login</label>
                <input type="text" id="login" name="login">
            </div>
            <div class="form-item form-group my-2">
                <label for="email">email</label>
                <input type="email" id="email" name="email">
            </div>
            <div class="form-item form-group my-2">
                <label for="password">password</label>
                <input type="password" id="password" name="password">
            </div>
            <button type="submit" class="btn btn-primary col-12 m-auto" id="signup-button" name="signup">sign up</button>
        </form>
        <di>
            <a href="../index.php">home</a>
            <a href="connexion.php">sign in</a>
        </di>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>
</html>