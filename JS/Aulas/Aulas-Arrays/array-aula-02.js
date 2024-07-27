// Conjunto de Numeros
let numeros = [1, 5, 6 , 7, 13, 65, 644, 71, 88]; 

// preciso colocar os numeros da primeira array, na segunda e mutiplicado por 2
let numeros2 = [];

// Vai começar do zero para buscar o primeiro objeto e vai aumentando de 1 em 1 até alcançar o limite do tamanho do array
for (i = 0 ; i < numeros.length ; i++){
    // variavel numeromult servirá apenas para mutiplicar o primeiro array por 2
    let numerosmult = numeros[i] * 2;    
    console.log(numeros[i]);
    // abaixo a demonstração dos mutiplicados
    console.log('Mutiplicação por 2 =  ' + numerosmult);
    console.log('----------------------------')
    // usando o metodo push, vou acrescentando cada objeto mutiplicado no array2
    numeros2.push(numerosmult)
}
// Saida final de console para verificação
console.log('fim do programa');
console.log(numeros)
console.log(numeros2)

