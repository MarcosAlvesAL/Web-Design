// Dado um array de numeros, mostre num alert a soma de todos eles

// Dificultando o desafio, coloque diferentes tipos de dados dentro do array

// Array mista
const arrayNumeros = [1, 4, [], 6, undefined, 12, 5, false, 'Joana', 8, 3, null, 13, 'teste', 55, true,78];
// Soma é o valor final que eu espero somar
let soma = 0
console.log('Soma Inicia em: ' + soma)

// iniciando no indice zero, enquanto for menor que o tamanho do array, soma mais 1
for (i = 0 ; i < arrayNumeros.length ; i++){
    // nesse if, estou verificando se o tipo do objeto nessa posição da array é tipo number
    
    if (typeof arrayNumeros[i] === 'number'){
        // se for tipo number, a váriavel soma vai ser somada com o valor do objeto do loop atual
        soma += arrayNumeros[i];
        console.log('Próximo objeto: + ' + arrayNumeros[i]);
        console.log('Valor atual= ' + soma)

    } else{ // se não for do tipo number, seguimos o loop
        continue
    }

} 

console.log('Resultado Final: ' + soma);

// mostre numa tela qual é o valor que está no meio ( aproximado )
let teste = arrayNumeros.length / 2
teste = parseInt(teste);
let objMeio = 0;

objMeio = arrayNumeros[teste];

console.log('Esse numero é teste: ' + objMeio);