//importamos la funcion get del modulo http donde simularemos la peticion de un cliente hacia el servidor
import { get } from "http"

// declaramos una URL como anteriormente definimos en la carpeta URL
const urlSite = {
    hostname: "josenashe.com",
    port: 8000,
    path: "/cursos"
}
 
// utilizamos la funcion get que simula una peticion GET, el cual manejamos la response de dicha peticion
// al mismo tiempo concatenamos la funcion on, para capturar en caso de que se presente el evento de error
// y manejamos dicho error.

get(urlSite, (res) =>{
    console.log(`El sitio esta nashe, Codigo: ${res.statusCode}, Menssage: ${res.statusMessage}`);
}).on("error",(error)=>{
    console.error(`El sitio FALLO, Codigo anashe: ${error.code}, Causa: ${error.cause}, Menssage: ${error.message}`);
});