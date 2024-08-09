// dado o seguinte objeto

const aluno = {
    nome: "Fulano de Tal",
    notas: [9,3,10,8]
};

//mostre na tela as seguintes informações
let listaDeAlunos = document.getElementById("listaDeAlunos");

// nome
listaDeAlunos.innerHTML += `<li> ${aluno.nome} </li>`;
// lista com as notas
listaDeAlunos.innerHTML += `<li> ${aluno.notas} </li>`;

let soma = 0;

for (i = 0 ; i < aluno.notas.length; i++){
    soma += aluno.notas[i];
};

// media
let media = soma / aluno.notas.length;
listaDeAlunos.innerHTML += `<li> ${media} </li>`;


// aprovado/reprovado
let aprovado = (media >= 7) ? "Sim, Aprovado" : "Que pena, Reprovado";
listaDeAlunos.innerHTML += `<li> ${aprovado} </li>`
