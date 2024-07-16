//tabuada até o 1000

// pedir para o usuario digitar um número
let numero = 1
// verificar se realmente é um número
if (isNaN(numero) == true){
    alert('Digite apenas números');
} else {
    // criar contador
    let contador = 0
    // usar a função while
    while(contador <= 1000){
    document.write('&nbsp &nbsp &nbsp &nbsp' + numero + ' x ' + contador + ' = ' + numero * contador + '<br>');
    contador++
    }
document.write('fim do programa');
}
