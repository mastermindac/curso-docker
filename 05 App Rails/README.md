# Ejercicio Ruby On Rails

Este directorio contiene una aplicación creada con
[Ruby on Rails](https://rubyonrails.org/). Deberás documentarte sobre cómo
funciona el ecosistema Rails y *Dockerizar* la aplicación. Intenta primero
*Dockerizarla* de forma manual partiendo de la imagen
[`ubuntu:22.04`](https://hub.docker.com/_/ubuntu) e instalando todo lo
necesario. Después, *Dockeriza* la aplicación partiendo de la imagen
[`ruby:3.0.2`](https://hub.docker.com/_/ruby), que es la versión exacta usada
para crear la app.

La aplicación escucha en el puerto `3000`. Si consigues *Dockerizarla* y
arrancarla verás el mensaje `"Mastermind Ruby Docker :)"` desde el navegador.
Cuando termines, entrega tu solución
[aquí](https://www.mastermind.ac/courses/take/docker-de-noob-a-pro/surveys/44067976-entrega-reto)
usando este formato:

```Dockerfile
# Dockerfile Manual
FROM ubuntu:22.04
# ... Resto del Dockerfile aquí

# Dockerfile Preconfigurado
FROM ruby:3.0.2
# ... Resto del Dockerfile aquí
```
