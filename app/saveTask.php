<?php
session_start();
require_once 'db.php';

$id_user = $_SESSION['user']->id;
$title = $_POST['title'];
$desc = $_POST['description'];
$created = $_POST['created'];
if ($_POST['done']==='') {
    $done = null;    
} else {
    $done = $_POST['done'];
}

$pdo = new db;
$sql = "INSERT INTO `tasks` ( `id_user`, `title`, `description`, `created`, `done`) VALUES (?,?,?,?,?)";
$stmt = $pdo->connect_db()->prepare($sql);
$stmt->execute([$id_user, $title, $desc, $created, $done]);

if ($pdo->connect_db()) {
    echo json_encode(array("statusCode"=>200));
} else {
    echo json_encode(array("statusCode"=>201));
}

?>