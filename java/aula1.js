let aspasSimples = 'Estamos criando uma String com aspas simples';
//String em resumo são Texto que podem ser utilizados no JavaScript.
// E para utiliza-lo podemos usar com aspas simples, duplas, ou string template.

let aspasDuplas = "String com aspas Duplas";
//Exemplo de string com aspas Duplas.

let templateLiteral = `String interpolation allows embedding expression like ${1+1}.`;
// Essa é uma string template, basicamente usamos em casos pmde há a necessidade de 
// Realizar uma ação aritimética (como no exemplo) ou quando guardamos alguma variavél dentro dela.
// O símbolo ${} em JavaScript é usado para interpolar variáveis, ou seja para retornar o valor dela.


//Veja abaoxp exemplo de como e quando usar as crases
let nome = 'Igor';
let idade = 24; //Numero usados sem aspas (simples ou duplas)

let mensagem = `Olá, Meu nome é ${nome} e tenho ${idade} anos`;

console.log(mensagem);
console.log(templateLiteral);


let primeiroNome = 'John';
let ultimoNome = 'Doe';
let nomeCompleto = primeiroNome + ' ' + ultimoNome; //Usamos o +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; //Using template literal

console.log(nomeCompletoTemplate);
console.log(nomeCompleto);