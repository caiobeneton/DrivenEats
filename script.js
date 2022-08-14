let checkP = null;
let checkB = null;
let checkS = null;

function seleciona(item, item2) {

    const Botselecionado = document.querySelector('.pratos .borda')
    if (Botselecionado !== null) {
        Botselecionado.classList.remove('borda')
    }
    const check = document.querySelector('.pratos .mostra')
    if (check !== null) {
        check.classList.remove('mostra')
    }
    
    const cardcheck = document.querySelector(item2)
    cardcheck.classList.add('mostra')

    const card = document.querySelector(item)
    card.classList.add('borda')

    checkP = document.querySelector('.pratos .borda')
    habilitaBotao()
}
function selecionaB(item, item2) {

    const Botselecionado = document.querySelector('.bebidas .borda')
    if (Botselecionado !== null) {
        Botselecionado.classList.remove('borda')
    }

    const check = document.querySelector('.bebidas .mostra')
    if (check !== null) {
        check.classList.remove('mostra')
    }
    
    const cardcheck = document.querySelector(item2)
    cardcheck.classList.add('mostra')

    const card = document.querySelector(item)
    card.classList.add('borda')

    checkB = document.querySelector('.bebidas .borda')
    habilitaBotao()
}
function selecionaS(item, item2) {

    const Botselecionado = document.querySelector('.sobremesas .borda')
    if (Botselecionado !== null) {
        Botselecionado.classList.remove('borda')
    }

    const check = document.querySelector('.sobremesas .mostra')
    if (check !== null) {
        check.classList.remove('mostra')
    }
    
    const cardcheck = document.querySelector(item2)
    cardcheck.classList.add('mostra')

    const card = document.querySelector(item)
    card.classList.add('borda')

    checkS = document.querySelector('.sobremesas .borda')
    habilitaBotao()
}

function habilitaBotao() {
    if (checkP !== null && checkB !== null && checkS !== null) {
        const confirma = document.querySelector('.barra-wrapper')
        confirma.classList.add('ativo')
        const texto = document.querySelector('.barra-texto')
        texto.innerHTML = 'Fechar pedido'
    }
}

function redireciona() {

    const uri = 'Olá, gostaria de fazer o pedido: \n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada \n- Sobremesa: Pudim \nTotal: R$ 27.70' 
    const encoded = encodeURIComponent(uri)

    if (checkP !== null && checkB !== null && checkS !== null) {
        window.location.href = "https://wa.me/?text=" + encoded;
    }
}