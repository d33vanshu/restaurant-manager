var timeid;
function placeOrder(e) {
  e.preventDefault();
  alert("Your order is accepted");
  ping("Your order is being cooked", 3000);
  ping("Your order is ready", 8000);
  ping("Order out for delivery", 10000);
  ping("Order delivered", 12000);
  setTimeout(function () {
    window.location.href = "index.html";
  }, 15000);
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart = null;
  localStorage.setItem("cart", cart);
}

function ping(alertMsg, timeDelay) {
  setTimeout(function () {
    alert(alertMsg);
  }, timeDelay);
}
