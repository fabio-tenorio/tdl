<!-- Le site devra comporter une page “index.php” permettant à tout utilisateur
de créer un compte et de s’y connecter. -->
<?php
session_start();
if (isset($_POST['disconnect'])) {
    session_destroy();
    header('location: index.php');
}
// var_dump($_SERVER['REQUEST_URI']);
// var_dump($_SESSION['user']);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
    <title>pomodoro | your new todo list</title>
</head>
<body>
    <header id="index-header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" id="logo" href="index.php">pomodoro</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="app/todolist.php">My todo list</a>
                    </li>
                    <?php if (isset($_SESSION['user'])) { ?>
                    <li class="nav-item">
                        <p>Hello, <?= $_SESSION['user']->login; ?> !</p>
                    </li>
                    <form action="" method="post">
                        <button class="btn btn-warning" type="submit" id="disconnect" name="disconnect">sign out</button>
                    </form>
                    <?php } else { ?>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Members
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="app/connexion.php">sign in</a></li>
                        <li><a class="dropdown-item" href="app/inscription.php">sign up</a></li>
                    </ul>
                    </li>
                    <?php } ?>
                    <li class="nav-item">
                    <a class="nav-link active" target="_blank" aria-current="page" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">The technique</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">About us</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </header>
    <main id="index-main">
        <h1>get things done</h1>
        <img src="images/pomodoro-bg.jpg" alt="pomodoro background">
    </main>
    <footer id="index-footer" class="bg-light text-center text-dark">
        <div class="container p-4 pb-0">
            <section class="">
                <form action="">
                    <div class="row d-flex justify-content-center">
                        <div class="col-auto">
                            <p class="pt-2">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>
                        <div class="col-md-5 col-12">
                            <div class="form-outline form-white mb-4">
                                <input type="email" id="form5Example2" class="form-control" />
                                <label class="form-label" for="form5Example2">Email address</label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-light mb-4">
                            Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        <div class="text-center p-3 bg-danger" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2021 Copyright:
            <a class="text-white" href="#">Fabio Tenorio de Carvalho</a>
        </div>
    </footer>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script type="text/javascript" src="app/script.js"></script>
</body>
</html>