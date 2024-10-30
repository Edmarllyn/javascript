const usuario = {
    nome: 'Igor',
    idade: 25,
    time: 'Corinthians'
};

const mensagemDeBoasVindas1= 'Bem vindo, Torcendor Da Fiel';
const mensagemDeBoasVindas2= 'Bem Vindo, Torcedor Do Vasco';


//Se o usuario for da torcida do Corinthians, ira aparecer a messagem1
if(usuario.time === 'Corinthians') {
    console.log(mensagemDeBoasVindas1);
} 


// Caso contrario irá aparecer a messagem2 
else {
    console.log(mensagemDeBoasVindas2);
}