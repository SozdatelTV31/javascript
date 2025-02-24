<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма входа</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        
        .login-container {
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        
        .login-container h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .login-container input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        .login-container button {
            width: 100%;
            padding: 10px;
            background-color: #5cb85c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .login-container button:hover {
            background-color: #4cae4c;
        }

        .error-message {
            color: red;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Вход</h2>
        <input type="text" id="username" placeholder="Имя пользователя" required>
        <input type="password" id="password" placeholder="Пароль" required>
        <button onclick="login()">Войти</button>
        <div id="error" class="error-message"></div>
    </div>

    <script>
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('error');

            // Пример простой проверки
            if (username === '' || password === '') {
                errorDiv.textContent = 'Пожалуйста, заполните все поля.';
            } else {
                errorDiv.textContent = '';
                // Здесь можно добавить логику для отправки данных на сервер
                alert('Вход выполнен!'); // Заменить на вашу бизнес-логику
            }
        }
    </script>
</body>
</html>
