// Escreva um progrma para calcular a area de uma circunferencia
//utilizando o Math.PI

// solicitar ao usuario o Raio

// Buscando as Ids e transformando em const
const raio = document.getElementById("raio");
const output = document.getElementById("output");

let apresentacaohtml = ""


// Essa Função serve apenas para receber os dados, calcular e mostrar na tela
function calcularAreaCircunferencia(raioV){    
    //raioV é o valor que vai ser passado por parametro
    let areaCircunferencia = Math.PI * (raioV * raioV);
    
    apresentacaohtml = `<div class="teste"> O Valor da Area é ${areaCircunferencia} </div>`;
    
    output.innerHTML = apresentacaohtml;
}

function calcularAreaPrompt(){
    // recebimento do valor do raio pelo prompt
    let raioValue = parseFloat(prompt("Digite o Valor do Raio"));
    // passando para a função o valor do raio
    calcularAreaCircunferencia(raioValue)       
}
function calcularAreaInput(){
    // recebimento do valor do raio via input
    let raioValue = raio.value;
    // passando para a função o valor do raio
    calcularAreaCircunferencia(raioValue)    
}

