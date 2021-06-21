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
