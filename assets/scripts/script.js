let buttonAdd = document.getElementById('add')
let buttonBuy = document.getElementById('buy')
let form = document.getElementById('form')
let box = document.getElementById('box')

let i = 1

buttonAdd.addEventListener('click', function() {
    i++
    createLabel()
    createInput()
})

function createLabel() {
    let element = document.createElement('label')
    element.setAttribute('for', 'product' + i.toString())
    element.textContent = 'Produto: '
    box.appendChild(element)
}

function createInput() {
    let element = document.createElement('input')
    element.setAttribute('type', 'text')
    element.setAttribute('name', 'product' + i.toString())
    element.setAttribute('id', 'product' + i.toString())
    element.setAttribute('autocomplete', 'off')
    box.appendChild(element)
}

buttonBuy.addEventListener('click', function() {
    form.submit()
})