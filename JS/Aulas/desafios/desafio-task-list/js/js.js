const lista = document.getElementById("ul-window");
const value = document.getElementById("text-value")




function adicionarTarefa(){
    let adicionar = value.value;
    lista.innerHTML += `<li>
                            <section>
                                <p>${adicionar}</p>                                           
                            </section>
                            <div>
                                <p onclick="removerTarefa()">-</p>
                            </div>
                        </li>`
             
}
function removerTarefa(){
    lista.innerHTML = 
}       