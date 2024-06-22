document.addEventListener('DOMContentLoaded', function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Function to add a product to the cart
  function addToCart(productId, productName, productPrice, imageURL) {
    let existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
        image: imageURL
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
  
  // Function to render cart items
  function renderCart() {
    let cartTableBody = document.querySelector('tbody');
    cartTableBody.innerHTML = '';
    cart.forEach(item => {
      let row = document.createElement('tr');
      row.innerHTML = `
        <td><img class="product-image" src="${item.image}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>
          <div class="quantity-input">
            <button class="quantity-btn" onclick="changeQuantity('${item.id}', 'subtract')">-</button>
            <input type="number" min="1" value="${item.quantity}" readonly>
            <button class="quantity-btn" onclick="changeQuantity('${item.id}', 'add')">+</button>
          </div>
        </td>
        <td><span>&#8377;</span> <div class="product-price">${item.price * item.quantity}</div></td>
      `;
      cartTableBody.appendChild(row);
    });
    updateTotalAmount();
  }

  // Function to change quantity
  window.changeQuantity = function(itemId, action) {
    let item = cart.find(i => i.id === itemId);
    if (item) {
      if (action === 'add') {
        item.quantity += 1;
      } else if (action === 'subtract' && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
  };

  // Function to update total amount
  function updateTotalAmount() {
    let totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('Amount').textContent = totalAmount;
  }

  renderCart();
});
