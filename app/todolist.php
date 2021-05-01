<!-- Cette page devra contenir :
- Une liste de tâches à faire accompagnée de leur date de création. Il
doit être possible, avec un bouton ou autre, de spécifier qu’une tâche
a été accomplie ou annulée. Cette tâche doit être retirée de la liste
- Une liste des tâches accomplies ou chaque tâche est accompagnée
de la date à laquelle elle a été accomplie.
- Un input permettant de créer une tâche.
- Un bouton de déconnexion permettant de... se déconnecter.
A l’exception du bouton de déconnexion, aucune des actions possibles sur
la page “todolist.php” ne doit entraîner un rechargement de la page. -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>flowing | my todolist</title>
</head>
<body class="tdl_parent">
    <header class="tdl_header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" id="logo" href="#">pomodoro</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="app/todolist.php">My todo list</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Members
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="app/connexion.php">sign in</a></li>
                        <li><a class="dropdown-item" href="app/inscription.php">sign up</a></li>
                    </ul>
                    </li>
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
    <aside class="tdl_left_aside">
        left side
    </aside>
    <main class="tdl_main">
        <div class="circle"></div>
        <h1 class="task span-12">main</h1>
        <div class="task span-6">task 1</div>
        <div class="task span-4">task 2</div>
        <div class="task span-8">task 3</div>
        <div class="task span-2">task 4</div>
    </main>
    <aside class="tdl_right_aside">
        right side
    </aside>
    <footer class="tdl_footer">
        footer
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>
</html>