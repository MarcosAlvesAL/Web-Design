// Pedir para o usuario colocar dois numeros de 1 a 10
let n1 = parseInt(prompt('Digite um numero de 1 a 10'));
let n2 = parseInt(prompt('Digite outro numero de 1 a 10'));

// verificar se o usuario colocou um numero igual a 0 ou maior que 10

if ( ( n1 > 10 || n2 > 10 ) || ( n1 == 0 || n2 == 0 ) ){
    alert('DIGITE APENAS NUMEROS DE 1 A 10');
} else { // se tiver tudo ok, calcular a media dos dois numeros
    let media = (n1 + n2) / 2;
    if (media >= 7) { // se a media for maior que 7 avisar aprovado --- se tiver menor está reprovado
        alert('Parabéns, você foi aprovado!!')
    } else{ 
        alert('Que pena, estude mais.')
    }
}











