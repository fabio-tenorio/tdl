<?php

class db {
    private $db_host = 'localhost';
    private $db_login = 'root';
    private $db_password = '';
    private $db_name = 'todolist';
    private $db_charset = 'utf8mb4';
    protected $_PDO;

    public function connect_db()
    {
        $dsn = "mysql:host=" . $this->db_host . ";dbname=" . $this->db_name . ";charset=" . $this->db_charset;
        $options = [
        \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_OBJ
        ];
        try {
            $this->_PDO = new \PDO($dsn, $this->db_login, $this->db_password, $options);
            return $this->_PDO;
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public function selectAll($table)
    {   
        $sql = $this->connect_db()->prepare("SELECT * FROM $table");
        // $sql->bindParam(':table', $table);
        $sql->execute();
        return $sql->fetchAll(\PDO::FETCH_OBJ);
    }

    public function signUp($data) {
        (isset($data['name']) and $data['name']!=='') ? ($name = $data['name']) : $this->message="you must fill all fields";
        (isset($data['lastname']) and $data['lastname']!=='') ? ($lastname = $data['lastname']) : $this->message="you must fill all fields";
        (isset($data['login']) and $data['login']!=='') ? ($login = $data['login']) : $this->message="you must fill all fields";
        (isset($data['email']) and $data['email']!=='') ? ($email = $data['email']) : $this->message="you must fill all fields";
        (isset($data['password']) and $data['password']!=='') ? ($password = $data['password']) : $this->message="you must fill all fields";
        $sql = "INSERT INTO `users` (name, lastname, login, email, password) VALUES (?,?,?,?,?)";
        $result = $this->connect_db()->prepare($sql);
        return $result->execute([$name, $lastname, $login, $email, $password]);
    }

    public function checkPassword ($password, $hashedpassword) {
        password_verify($password, $hashedpassword);
    }

    public function signIn($data) {
        $login = $data['login'];
        // $password = $data['password'];
        $sql = $this->connect_db()->prepare("SELECT * FROM `users` WHERE login=:login");
        $sql->execute([':login'=>$login]);
        $this->user = $sql->fetch(\PDO::FETCH_OBJ);
        return $this->user;
    }

    public function selectOneTask($id) {
        $sql = $this->connect_db()->prepare("SELECT * FROM `tasks` WHERE id=:id");
        $sql->execute([':id'=>$id]);
        return $sql->fetch(\PDO::FETCH_OBJ);
    }
}

?>