/* Como calcular os anos bissextos?
Para podermos entender melhor, vamos realizar o cálculo do ano bissexto para verificar quais dos anos descritos abaixo encaixam-se nessa categoria. Antes disso, precisamos saber quais são os critérios que o definem, ou seja:

Para ser bissexto, o ano deve ser:
*/
ano = 0

while(ano <= 1000){
    // Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;
    // Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.
    if ( ( ano % 100 === 0 ) & ( (ano % 400) != 0 ) ){
        ano += 4
        continue
    } else{
        console.log('Ano Atual: ' + ano)
        ano += 4
    
    }
    
}
console.log('fim do programa')