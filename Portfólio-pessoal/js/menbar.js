var menu = document.getElementById('button_menu')

function menuBar(){
    if (menu.classList.contains('menu_open')){
        menu.classList.remove('menu_open');
    }
    else{ (menu.classList.add('menu_open'));
    }
};
