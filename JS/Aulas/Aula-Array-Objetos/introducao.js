/* const listaDeTarefas = document.getElementById('listaDeTarefas');

listaDeTarefas.innerHTML += "<li>teste7</>"
listaDeTarefas.innerHTML += "<li>teste8</>"
*/


// Dado um Array contendo 5 objetos onde cada objeto possui duas propiedades  "nome e email"

const lista = [
    {nome: "Joaquim", email: "joaquimdasilva@gmail.com"},
    {nome: "Manoela", email: "manoeladasilva@gmail.com"},
    {nome: "Josefina", email: "josefinadasilva@gmail.com"},
    {nome: "Leonardo", email: "leonardosilva@gmail.com"},
    {nome: "Silva", email: "silvadasilva@gmail.com"}
]
let listaDePessoas = document.getElementById("listaDePessoas");


// mostrar em uma lista cada um desses nomes com seus respectivos emails

// usando o for in

for (let prop in lista){
    listaDePessoas.innerHTML += '<li>'+ lista[prop].nome + ' -- ' + lista[prop].email + '</li>';
}


// usando o loop for normal

for (i = 0 ; i < lista.length; i++){
    listaDePessoas.innerHTML += "<li>" + lista[i].nome + " -- " + lista[i].email + "</li>";
}
