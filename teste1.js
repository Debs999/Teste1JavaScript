function roxo() {
   document.querySelector('#exemplo').classList.remove('rosa');
   document.querySelector('#exemplo').classList.remove('vermelho');
   document.querySelector('#exemplo').classList.add('roxo');
}
function rosa() {
   document.querySelector('#exemplo').classList.remove('roxo');
   document.querySelector('#exemplo').classList.remove('vermelho');
   document.querySelector('#exemplo').classList.add('rosa');
}
function vermelho() {
   document.querySelector('#exemplo').classList.remove('roxo');
   document.querySelector('#exemplo').classList.remove('rosa');
   document.querySelector('#exemplo').classList.add('vermelho');
}
function mudar() {
    if(document.querySelector('#teste2').classList.contains('preto')){
        document.querySelector('#teste2').classList.remove('preto');
        document.querySelector('#teste2').classList.add('verde');

    }else {
        document.querySelector('#teste2').classList.remove('verde');
        document.querySelector('#teste2').classList.add('preto');
    }
}