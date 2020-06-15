<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Cristal</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>
        body {
            font-family: "Varela Round", sans-serif;
            margin: 0;
            padding: 0;
            background: #ffc107;
        }

        .container {
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: center;
        }

        .content {
            text-align: center;
        }

        .logo {
            margin-right: 40px;
            margin-bottom: 20px;
        }

        .links a {
            font-size: 1.25rem;
            text-decoration: none;
            background-color: #000000;
            padding: 20px;
            color: white;
        }

        @media all and (max-width: 500px) {

            .links {
                display: flex;
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="content">
        <div class="logo">
            <img src="https://cristal.netlify.app/static/media/flat.c9385cc7.png" style="width: 200px;">
        </div>
        <h1>
            Cristal
        </h1>
        <h3>
            A assistente virtual do caminhoneiro, que vai premiar e ajudar a cuidar do seu bem-estar;
        </h3>
    </div>
</div>
</body>
</html>