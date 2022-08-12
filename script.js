function seleciona(item) {

    const Botselecionado = document.querySelector('.pratos .borda')
    if (Botselecionado !== null) {
        Botselecionado.classList.remove('borda')
    }

    const card = document.querySelector(item)
    card.classList.add('borda')
}
function selecionaB(item) {

    const Botselecionado = document.querySelector('.bebidas .borda')
    if (Botselecionado !== null) {
        Botselecionado.classList.remove('borda')
    }

    const card = document.querySelector(item)
    card.classList.add('borda')
}
function selecionaS(item) {

    const Botselecionado = document.querySelector('.sobremesas .borda')
    if (Botselecionado !== null) {
        Botselecionado.classList.remove('borda')
    }

    const card = document.querySelector(item)
    card.classList.add('borda')
}