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
}