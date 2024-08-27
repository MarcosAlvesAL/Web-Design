const output = document.getElementById("output");


// Base * Largura
function calcularAreaRetangulo(b,l){
    if(typeof b !== "number" || typeof l !== "number"){
        // Erro personalizado
        throw Error("Essa Função calcularAreaRetangulo só aceita parametros do tipo numero");
    }
    return b * l;
};



// Base * Largura / 2
function calcularAreaTriangulo(b,l){
    if(typeof b !== "number" || typeof l !== "number"){
        // Erro personalizado
        throw Error("Essa Função calcularAreaTriangulo só aceita parametros do tipo numero");
    }
    return (b * l)/2;
};


// Pi * Raio²
function calcularAreaCircunferencia(raio){
    if(typeof raio !== "number"){
        // Erro personalizado
        throw Error("Essa Função calcularAreaCircunferencia só aceita parametros do tipo numero");
    }
    return Math.PI * (raio * raio);
};



