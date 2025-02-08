// Элементы DOM
const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
let total = 0;

fetch("https://fakestoreapi.com/products?limit=10")
  .then((res) => res.json())
  .then((data) => {
    displayProducts(data);
  });

// Функция для отображения продуктов
function displayProducts(products) {
  productContainer.innerHTML = ""; // Очищаем контейнер
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description.slice(0, 50)}...</p>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.title}', ${
      product.price
    })">Sotib olish</button>
        `;
    productContainer.appendChild(card);
  });
}

function addToCart(id, title, price) {
  let surash = document.createElement("li");
  surash.textContent = `${title} - $${price}`;
  cartItems.appendChild(surash);

  total += price;
  totalPrice.textContent = `Итого: $${Math.floor(total * 100) / 100}`;
}
