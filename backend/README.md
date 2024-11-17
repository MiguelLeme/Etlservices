# ETL Services - Back-End

Este guia explica como configurar e executar o back-end do projeto **ETL Services**, desenvolvido com **PHP** e utilizando **SQLite** como banco de dados.

## 📋 Pré-requisitos
Certifique-se de ter os seguintes itens instalados e configurados no seu computador:

1. **Servidor Local com Suporte a PHP**
   - Exemplos: [XAMPP](https://www.apachefriends.org/index.html), [Laragon](https://laragon.org/), [WAMP](https://www.wampserver.com/).
   
2. **SQLite**
   - O SQLite já vem embutido na maioria das distribuições do PHP, mas você pode verificar executando:
     ```bash
     php -m | grep sqlite
     ```

3. **Editor de Código** (opcional, para ajustes no projeto)
   - Exemplos: **Visual Studio Code**, **Sublime Text**, **PHPStorm**.

---

## 🚀 Passo a Passo para Executar

### 1. Clone o Repositório
Abra o terminal e execute o comando abaixo para clonar o projeto:
```bash
git clone https://github.com/seu-usuario/etl-services.git
