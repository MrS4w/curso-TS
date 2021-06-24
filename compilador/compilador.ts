let canal: string = 'Canal 1';
let inscritos: number = 13232;

// canal = inscritos;
console.log(canal);

// let nome = 'Pedro';

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = 'Bom dia!';
  } else {
    saudacao = 'Tenha uma boa vida!';
  }
  return saudacao;
}
