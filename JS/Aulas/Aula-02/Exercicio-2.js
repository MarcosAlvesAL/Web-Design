function teste(){
// Crie uma váriavel e atribua á ela qualquer valor
let variavelQualquer = 6 ;
// utilizando a condicional switch, mostre no console ou alert o tipo da váriavel
switch(typeof variavelQualquer) {
    case 'number':
        alert('Número')
        break;
    case 'string':
        alert('texto')
        break;
    default: // tenha uma carta na manga para mostrar uma mensagem padrão caso voce desconheça o tipo da váriavel
        alert('Tipo não identificado')

}
}

