// Peça para o usuario digitar um número e mostre a tabuada de 10 desse numero

const input = document.getElementById("numberHtml");

const output = document.getElementById("outputHtml");

let outputVar = "";


function mostrarTabuada(){
    const inputValue = input.value;
    apagarTabuada()

   for(i = 0 ; i <= 10; i++){
    outputVar += `<p> ${inputValue} * ${i} =  ${inputValue * i} </p>`;
   }
   output.innerHTML = outputVar;
}

// agora criar um botão para limpar a tabuada

function apagarTabuada(){
    outputVar = "";
    output.innerHTML = outputVar;
}