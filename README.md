# Funcoes.Js
Primeiro trabalho da disciplina: (linguagem de script ) como definir e criar funções em Javascript utilizando os formatos: declaration, expression e arrow.
. Função Declaration
O que é: A função declaration é a forma tradicional de declarar uma função, usando a palavra-chave function. Exemplo: function minhaFuncao() {}.

Benefício: Você pode chamar a função em qualquer lugar do código, mesmo antes dela ser escrita, porque o JavaScript "lembra" dela.

Desvantagem: Como o JavaScript "lembra" da função, pode ser confuso e gerar bugs em códigos mais complexos.
 exemplo1
function calculaIdade(nasceu) {
    let idade = 2025 - nasceu;
    return "a sua idade é " + idade + " anos";
  }
  
  console.log(calculaIdade(2004)); 
exemplo2
function calculaTinta(metros) {
    let latas = metros / 5;  
    return "Você precisa de " + latas + " latas de tinta";
}

console.log(calculaTinta(20)); 
exemplo3
function somarNumeros(numero1, numero2) {
return numero1 + numero2;
}

let resultado = somarNumeros(5, 3);
console.log(resultado); 

2. Função Expression
O que é: A função expression é definida como uma expressão e fica guardada em uma variável. Exemplo: const minhaFuncao = function() {}.

Benefício: Só pode ser usada depois de ser definida, o que deixa o código mais organizado.

Desvantagem: Não dá para chamar a função antes de ela ser escrita no código.

exemplo1
const calcularDobro = function(numero) {
let resultado = numero * 2;  
return resultado;            
};
console.log(calcularDobro(2)); 

exemplo2
function calculaMedia(nota1, nota2, nota3) {
    let soma = nota1 + nota2 + nota3;
    return soma / 3;
}
console.log(calculaMedia(7, 8, 9)); 
exemplo3
const par_ou_impar = function(n) {
    return n % 2 === 0 ? "Par" : "Ímpar";
};

console.log(par_ou_impar(4)); 
console.log(par_ou_impar(5)); 


3. Arrow Function
O que é: A arrow function é uma maneira curta e moderna de escrever funções. Exemplo: const minhaFuncao = () => {}.

Benefício: Ela é mais rápida de escrever e tem um comportamento diferente com o this, o que pode facilitar em alguns casos.

Desvantagem: Não funciona com o new (não cria objetos) e pode ser confusa para quem não entende bem o comportamento do this.


exemplo1
function contagem(numeroMaximo) {
    for (let i = 1; i <= numeroMaximo; i++) {
      console.log(i);
    }
  }
  
  contaAte(3); 
  
  exemplo2
  const teste_numero = numero => {
    if (numero > 0) return "Positivo";
    else if (numero < 0) return "Negativo";
    else return "Zero";
};
console.log(teste_numero(1)); 
console.log(teste_numero(0)); 
console.log(teste_numero(-1));    

exemplo3
const maiorIdade = idade => {
    if (idade >= 18) {
      return "adulto";
    } else {
      return "jovem";
    }
  };
  console.log(maiorIdade(14)); 
