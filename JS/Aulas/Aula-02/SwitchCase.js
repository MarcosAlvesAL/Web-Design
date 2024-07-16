function digiteNumero(){
    // oedir para o usuario digitar um numero de 0 a 6
let numeroSolicitado = parseInt( prompt('Digite um número de 1 a 6') );
// se for diferente de 0 e 6, aparecer o erro na tela
if ( numeroSolicitado > 6 || numeroSolicitado < 0 ) {
    alert('Digite apenas numeros entre 0 e 6');
} else if ( isNaN(numeroSolicitado) == true ){
    alert('Digite apenas os números válidos');
} else {
    switch(numeroSolicitado){
        case 1:
            alert('Domingo!');
            break;
        case 2:
            alert('Segunda!');
            break;
        case 3:
            alert('Terça!');
            break;
        case 4:
            alert('Quarta!');
            break;
        case 5:
            alert('Quinta!');
            break;
        case 6:
            alert('Sexta!');
            break;
        case 7:
            alert('Sabado!');
            break;
    }
}
}