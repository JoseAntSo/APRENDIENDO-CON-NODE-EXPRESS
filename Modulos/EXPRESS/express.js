
//importamos el modulo express para poder crear peticiones y tener un servidor
import  express  from "express";

// importamos el metodo resolve del modulo path que recordamos en la carpeta sobre path, este 
//nos devuelve el directorio donde nos encontramos trabajando
import { resolve } from "path";

const app = express();

app.get("/", (req,res) => {

    //aprendemos sobre las peticioness y los objetos y propiedades que estan tienen cuando se realizan la peticion
    //como asi tambien el objeto de respuesta que podemos ofrecer dentro de propiedades para nuestro cliente.

    res.end("Bienvenido");
    // console.log(req);
    // console.log(res);


    // Enviando un archivo html hacia el navegador desde nuestro servidor
    // res.sendFile(resolve("index.html"));


});

app.get("/user/:name-:id", (req,res) => {
    res.set({"content-type":"text/html"});
    res.end(
        `<h1>Bienvenido a Express ${req.params.name}. Eres el usuario n* ${req.params.id} en nuestra web!!!</h1>`
    )
});



app.listen(3000, () => {
    console.log("Iniciando express");
})