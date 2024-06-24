document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.js-cd-add-to-cart');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const button = event.currentTarget; // Use event.currentTarget to get the button itself
        const itemID = button.getAttribute('data-item-id');
        const itemName = button.getAttribute('data-item-name');
        const itemPrice = parseFloat(button.getAttribute('data-item-price')); // Parse price as float
        const itemImage = button.getAttribute('data-item-image');

        const cartItem = {
          id: itemID,
          name: itemName,
          price: itemPrice,
          image: itemImage,
          quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === cartItem.id);

        if (existingItemIndex >= 0) {
          cart[existingItemIndex].quantity += 1;
        } else {
          cart.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'Cart/Cart.html';
      });
    });
  });