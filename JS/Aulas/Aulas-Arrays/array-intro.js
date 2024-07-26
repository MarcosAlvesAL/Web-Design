let nomes = ['Joaquim', 'Seraphina', 'Josephina', 'Larina', 'José', 'Zefa']; // Sintaxe Literal
let nomeInserido = prompt('Digite um nome');

// let nomes2 = new Array('Joaquim', 'Seraphina', 'Josephina', 'Larina'); // Sintaxe Função Construtora
// console.log(nomes2[3]);


// uma forma de acrescentar um nome no final da lista
nomes[nomes.length] = nomeInserido;



for (i = 0 ; i < nomes.length ; i ++){
    document.write(i + ': '+ nomes[i] + '<br>');
    document.write('-----------------------------' + '<br>')

}


document.write('total de itens no array: ' + nomes.length + '<br>')
