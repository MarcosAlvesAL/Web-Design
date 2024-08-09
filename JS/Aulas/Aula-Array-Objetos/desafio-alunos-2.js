// Dado um Array de alunos

const alunos = [
    {nome: "Fulano de Tal", notas: [1,3,3,8]},
    {nome: "Fulano de Fulano", notas: [10,6,6,8]}
];
// Essa const seleciona o Id do html que quero modificar
const listaAlunos = document.getElementById("listaDeAlunos");
// Essa variavel tem apenas a função de receber os dados
let alunosHTML = "";
// esse loop vai fazer uma varredura, calcular a media e fazer a formatação dos dados no html
for (i = 0 ; i < alunos.length ; i++){
    let soma = 0 ;     
    // Esse segundo loop tem a função de somar as notas
    for (j = 0 ; j < alunos[i].notas.length ; j++){
        soma += alunos[i].notas[j];                 
    }
    // calculo da media
    let media = soma / alunos[i].notas.length;
    // inserção da nova propiedade media dentro do objeto na array alunos 
    alunos[i].media = media;   
    // formatação do html para mostrar os dados sobre o aluno, as notas e a media
    alunosHTML += `<li> ${alunos[i].nome}
                        <ul>
                            <li> ${alunos[i].notas} </li>
                            <li> ${alunos[i].media} </li>
                        </ul>
                    </li>`
                
};
// Enviando pro Dom os dados de uma unica vez
listaAlunos.innerHTML = alunosHTML

