const API_URL_ROOT = 'https://dummyjson.com/'

function renderProducts(products) {
  const container = document.getElementById("product_list");
  container.innerHTML = "";
  products?.forEach(p => {
    const productHTML = `<div class="col">
              <div class="card shadow-sm">
                <img src="${p.thumbnail}" alt="hinh anh san pham" />
                <div class="card-body">
                  <h3 class="card-title">${p.title}</h3>
                  <div class="card-text">
                    <strong class="text-danger">$${p.price}</strong>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button type="button" data-id="${p.id}" class="btn btn-sm btn-primary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `;
    container.innerHTML += productHTML;
  });
}

function loadProductsFromAPI() {
  fetch(API_URL_ROOT + "products", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      renderProducts(data.products);
    })
    .catch((err) => console.error("Lol API:", err));
}

document.addEventListener('DOMContentLoaded', function () {
  loadProductsFromAPI();
});