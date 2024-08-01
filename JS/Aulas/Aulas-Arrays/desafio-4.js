// Dado um array qualquer, mostre em um alert um boolean indicando se encontrou um dos seguintes valores nesse array
// null, undefined ou NaN



const arrayQualquer = [21, NaN,541, undefined, 51,51, null, 61,];


for (i = 0 ; i < arrayQualquer.length ; i++){
    if (typeof arrayQualquer[i] === NaN || arrayQualquer[i] === undefined || arrayQualquer[i] === null ){
        console.log('true-----------------');
        console.log(arrayQualquer[i]);
    } else{
        console.log('false');
        console.log(arrayQualquer[i])
        console.log('-------------------------')
    }
}



// Dado um array de nomes mostre na tela todos os nomes de trás pra frente


const arrayNomes = ['Joaquina', 'Mariana', 'José', 'Felipe', 'Luiz', 'Andreia'];

for (i = arrayNomes.length -1 ; i >= 0 ; i--){
    console.log(arrayNomes[i]);
}