const showCartItems = () => {
  let items = document.getElementById("cart");
  let arr = JSON.parse(localStorage.getItem("cart"));
  arr.map((item) => {
    let div = document.createElement("div");
    div.classList.add("cart-item");
    let content = document.createElement("div");
    let txt = document.createElement("div");
    let img = document.createElement("img");
    img.classList.add("cart-img");
    img.src = item.img;
    let name = document.createElement("h4");
    name.innerHTML = item.name;
    let price = document.createElement("p");
    let value = item.price;
    price.innerHTML = `Rs.` + value;
    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.id = "remove-btn";
    let index = arr.indexOf(item);
    remove.addEventListener("click", () => {
      let arr = JSON.parse(localStorage.getItem("cart"));
      arr.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(arr));
      location.reload();
    });
    txt.append(name, price);
    content.append(txt, remove);
    div.append(img, content);
    items.appendChild(div);
  });
};
showCartItems();

const cartTotal = () => {
  let div = document.getElementById("total");
  let arr = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  arr.map((item) => {
    total += parseInt(item.price);
  });
  let tot = document.createElement("div");
  tot.innerHTML = null;
  tot.innerHTML = `Total = Rs.${total}`;
  button = document.createElement("button");
  button.innerHTML = "Checkout";
  button.classList.add("checkout");
  button.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
  div.append(tot, button);
};
cartTotal();
