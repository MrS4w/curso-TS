"use strict";
//  string
var nome = 'Victor';
console.log(nome);
// nome = 22;
// number
var idade = 21;
// idade = 'Victor'
idade = 21.9;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 21;
console.log(typeof minhaIdade);
// minhaIdade = '21';
// array
var hobbies = ['tocar', 'treinar'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas
var endereco = ['Av Principal', 99];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2021 };
console.log(carro);
//  funções
function retornaMeuNome() {
    //   return minhaIdade;
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'V'));
console.log(multiplicar(4.7, 9));
// tipo função
var calculo;
// calculo = digaOi;
// calculo();
// calculo = {}
calculo = multiplicar;
console.log(calculo(5, 6));
