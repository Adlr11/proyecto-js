const countchar = (str, char) => {//en los parametros necesitamos un string y un caracter el cual queremos contar
    let fs = 0
    for(i=0;i<str.length;i++){
        if(str[i] == char){
        fs++;
        }
    }
    return fs
}

const countFs = str => countchar(str, 'f');//esta funcion espacialmente busca las 'f' que estén dentro del string

console.log(countFs('FfFfFfFFfffFffFF'));
console.log(countchar('kakalakak','l'));

