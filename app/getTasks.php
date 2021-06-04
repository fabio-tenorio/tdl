<?php
session_start();
require_once 'db.php';

$db = new db;
$tasks = $db->selectTasks($_SESSION['user']->id);
$tasks = json_encode($tasks);
echo $tasks;
?>