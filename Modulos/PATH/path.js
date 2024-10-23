/*
Este modulo tiene utilidades para trabajar con rutas de archivos y directorios de una manera que sea 
compatible con distintos sistemas operativos. Ya que en Windows se utilizan barras invertidas (\) y 
en otros sistemas como Linux o macOS se usan barras normales (/).

Las funciones principales que contiene son:

 --> basename : Devuelve el nombre del archivo (o directorio) de una ruta
 --> dirname: Devuelve el directorio de una ruta.
 --> extname: Devuelve la extension de un archivo incluyendo el punto (.)
 --> join: Une varios segmentos de una ruta, generando una ruta correcta independientemente del S.O.
 --> resolve: Resuelve una secuencia de rutas a una ruta absoluta. Sino se especifica una ruta de inicio usa el directorio actual.
 --> parse: Devuelve un objeto que representa las diferentes partes de una ruta.
 --> normalize: Normaliza una ruta, arreglando barras dobles y otras irregularidades.

*/



import { join , resolve } from "path";

const directorio = "/ruta/principal";
const archivo = "archivo.txt";

const rutaCompleta = join(directorio,archivo);

const rutaAbsoluta = resolve();

console.log(rutaCompleta);
console.log(rutaAbsoluta);
