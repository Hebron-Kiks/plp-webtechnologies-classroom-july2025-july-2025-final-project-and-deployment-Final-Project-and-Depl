// Mobile Nav Toggle
document.querySelector(".menu-toggle")?.addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});

// Checkout form
document.getElementById("checkout-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Order placed successfully! 🎉");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});
