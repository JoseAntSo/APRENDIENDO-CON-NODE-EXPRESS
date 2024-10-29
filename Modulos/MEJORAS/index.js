
// Funcion Agnostica autoconvocada
// Agnostica porque no tiene nombre
// Autoconvocada porque lo ejecutamos con los parentesis

// const { envs } = require('./config/env');
import { envs }  from './config/env.js'
// const { startServer } = require('./server/server')
import { startServer } from './server/server.js'

const main = () =>{
    console.log("Aqui comenzamos el servidor");
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
    // console.log(envs);
}

(async () => {
    main();
})()