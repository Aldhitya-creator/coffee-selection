document.addEventListener('DOMContentLoaded', () => {
    let total = 0;

    const hiddens = document.querySelectorAll('[value]');
    const totalAmountEl = document.getElementById('totalAmount');

    hiddens.forEach(hidden => {
        const amount = parseFloat(hidden.getAttribute('data-amount'));
        const quantity = parseInt(hidden.getAttribute('quantity'));
        total += amount * quantity;
    });

    totalAmountEl.textContent = total.toFixed(2);
});