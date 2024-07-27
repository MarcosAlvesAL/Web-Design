// Criar um array contendo todos os dias da semana

let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];


// mostre em um alert qual é o dia da semana atual


let hoje = 'Sexta';


for (i = 0 ; i < diasDaSemana.length ; i++){
    if (hoje === diasDaSemana[i]){
        alert('O Dia da Semana na Variável Hoje: ' + hoje + ' ---- Variavel DiadaSemana: ' + diasDaSemana[i])
        break
    } else {
        console.log('alguma coisa')
    }
}

