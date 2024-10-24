let matrizVendas = [
    [100, 200,300], //Loja A
    [400, 500, 50], //Loja B
    [700, 400, 450], //Loja C
]

//console.log(matrizVendas[2]);


matrizVendas [0][1] = 800;
console.log(matrizVendas [0]);

matrizVendas [2] [1] = 900;
console.log(matrizVendas[2]);

matrizVendas [1] [1] = 145;
console.log (matrizVendas[1]);

let resultadoLojaA = matrizVendas[0][0] + matrizVendas[0][1] + matrizVendas [0][2];

let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas [1][2];

let resultadoLojaC = matrizVendas[2][0] + matrizVendas[2][1] + matrizVendas [2][2];

console.log(resultadoLojaA, resultadoLojaB, resultadoLojaC);