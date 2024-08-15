// Escreva um progrma para calcular a area de uma circunferencia
//utilizando o Math.PI

// solicitar ao usuario o Raio


// Buscando as Ids e transformando em const
const raio = document.getElementById("raio");
const output = document.getElementById("output");

// Buscando Criar o Hábito de Sempre enviar tudo pro Dom apenas uma vez, para melhorar o desempenho
let apresentacaohtml = ""

function calcularAreaCircunferencia(){
    // raioValue vai ser igual o valor colocado pelo usuario no momento que a função foi chamada
    let raioValue = raio.value;
    // Aréa = PI * Raio²
    let areaCircunferencia = Math.PI * (raioValue * raioValue);
    // Apresentação Recebendo os valores
    apresentacaohtml = `<div class="teste"> O Valor da Area é ${areaCircunferencia} </div>`;
    // Enviando tudo para o Dom        
    output.innerHTML = apresentacaohtml;
}

