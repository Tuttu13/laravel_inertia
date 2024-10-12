FROM php:8.1

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    unzip \
    libpq-dev \
    libcurl4-gnutls-dev \
    && docker-php-ext-install pdo pdo_pgsql bcmath

# Node.js をインストール
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

WORKDIR /var/www

# プロジェクトファイルをコピー
COPY . .

# Composer をインストール
COPY --from=composer:2.3.5 /usr/bin/composer /usr/bin/composer

# PHPの拡張機能インストール
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Laravel の依存関係をインストール
RUN composer install

# サーバーの起動
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
