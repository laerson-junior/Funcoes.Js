const teste_numero = numero => {
    if (numero > 0) return "Positivo";
    else if (numero < 0) return "Negativo";
    else return "Zero";
};
console.log(teste_numero(1)); 
console.log(teste_numero(0)); 
console.log(teste_numero(-1));    