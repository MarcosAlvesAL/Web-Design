// mostre na tela os numeros de 0 a 100 ignorando os mutiplos de  10
let n1 = 0
n1 = parseInt(n1)
let n2= 0
while (n1 <= 100){
    if (n1 % 10 === 0){
        n1++
        continue
    } else{
        console.log('-------------INICIO-----------------')
        console.log('Número de Contagem Principal: ' + n1);
// porém a cada interação sorteio um núnero de 1 a 100.   
        n2 = parseInt( (Math.random() * 100) + 1 );
        console.log('Número Sorteado nessa rodada foi: ' + n2)
        console.log('**************FIM****************')
        console.log(' ')
        n1++
    }    
//se o numero de 1 a 100 mostrado for divisivel pelo numero numero sorteado, interrompa o loop
    if ( n1 % n2 === 0 ){
        console.log('-------------INICIO-----------------')
        console.log('Número de Contagem Principal: ' + n1);
        console.log('Número Sorteado nessa rodada foi: ' + n2)
        console.log('**************FIM****************')
        console.log(' ')
        break;
    }
}
console.log('O numero principal foi: ' + n1 + ' - E o numero sorteado foi: ' + n2 + ' - sendo assim o modulo da divisão dos dois resulta em: ' + ( n1 % n2 )); 



