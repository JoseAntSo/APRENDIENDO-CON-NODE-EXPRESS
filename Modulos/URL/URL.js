/*
 - Lo que vamos a comprender y aprender aqui son las caracteristicas que contienen una URL
 - Ya que la misma contiene informacion importante para nuestros servidores cuando realizamos una peticion desde el lado cliente
 - Utilizaremos el modulo url, que esta definido de forma nativa en NODE, el mismo se utiliza para trabajar con URLs.
 - Algunas caracteristicas que tiene son el descomponer o fraccionar una URL son:
 Ejemplo:
 
 --> HostName
 --> PathName
 --> Search
 --> HRef
 --> Hash

 Funciones Principales: 

  --> parse: Para analizar una URL y devolver un objeto con sus partes.
  --> format: Para formatear un objeto URL y devolverlo como una string.
  --> resolve: Para resolver URLs relativas a URLs base.

*/
// En este ejemplo utilizamos la primera


import { parse } from "url";

const urlString =  "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2#nashee"; 

// ejemplo con auth https://usuario:contraseña@www.ejemplo.com

const parsedUrl = parse(urlString,true); 

console.log(parsedUrl);


console.log(parsedUrl.hostname); // Representa el dominio o dirección principal del servidor
console.log(parsedUrl.auth); // URL se utiliza para proporcionar información de autenticación (usuario y contraseña)
console.log(parsedUrl.hash); // Se utiliza típicamente para identificar una sección específica dentro de una página web.
console.log(parsedUrl.pathname); // Indica la ubicación específica de un recurso en el servidor.
console.log(parsedUrl.href); // Devuelve la URL completa en formato string.
console.log(parsedUrl.protocol); // Representa el protocolo utilizado por la URL, como http:, https:, ftp:
console.log(parsedUrl.query); // Parametros de consulta


