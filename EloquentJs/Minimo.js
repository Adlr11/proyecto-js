const min = (a,b) => a < b ? a: b; //una funcion que regresa lo mismo que la funcio Math.min() pero está limitada a 2 parametros
console.log(min(-10,-12));

const elMinimo = (lista) => { lista.sort((a,b)=> a-b)
    return lista[0]
}//

console.log(elMinimo([5,6,7,9,12,65,4,59,215,2,1,-1,-2,35])); 