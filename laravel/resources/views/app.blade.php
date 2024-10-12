<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Laravel App</title>
    <!-- Webpack でビルドされた main.js ファイルを読み込み -->
    <script src="{{ asset('dist/main.js') }}" defer></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>