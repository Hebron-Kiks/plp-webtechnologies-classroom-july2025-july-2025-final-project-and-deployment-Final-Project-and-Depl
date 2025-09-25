let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

function displayCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotalP = document.getElementById("cart-total");

  if (!cartItemsDiv || !cartTotalP) return;

  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
      <p>
        ${item.product} - $${item.price.toFixed(2)}
        <button onclick="removeItem(${index})">Remove</button>
      </p>
    `;
  });

  cartTotalP.textContent = "Total: $" + total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

document.addEventListener("DOMContentLoaded", displayCart);
