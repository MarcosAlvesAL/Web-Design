// mostre na tela todos os anos a partir de 1004 atpe 2024, pulando de 4 em 4 anos

/*
let ano = 1004
 while (ano <= 2024) {
    document.write('O ano é: ' + ano + '<br>');
    ano += 4;
}
*/
/*
for ( i= 1004; i <= 2024; i = i + 4 ){
    document.write('O ano é: ' + i + '<br>');
}
    */

/* jogue dois dados infinitas vezes até que a soma dos pontos dos dados seja par por 10 vezes
e quantas vezes esses dados foram jogados */
let dado1 = parseInt((Math.random() * 6) + 1);
let dado2 = parseInt((Math.random() * 6) + 1);

let par = 0
let contador = 0
while (par <= 9) {
    console.log(dado1 = parseInt((Math.random() * 6) + 1));
    console.log(dado2 = parseInt((Math.random() * 6) + 1));
    console.log('-----------');
    contador ++
    if (dado1 == dado2){
        par ++
        console.log('Dados iguais! ' + dado1 + '+' + dado2)
    } else {
        continue
    }
}
console.log('A Quantidade total de dados jogados foram: ' + contador)