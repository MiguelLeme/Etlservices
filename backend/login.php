<?php
include 'db.php';
session_start();  // Inicia a sessão para gerenciar o login

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    try {
        // Busca o usuário pelo email
        $stmt = $db->prepare("SELECT * FROM users WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verifica se o usuário existe e se a senha está correta
        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];  // Armazena o ID do usuário na sessão
            header("Location: index.php");       // Redireciona para a página index.php
            exit();                              // Garante que o código pare aqui
        } else {
            echo "Erro: Email ou senha incorretos.";
        }
    } catch (PDOException $e) {
        echo "Erro ao efetuar login: " . $e->getMessage();
    }
}
?>
