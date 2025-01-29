function displayProducts() {
  const productList = document.querySelector(
    ".products-container #products-list"
  );
  if (!productList) return;
  productList.innerHTML = `
              <div class="col-6 product-container col-md-4 col-lg-3">
                  <div class="card-product">
                    <div class="product-title">
                      <a href="#">
                        <img src="img/pl1.jpg" alt="Product 1" />
                      </a>
                      <h3>3-Roller Wall Mounting Manual</h3>
                    </div>
                    <div class="product-desc">
                      <div class="rating">
                        <p class="price">2,100 EGP</p>
                        <p>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  `.repeat(40);
}
window.onload = displayProducts;
