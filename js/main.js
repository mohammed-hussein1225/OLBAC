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
    bigImg.src = this.src;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paginationContainer = document.getElementById("page-info");
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");

  const productsPerPage = 10;
  const productsList = document.querySelectorAll(".product-container");
  const totalPages = Math.ceil(productsList.length / productsPerPage);
  let currentPage = 1;

  function renderPagination() {
    paginationContainer.innerHTML = ""; // تفريغ المحتوى السابق

    let pagesToShow = 7; // عدد الأرقام المرئية
    let pageNumbers = [];

    if (totalPages <= pagesToShow) {
      // إذا كان عدد الصفحات صغيرًا، عرضها كلها
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pageNumbers = [1, 2, 3, 4, 5, "...", totalPages];
      } else if (currentPage >= totalPages - 3) {
        pageNumbers = [
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pageNumbers = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    pageNumbers.forEach((page) => {
      const pageElement = document.createElement("span");
      pageElement.classList.add("page-number");

      if (page === "...") {
        pageElement.classList.add("dots");
        pageElement.innerText = "...";
      } else {
        pageElement.innerText = page;
        pageElement.addEventListener("click", function () {
          currentPage = page;
          updateButtons();
          renderPagination();
          showPage(currentPage);
        });

        if (page === currentPage) {
          pageElement.classList.add("active");
        }
      }

      paginationContainer.appendChild(pageElement);
    });
  }

  function updateButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  function showPage(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    productsList.forEach((product, index) => {
      if (index >= start && index < end) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updateButtons();
      renderPagination();
      showPage(currentPage);
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      updateButtons();
      renderPagination();
      showPage(currentPage);
    }
  });

  // تهيئة الترقيم عند تحميل الصفحة
  renderPagination();
  updateButtons();
  showPage(currentPage);
});
