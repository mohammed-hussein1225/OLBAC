let allBtn = document.querySelectorAll(".products .btn-group .btn");
let allProducts = document.querySelectorAll(".products .row .col-md-12 .row");

allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // إزالة كلاس active من جميع الأزرار
    allBtn.forEach((button) => button.classList.remove("active"));
    // إضافة كلاس active للزرار الذي تم الضغط عليه
    btn.classList.add("active");

    // إخفاء جميع المنتجات
    allProducts.forEach((product) => product.classList.add("d-none"));
    // إظهار المنتجات المرتبط بالزرار
    let targetproduct = document.querySelector(btn.dataset.target);
    targetproduct.classList.remove("d-none");
  });
});

var smallImg = document.querySelectorAll(".swiper-slide img");
var bigImg = document.querySelector(".box-img img");

smallImg.forEach(function (img) {
  img.addEventListener("click", function (event) {
    event.preventDefault();
    bigImg.src = this.src;
  });
});
