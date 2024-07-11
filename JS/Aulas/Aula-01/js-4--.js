let n1 = parseFloat(prompt('Digite um numero:'));
let n2 = parseFloat(prompt('Digite outro numero:'));

if (n2 >= n1) {
    alert('O Segundo numero digitado é maior ou igual ao primeiro.');
} else{
    alert('O Segundo numero digitado é menor.');
}


// outro exercicio
let n1 = parseFloat(prompt('Digite um número'));
let n2 = parseFloat(prompt('Digite outro número'));

alert('O a media dos dois numeros é maior que 7? - ' + ((n1 + n2)/2 >= 7));