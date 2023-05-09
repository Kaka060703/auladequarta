// Define as variáveis constantes
const inputItem = document.querySelector('#nomeItem');
const listItem = document.querySelector('#lista-compra');
const cartItem = document.querySelector('#carrinho-compra');

function criarSessionStorages(){
    if(!sessionStorage.getItem('listItems')){
        sessionStorage.setItem('listItems', JSON.stringify([]));
    }
    
    if(!sessionStorage.getItem('cartItems')){
        sessionStorage.setItem('cartItems', JSON.stringify([]));
    }

    if(!sessionStorage.getItem('listCount')){
        sessionStorage.setItem('listCount', 0);
    }
}

criarSessionStorages();

document.querySelector('#btnAddItem').addEventListener('click', (e) => {
    e.preventDefault();

    // Valida a entrada
    if(!inputItem.value || inputItem.value == ''){
        alert('Insira o nome do item para adicioná-lo');
        return;
    }

    // Salva a quantidade de itens
    sessionStorage.setItem('listCount', parseInt(sessionStorage.getItem('listCount')) + 1);

    // Salva na session storage
    let listItems = JSON.parse(sessionStorage.getItem('listItems'));
    listItems.push(inputItem.value);

    sessionStorage.setItem('listItems', JSON.stringify(listItems));

    preencherLista(listItem, JSON.parse(sessionStorage.getItem('listItems')), '');

    inputItem.value = '';
});

document.querySelector('#carrinho-compra').addEventListener('drop', (e) => {
    e.preventDefault();

    const item = e.dataTransfer.getData("text");
    let name = document.getElementById(item).lastChild.data;

    // Salva na session storage
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    cartItems.push(name);

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    let listItems = JSON.parse(sessionStorage.getItem('listItems'));

    listItems.forEach((elementName, index) =>{
        if(elementName == name){
            listItems.splice(index, 1);
        }
    })

    sessionStorage.setItem('listItems', JSON.stringify(listItems));

    preencherLista(cartItem, JSON.parse(sessionStorage.getItem('cartItems')), '<p>Arraste o item da lista para dentro do carrinho<p>');
    document.getElementById(item).remove();
});

document.querySelector('#carrinho-compra').addEventListener('dragover', (e) => {
    e.preventDefault();
});


function preencherLista(elementList, items, html){
    elementList.innerHTML = html;

    items.forEach((elementName, index) => {
        // Cria o elemento da lista
        let element = document.createElement('li');

        element.innerText = elementName;
        element.setAttribute('draggable', 'true');

        let itemId = 'item-' + (index + 1)
        
        element.setAttribute('id', itemId);

        // Atribui a função de drag ao item da lista
        element.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData("text", e.target.id);
        });

        elementList.appendChild(element);
    });
}

preencherLista(listItem, JSON.parse(sessionStorage.getItem('listItems')), '');