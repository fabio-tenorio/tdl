<?php

require_once 'db.php';

$title = $_POST['title'];
$desc = $_POST['description'];
$created = $_POST['created'];
$done = $_POST['done'];

$pdo = new db;
$sql = "INSERT INTO `tasks` ( `title`, `description`, `created`, `done`) VALUES (?,?,?,?)";
$stmt = $pdo->connect_db()->prepare($sql);
$stmt->execute([$title, $desc, $created, $done]);

if ($pdo->connect_db) {
    echo json_encode(array("statusCode"=>200));
} else {
    echo json_encode(array("statusCode"=>201));
}

?>