// Dado um array contendo 3 objetos, cada um representando um produto
// Cada objeto tera 3 propiedades -nome -preço -quantidade
const estoque = [
    {nome: "Sabão em Pó", preco: "R$3,00", quantidade: 345},
    {nome: "Detergente", preco: "R$2,00", quantidade: 53},
    {nome: "Desinfetante", preco: "R$4,00", quantidade: 50}
]

let listaDeProdutos = document.getElementById("listaDeProdutos");

// mostrar em uma tag table essas 3 propiedades

for( i = 0 ; i < estoque.length ; i++ ){

  listaDeProdutos.innerHTML += //Tr Define uma linha - Td Define uma celula
    `<tr>
        <td> ${estoque[i].nome} </td> <td> ${estoque[i].preco} </td> <td> ${estoque[i].quantidade} </td>       
    </tr>`;

}

