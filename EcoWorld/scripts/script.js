//criando uma variavel e pegando da tag do html, convenção '$' <-- atributos do HTMl
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];

//evento scrool
window.addEventListener('scroll', toggleNabBar, false);

function toggleNabBar() {

    //Eixo 'Y' VERTICAL
    //Para otimização do código, 2 parametros de comparação
    // maior que o heigth do atributo 'logo', sem precisar alterar o código $logo.offSetHeight
    if (window.pageYOffset > $logo.offsetHeight && $navBar.classList.contains('abs-pos')) {
        $navBar.classList.remove('abs-pos');
        $navBar.classList.add('fix-pos');
    } else if (window.pageYOffset < $logo.offsetHeight && $navBar.classList.contains('fix-pos')) {
        $navBar.classList.remove('fix-pos');
        $navBar.classList.add('abs-pos');
    }

}

//const $extLink = document.querySelectorAll('.ext-link')[0];
//$extLink.addEventListener('click', openLink, false);

//function openLink() {
//    window.open('https://www.blogger.com', '_blank')
//}


const $intLinks = document.querySelectorAll('.int-link a');

//parecido com laço for, so que não precisa de parametros, roda conforme a quantidade do array
$intLinks.forEach(function(cur) {
    //funcao anonima, para animacao
    cur.addEventListener('click', function(evt) {
        //anular o evento padrao do html, JS passa a dominar
        evt.preventDefault();
        window.scrollTo({
            top: document.querySelector(cur.getAttribute('href')).offsetTop - $navBar.offsetHeight,
            left: 0,
            behavior: 'smooth'
        });
    }, false)
})