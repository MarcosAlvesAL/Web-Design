// Escrever um programa para calcular a área de um triangulo
const base = document.getElementById("base");
const altura = document.getElementById("altura");
const output = document.getElementById("output");

let apresentacaohtml = "";

// base * altura / 2 = area do triangulo

function calcularAreaTriangulo(){
    let baseValue = base.value;
    let alturaValue = altura.value;
    let areaDoTriangulo = (baseValue * alturaValue) / 2;

    apresentacaohtml = `<div class="teste"> A aréa do Triangulo é ${areaDoTriangulo} </div>`;
    output.innerHTML = apresentacaohtml;
}