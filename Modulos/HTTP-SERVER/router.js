import { createServer } from "http";

const server = createServer((require,response)=>{
    console.log(require);
    if(require.url ==="/"){
        response.writeHead(200,{"Contente-Type": "text/html"})
        response.end("Ruta principal");
    } else if (require.url === "/hola"){
        response.writeHead(200,{"Contente-Type": "text/html"})
        response.end("Ruta HOLA");
    } else if (require.url === "/anashe"){
        response.writeHead(200,{"Contente-Type": "text/html"})
        response.end("Ruta Anassheeee");
    } else {
        response.writeHead(404,{"Contente-Type": "text/html"})
        response.end("DONDE ENTRASTE MAN?!!! CUAL FLASHAS!");
    }
})

server.listen(4000, "127.0.0.1",()=>{
    console.log("server en port 4000");
})