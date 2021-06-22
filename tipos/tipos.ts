//  string
let nome: string = 'Victor';
console.log(nome);
// nome = 22;

// number
let idade: number = 21;
// idade = 'Victor'
idade = 21.9;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 21;
console.log(typeof minhaIdade);
// minhaIdade = '21';

// array
let hobbies: any[] = ['tocar', 'treinar'];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);

// tuplas
let endereco: [string, number] = ['Av Principal', 99];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2021 };
console.log(carro);

//  funções
function retornaMeuNome(): string {
  //   return minhaIdade;
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log('Oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

// console.log(multiplicar(2, 'V'));
console.log(multiplicar(4.7, 9));

// tipo função
let calculo: (numA: number, numB: number) => number;
// calculo = digaOi;
// calculo();
// calculo = {}

calculo = multiplicar;
console.log(calculo(5, 6));

// objetos
let usuario: { nome: string; idade: number } = {
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

//  Desafio
/* 
    Criar um objeto funcionário com:
        - Array de string com os nomes dos supervisore
        - Função de bater ponto que recebe a hora (number)
            e retorna uma string:
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
// Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ['Ana', 'José'],
  baterPonto(horario: number): string {
    return horario <= 8 ? 'Ponto normal' : 'Fora do horário!';
  },
};

let funcionario2: Funcionario = {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    return horario <= 8 ? 'Ponto normal' : 'Fora do horário!';
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// funcionario = {};

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = '9';
console.log(`Minha nota é ${nota}!`);
// nota = true

// Checando tipos
let valor = 30;

if (typeof valor === 'number') {
  console.log('É um number!');
} else {
  console.log(typeof valor);
}
