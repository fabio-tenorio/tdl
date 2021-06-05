<?php
session_start();
require_once 'db.php';

if (isset($_POST['id'])) {
    $id = $_POST['id'];
    $pdo = new db;
    $sql = "DELETE FROM `tasks` WHERE id=?";
    $stmt = $pdo->connect_db()->prepare($sql);
    $stmt->execute([$id]);

    if ($pdo->connect_db()) {
        echo json_encode(array("statusCode"=>200));
    } else {
        echo json_encode(array("statusCode"=>201));
    }
}

?>