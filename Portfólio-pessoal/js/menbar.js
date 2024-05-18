// Função Esconde/mostra nav
var menu = document.getElementById('button_menu')

function menuBar(){
    if (menu.classList.contains('menu_open')){
        menu.classList.remove('menu_open');
    }
    else{ (menu.classList.add('menu_open'));
    }
};



//Função retorna ao topo

var mybutton = document.getElementById("topBtn");

// Mostra o botão quando o usuário rolar para baixo 20px
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Quando o usuário clicar no botão, rola a página para o topo
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}