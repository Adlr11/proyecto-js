let listaDeNumeros = [2, 3, 5, 7, 11];
let x = 0;
console.log(listaDeNumeros[2]);
console.log(listaDeNumeros[0]);
console.log(listaDeNumeros[2 - 1]);

console.log( listaDeNumeros.length );
console.log( listaDeNumeros['length'] );

let ouch = 'Ouch'
console.log(typeof ouch.toUpperCase);
console.log(ouch.toUpperCase());

let secuencia = [1, 2, 3];
secuencia.push(4);
secuencia.push(5);
console.log(secuencia);
console.log(secuencia.pop());
console.log(secuencia);

let dia1 = {
    ardilla: false,
    eventos: ["trabajo", "toque un arbol", "pizza", "salir a correr"]
    };
console.log(dia1.ardilla);
console.log(dia1.lobo);

dia1.lobo = false;
console.log(dia1.lobo);
console.log(dia1);

let descripciones = {
    trabajo: "Fui a trabajar",
    "toque un arbol": "Toque un arbol"//para las propiedades que no tengan nombres de vinculaciones validas se pueden poner entre comillas
};

let unObjeto = {izquierda: 1, derecha: 2};
console.log(unObjeto.izquierda);
delete unObjeto.izquierda;
console.log(unObjeto.izquierda);
console.log("izquierda" in unObjeto);
console.log("derecha" in unObjeto);

console.log(Object.keys({x: 0, y: 0, z: 2}));//Esta funcion te permite acceder a los nombres de las propiedades

let objetoA = {a: 1, b: 2};
Object.assign(objetoA, {b: 3, c: 4});//Object.assign te permite agregar o modificar varias propiedades dentro de un objeto
console.log(objetoA);

let diario = [//Array de objetos
    {eventos: ["trabajo", "toque un arbol", "pizza",
    "sali a correr", "television"],
    ardilla: false},
    {eventos: ["trabajo", "helado", "coliflor",
    "lasaña", "toque un arbol", "me cepille los dientes"],
    ardilla: false},
    {eventos: ["fin de semana", "monte la bicicleta", "descanso", "nueces",
    "cerveza"],
    ardilla: true},
];

let objeto1 = {valor: 10};
let objeto2 = objeto1;
let objeto3 = {valor: 10};
console.log(objeto1 == objeto2);
console.log(objeto1 == objeto3);
objeto1.valor = 15;
console.log(objeto2.valor);
console.log(objeto3.valor);

const puntuacion = {visitantes: 0, locales: 0};
puntuacion.visitantes = 1; // Esto esta bien
// puntuacion = {visitantes: 1, locales: 1}; // Esto no esta permitido

let daily = [];
function añadirEntrada(eventos, ardilla) {
daily.push({eventos, ardilla});
}

añadirEntrada(['trabajo', 'toque un arbol', 'pizza', 'sali a correr',
'television'], false)
añadirEntrada(["trabajo", "helado", "coliflor", "lasaña",
"toque un arbol", "me cepille los dientes"], false);
añadirEntrada(["fin de semana", "monte la bicicleta", "descanso", 
"nueces", "cerveza"], true);

function phi(tabla) {
    return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
    Math.sqrt((tabla[2] + tabla[3]) *
    (tabla[0] + tabla[1]) *
    (tabla[1] + tabla[3]) *
    (tabla[0] + tabla[2]));
    }
    console.log(phi([76, 9, 4, 1]));

