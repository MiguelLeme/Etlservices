<?php
include 'db.php';

try {
    $db->exec("CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        password TEXT NOT NULL,
        phone TEXT NOT NULL
    )");
    echo "Tabela 'users' criada com sucesso.";
} catch (PDOException $e) {
    echo "Erro ao criar tabela: " . $e->getMessage();
}
?>
