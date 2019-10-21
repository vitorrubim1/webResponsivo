//criando uma variável e pegando as tag do HTML
const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];

//para criar funções/evento 1ºEVENTO, 2ºNOME DA FUNÇÃO
window.addEventListener('scroll', toggleHeader, false);
//se a pág for scrolada muda a cor do header
function toggleHeader() {
    //dois parametros para otimização do site
	//Eixo 'Y' VERTICAL
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');

        //aumentando e diminuindo a logo
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');

        //mudando a cor das LI's
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');

        //hamburguer, mudando a cor
        $menu.firstElementChild.classList.remove('max-hamburger');
        $menu.firstElementChild.classList.add('min-hamburger');

    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.add('max-header');
        $header.classList.remove('min-header');

        //aumentando e diminuindo a logo
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');

        //mudando a cor das LI's
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');

        //hamburguer, mudando a cor
        $menu.firstElementChild.classList.add('max-hamburger');
        $menu.firstElementChild.classList.remove('min-hamburger');
    }
}


//caso o menu esteja aberto, essa função fechará e vice-versa
$menu.addEventListener('click', toggleMenu, false);
var isOpen = false;
function toggleMenu(){
    if(!isOpen){
        $navBar.classList.add('menu-opened');
        //Acionando o close btn, transformando o hamburger em 'X'
        $menu.firstElementChild.classList.add('close-btn');
        
        isOpen = true;
    }else {
        $navBar.classList.remove('menu-opened');
        //Acionando o close btn, transformando o hamburger em 'X'
        $menu.firstElementChild.classList.remove('close-btn');
        isOpen = false;
    }
    
}

//evento
//target retorna a tag especifica do click, e tagName o nome
//se for clicado no link a, fecha o nav e redireciona
$navBar.addEventListener('click', navClick, false);
function navClick(evt){
    if(evt.target.tagName == 'A'){
        toggleMenu()
    }
}










//pageYOffset informa quantos pixels a página foi scrolada