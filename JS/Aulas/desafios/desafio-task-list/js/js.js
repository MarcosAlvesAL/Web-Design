const lista = document.getElementById("lista");
const value = document.getElementById("text-value")




function adicionarItem(){
    let adicionar = value.value;
    lista.innerHTML += `<li> ${adicionar} </li>`
}