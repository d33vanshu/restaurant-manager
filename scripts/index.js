const showData = async () => {
  let container = document.getElementById("menu");
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
    );
    let data = await res.json();
    let arr = JSON.parse(localStorage.getItem("cart")) || [];
    let count = arr.length;
    let txt = document.getElementById("count");
    txt.innerHTML = null;
    txt.innerHTML = `Cart count = ${count}`;
    data.meals.map(({ strMeal, strMealThumb }) => {
      let div = document.createElement("div");
      div.classList.add("menu-item");
      let desc = document.createElement("div");
      let txt = document.createElement("div");
      let h4 = document.createElement("h4");
      h4.innerHTML = strMeal;
      let img = document.createElement("img");
      img.classList.add("menu-img");
      img.src = strMealThumb;
      let price = document.createElement("p");
      let value = Math.floor(Math.random() * 500);
      price.innerHTML = `Rs.` + value;
      let button = document.createElement("button");
      button.innerHTML = "Add to Cart";
      button.id = "addtocart";
      let cartprod = {
        name: strMeal,
        price: value,
        img: strMealThumb,
      };
      button.addEventListener("click", () => {
        let arr = JSON.parse(localStorage.getItem("cart")) || [];
        arr.push(cartprod);
        localStorage.setItem("cart", JSON.stringify(arr));
        changeCount();
      });

      txt.append(h4, price);
      desc.append(txt, button);

      div.append(img, desc);
      container.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
};
showData();

const changeCount = () => {
  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  let count = arr.length;
  let txt = document.getElementById("count");
  txt.innerHTML = null;
  txt.innerHTML = `Cart count = ${count}`;
};
