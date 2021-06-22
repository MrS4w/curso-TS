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
// objetos
var usuario = {
    nome: 'João',
    idade: 27,
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 21
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
var funcionario = {
    supervisores: ['Ana', 'José'],
    baterPonto: function (horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário!';
    },
};
var funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto: function (horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário!';
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// funcionario = {};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '9';
console.log("Minha nota \u00E9 " + nota + "!");
// nota = true
// Checando tipos
var valor = 30;
if (typeof valor === 'number') {
    console.log('É um number!');
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    },
};
produto.validarProduto();
var altura = 12;
// altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'fulano',
    tel1: '91212121',
    tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null; // any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432'],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
