//Inicializando o efeito ScrollRaveal na primeira seção (#section1)
ScrollReveal().reveal('#section1', {
    duration:1000, //Duração do efeito (em milissegundos), define a velociadade da transição
    origin: 'bottom', //Origem do efeito: o conteudo virá  de baixo para cima 
    distance: '50px', // Distancia que o elemento "viaja" antes de aparecer 
});

//configurando o efeito scrollreveal na segunda seção (#section2)
ScrollReveal().reveal('#section2',{
    duration:1000, // Duração do efeito da revelação
    origin: 'right', //Origem do efeito: o conteudo virá  da direita para a esqueda 
    distance: '50px', // Distancia do movimento antes do elemento se revelar 
})