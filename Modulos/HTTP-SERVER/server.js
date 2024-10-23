// creamos un servidor desde el modulo http con la funcion createServer


import { createServer } from "http";

//esta funcion es ejecutada para poder realizar dichas acciones en base a las request solicitadas
// y ofrecer una response a dicha peticion

const server = createServer((require,response)=>{
    // response.writeHead(200,{"Content-Type": "text/plain"});
    response.writeHead(200,{"Content-Type": "text/html"});
    response.end("Hello World");
});

// aqui definimos donde el servidor se encuentra activo y listo para recibir peticiones.
server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server On port 3000");
})