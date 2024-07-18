//tabuada até o 1000

// pedir para o usuario digitar um número
 let numero = 1
//verificar se realmente é um número
if (isNaN(numero) == true){
    alert('Digite apenas números');
} else {
    for (i=1; i<1000; i++){
        document.write('&nbsp &nbsp &nbsp &nbsp' + numero + ' x ' + i + ' = ' + numero * i + '<br>');
        if (i % 10 === 0){
            document.write('<hr>')
        }      
    } 
    document.write('fim do programa');
}
