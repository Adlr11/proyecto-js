const potencia = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
    console.log(resultado);
    }
    return resultado;
    };

   console.log( potencia(2,10));

   const humus = function(factor) {
    const ingrediente = function(cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
    unidad += "s";
    }
    console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    };
    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.25, "taza", "tahini");
    ingrediente(0.25, "taza", "jugo de limón");
    ingrediente(1, "clavo", "ajo");
    ingrediente(2, "cucharada", "aceite de oliva");
    ingrediente(0.5, "cucharadita", "comino");
    };
    