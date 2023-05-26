function chessBoard(tam) {//se genera una funcion para que el parametro sea el tamaño de el tablero
    
let size = tam; //se le asigna el parametro de la funciona a la variable del tamaño 
let nuevaLetra = ' ';// usar un string vacio
let str = '';// usar un string vacio

for (i = 0; i <= (size * size); i++){
    str += nuevaLetra;
    if (i % size == 0) {
        str += '\n';
    if (size % 2 == 1){
        nuevaLetra = (nuevaLetra == ' ')? '#': ' ';
    }
    }else{
        nuevaLetra = (nuevaLetra == ' ')? '#': ' ';
    }
}

console.log(str);
}

chessBoard(8)