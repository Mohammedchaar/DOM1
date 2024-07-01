
const items = document.querySelectorAll('.cart-item');
let totalPrice = 10; // Initial total price

function adjustQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    quantity += change;
    if (quantity >= 0) {
        quantitySpan.textContent = quantity;
        updateTotalPrice();
    }
}

function deleteItem(button) {
    const item = button.parentElement;
    const price = parseFloat(item.querySelector('.price').textContent.slice(1));
    totalPrice -= price;
    item.remove();
    updateTotalPrice();
}

function toggleLike(button) {
    button.classList.toggle('liked');
}

function updateTotalPrice() {
    const prices = Array.from(document.querySelectorAll('.price')).map(priceSpan => parseFloat(priceSpan.textContent.slice(1)));
    totalPrice = prices.reduce((sum, price) => sum + price, 0);
    document.getElementById('total').textContent = `$${totalPrice.toFixed(2)}`;
}
