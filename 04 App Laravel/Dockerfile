FROM php:8.1

ENV TZ Europe/Madrid

RUN apt update && apt install -y unzip

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY composer.* ./
RUN composer install --no-scripts
COPY . .

EXPOSE 8000

CMD php artisan serve --host 0.0.0.0