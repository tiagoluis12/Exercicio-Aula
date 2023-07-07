//Declaração de variáveis
var x = 27;
let test = "teste";
const test2 = "teste2";

//Escopo

//Escopo Global

const pedido = "Pizza";
let valor = "R$ 50,00";
const restaurante = "Tiago's Burguer";

// console.log(pedido, valor, restaurante);

function testeEscopo(pedido, valor) {
  //Escopo Local
  console.log(pedido);
  console.log(valor);
  console.log(restaurante);

}

// testeEscopo();

//variaveis

//NUM
let num = 100;
let pi = 4.1534;

//String
let nome = "Tiago";
let sobreNome = "Luis";

//Boolean
let ligarluz = true;
let desligarluz = false;

//undefined
let teste2023;

//null
let teste2024 = null;

// console.log(`${num} ${pi} ${nome} ${sobreNome} ${ligarluz} ${desligarluz} ${teste2023} ${teste2024}`)

//Objetos
let mercado = {
  nome: "Online market",
  endereco: "Rua 2023",
  numero: 2023,
  bairro: "Centro",
  cidade: "São Paulo",
  estado: "SP",
  cep: "2023-2023",
  telefone: "2023-2023",
};

// console.log(mercado);

//arrys

// let produtos ["arroz", "feijao", "macarrao", "carne", "frango", "peixe", "salada", "legumes", "frutas", "verduras"];
// console.log(produtos);

// operadores aritméticos
let a = 55;
let b = 105;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;
// console.log(soma, subtracao, multiplicacao, divisao, resto);

//operadores de atribuição
let ab = 100;

ab += 50;
ab -= 50;
ab *= 30;
ab /= 40;
ab %= 60;
// console.log (ab);

//operadores de comparação
let abobora = 15;

let abobora2 = 10;

// console.log(abobora > abobora2);
// console.log(abobora < abobora2);
// console.log(abobora >= abobora2);
// console.log(abobora <= abobora2);
// console.log(abobora == abobora2);
// console.log(abobora != abobora2);

//operadores lógicos
let sorvete = 5;
let chocolate = 10;
let pizza = 15;

// console.log(sorvete > chocolate && chocolate > pizza);
// console.log(sorvete > chocolate || chocolate < pizza);
// console.log(!(sorvete > chocolate));

//operadores ternário
let frete = 90;

let resultado = frete>= 100 ? "Frete gratis" : "pagar pelo frete";

// console.log(resultado);

// Operador de resto (%)
let resto1 = 80;
let resto2 = 60;

let restoResultado = resto1%resto2;

// console.log(restoResultado);

// Operadores de incremento e decremento
let inicio = 101;

inicio++;
inicio--;

// console.log(inicio);

// Operador de concatenação (+)
let carrinho = "ipad";
let valorTotal = "R$ 100,00";
let frete1 = "R$ 10,00";
let total = `${carrinho} ${valorTotal} ${frete1}`

// console.log(total);

// Operador de objeto ( . )
let carro = {
  marca: "BMW",
  modelo: "X1",
  ano: 2023,
}

console.log(`${carro.marca} ${carro.modelo} ${carro.ano}`)


