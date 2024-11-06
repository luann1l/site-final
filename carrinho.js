let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('carrinho-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price},00`;
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: R$ ${total},00`;
}

document.getElementById('search-button').addEventListener('click', function() {
    const input = document.getElementById('search-input').value;
    const resultadoDiv = document.getElementById('resultado');

    if (input) {
        resultadoDiv.textContent = `Você pesquisou: "${input}"`;
    } else {
        resultadoDiv.textContent = 'Por favor, digite algo para pesquisar.';
    }
});