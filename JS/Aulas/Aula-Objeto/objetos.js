const carro = {
    modelo: "Uno",
    ano: 2023,
    km: 10000,
    combustivel: "gasolina",
    litrosConsumidos: 625
};
// mostre na tela a seguinte mensagem: O Carro uno 2023 fez em media xxx km/l de gasolina

let calcularMediaConsumo = carro.km / carro.litrosConsumidos;


// console.log(`O Carro ${carro.modelo} fez em média ${calcularMediaConsumo} km/L de ${carro.combustivel}`);

carro.marca = "Fiat";

// console.log(`O Carro ${carro.marca} ${carro.modelo} fez em média ${calcularMediaConsumo} km/L de ${carro.combustivel}`);


//mostre na tela onde João Mora

const endereco = {
    rua: "Rua das Tulias",
    numero: 302
};

const pessoa = {
    nome: "João",
    sobrenome: "Fagundes",
    endereco
};

// console.log(`O Endereço do ${pessoa.nome} é ${pessoa.endereco.rua} Número ${pessoa.endereco.numero}`);

// loop for in serve para interagir com um objeto