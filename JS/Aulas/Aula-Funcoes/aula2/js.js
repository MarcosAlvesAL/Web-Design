const raioInput = document.getElementById("raio_in");
const output = document.getElementById("output");


// Função que vai fazer o calculo da circunferência e retornar o valor para quem a chamar
function calcularAreaCircunferencia(raioV){    
    //raioV é o valor que vai ser passado por parametro
    let areaCircunferencia = Math.PI * (raioV * raioV);       
    return areaCircunferencia;
}// ok


// Recebe o valor via o Input e Mostra na Tela via Alert
function areaInput_Alert() {
    let raioValue = raioInput.value;
    alert(`A Aréa da Circunferência é = ${calcularAreaCircunferencia(raioValue)}`);
}// ok

// Recebe o valor via Prompt e Mostra via Alert
function areaPrompt_Alert(){
    let raioValue = parseFloat(prompt("Digite o Valor do Raio"));
    alert(`A Aréa da Circunferência é = ${calcularAreaCircunferencia(raioValue)}`);
}// ok

// Recebe o valor via Input e Mostra via Output
function areaInput_Output(){
    let raioValue = raioInput.value;
    output.innerHTML = `<div class="teste"> O Valor da Area é ${calcularAreaCircunferencia(raioValue)} </div>`;
} // ok

// Recebe o valor via Prompt e Mostra via Output
function areaPrompt_Output(){
    let raioValue = parseFloat(prompt("Digite o valor do Raio"));
    output.innerHTML = `<div class="teste"> O Valor da Aréa é: ${calcularAreaCircunferencia(raioValue)}</div>`;
}