function isEven(n) {
	if (n < 0) {
		return undefined;//se retorna undefined para que al poner un numero negativo no se sature la pila con el numero de llamadas
	}
	else {	
		if (n == 0) {
			return true;
		}
		if (n == 1) {
			return false;
		}
		return isEven(n - 2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));//al ingresar un numero negativo devuelve undefined


const esPar = n => (n % 2 == 0) 
console.log(esPar(50));
console.log(esPar(75));
console.log(esPar(-1));
//esta funcion devuelve lo mismo sin errores y de una sola línea