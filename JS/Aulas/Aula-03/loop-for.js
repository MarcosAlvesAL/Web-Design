//tabuada até o 1000

// pedir para o usuario digitar um número
 /* let numero = 1
// verificar se realmente é um número
//if (isNaN(numero) == true){
    alert('Digite apenas números');
} else {
    for (i=0; i<1000; i++){
        document.write('&nbsp &nbsp &nbsp &nbsp' + numero + ' x ' + i + ' = ' + numero * i + '<br>');
    }
    document.write('fim do programa');
}
*/



// pedir para o usuario digitar um numero
let numeroSolicitado = parseInt(prompt('Digite um número'));

// somar e mostrar todos os numeros pares até o numero que o usuario digitou

for (i=0; i <= numeroSolicitado; i = i + 2) {
    console.log( i + '<br>' )
}