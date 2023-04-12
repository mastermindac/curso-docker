# Ejercicio Axum

 Este directorio contiene una aplicación escrita en
 [Axum](https://github.com/tokio-rs/axum). *Dockeriza* la aplicación en 2
 *stages* diferentes: el primero partiendo de la imagen `rust:latest` para
 compilar la app y el segundo partiendo de la imagen `debian:bullseye` para
 arrancar el binario compilado en el primer *stage*. Verás el mensaje
 `"Hello World From Axum!"` en el puerto `3000` si lo consigues.