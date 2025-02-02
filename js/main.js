const swiperbra = new Swiper(".brand .swiper", {
  loop: true, // جعل السلايدر يعمل بشكل دائري
  autoplay: {
    delay: 3000, // تأخير 3 ثواني بين الشرائح
    disableOnInteraction: false,
  },

  slidesPerView: 4, // عدد الشرائح المرئية في نفس الوقت
  spaceBetween: 20, // المسافة بين الشرائح
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  },
});

const swiper = new Swiper(".slide .swiper", {
  loop: true, // جعل السلايدر يعمل بشكل دائري
  autoplay: {
    // التشغيل التلقائي
    delay: 3000, // تأخير 3 ثواني بين الشرائح
    disableOnInteraction: false,
  },
  navigation: {
    // أزرار التنقل
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    // النقاط السفلية
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1, // عدد الشرائح المرئية في نفس الوقت
  spaceBetween: 5, // المسافة بين الشرائح
});

const swiper2 = new Swiper(".slide2 .swiper", {
  loop: false, // جعل السلايدر يعمل بشكل دائري
  speed: 300, // السرعة الأساسية (تتغير حسب حركة الماوس)
  freeMode: true, // تفعيل وضع الحركة الحرة
  freeModeMomentum: true, // استمرار الحركة حسب سرعة السحب
  freeModeMomentumRatio: 1, // زيادة التأثير عند السحب السريع
  freeModeMomentumBounce: false, // إيقاف الارتداد عند التوقف

  autoplay: {
    // التشغيل التلقائي
    delay: 5000, // تأخير 3 ثواني بين الشرائح
    disableOnInteraction: false,
  },
  // المسافة بين الشرائح
  breakpoints: {
    320: {
      // شاشات الموبايل الصغيرة
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    480: {
      // موبايلات متوسطة الحجم
      slidesPerView: 4.5,
      spaceBetween: 15,
    },
    768: {
      // التابلت
      slidesPerView: 4.5,
      spaceBetween: 15,
    },
    992: {
      // شاشات الكمبيوتر
      slidesPerView: 6,
      spaceBetween: 20, // المسافة بين الشرائح
    },
    1024: {
      //  شاشات الكمبيوتر
      slidesPerView: 8,
      spaceBetween: 20, // المسافة بين الشرائح
    },
  },
});

const swiper3 = new Swiper(".slide3 .swiper", {
  loop: false, // عدم جعل السلايدر يعمل بشكل دائري
  speed: 300, // السرعة الأساسية
  freeMode: true, // وضع الحركة الحرة
  freeModeMomentum: true, // استمرار الحركة حسب سرعة السحب
  freeModeMomentumRatio: 1, // زيادة التأثير عند السحب السريع
  freeModeMomentumBounce: false, // إيقاف الارتداد عند التوقف

  autoplay: {
    delay: 4000, // تأخير 4 ثواني بين الشرائح
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      // الهواتف الصغيرة
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    480: {
      // هواتف متوسطة
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      // هواتف كبيرة
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    768: {
      // التابلت
      slidesPerView: 3.5,
      spaceBetween: 15,
    },
    992: {
      // شاشات الكمبيوتر الصغيرة
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      // شاشات الكمبيوتر الكبيرة
      slidesPerView: 6,
      spaceBetween: 25,
    },
  },
});

const swiper4 = new Swiper(" .products .swiper", {
  loop: false, // عدم جعل السلايدر يعمل بشكل دائري
  speed: 300, // السرعة الأساسية
  freeMode: true, // وضع الحركة الحرة
  freeModeMomentum: true, // استمرار الحركة حسب سرعة السحب
  freeModeMomentumRatio: 1, // زيادة التأثير عند السحب السريع
  freeModeMomentumBounce: false, // إيقاف الارتداد عند التوقف

  autoplay: {
    delay: 4000, // تأخير 4 ثواني بين الشرائح
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      // الهواتف الصغيرة
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    480: {
      // هواتف متوسطة
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    576: {
      // هواتف كبيرة
      slidesPerView: 5.5,
      spaceBetween: 13,
    },
    768: {
      // التابلت
      slidesPerView: 6,
      spaceBetween: 15,
    },
    992: {
      // شاشات الكمبيوتر الصغيرة
      slidesPerView: 7,
      spaceBetween: 22,
    },
    1200: {
      // شاشات الكمبيوتر الكبيرة
      slidesPerView: 8,
      spaceBetween: 23,
    },
  },
});

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

const links = document.querySelectorAll(
  ".products-container .link .category-item a"
);

const inputs = document.querySelectorAll(
  ".products-container .link .category-item input"
);

const currentPage = window.location.pathname.split("/").pop();

inputs.forEach((input, index) => {
  const link = links[index];

  if (link.getAttribute("href") === currentPage) {
    input.checked = true;
  } else {
    input.checked = false;
  }

  // إضافة حدث عند تغيير حالة الـ checkbox
  input.addEventListener("change", function () {
    if (!this.checked) {
      window.location.href = "product.html"; // التوجيه إلى صفحة product.html عند إلغاء التحديد
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function displayProducts() {
    const productList = document.querySelector(
      ".products-container #products-list"
    );
    if (!productList) return;
    const images = [
      "img/pl1.jpg",
      "img/pl2.jpg",
      "img/pl3.jpg",
      "img/pl4.jpg",
      "img/pl5.jpg",
      "img/pl6.jpg",
      "img/pl7.jpg",
      "img/pl8.jpg",
      "img/pl9.jpg",
      "img/pl10.jpg",
      "img/pl11.jpg",
      "img/pl13.jpg",
      "img/pl14.jpg",
      "img/pl15.jpg",
      "img/pl16.jpg",
      "img/pl17.jpg",
      "img/pl18.jpg",
      "img/pl19.jpg",
      "img/pl20.jpg",
      "img/pl21.jpg",
      "img/pl22.jpg",
      "img/pl23.jpg",
      "img/pl24.jpg",
      "img/pl25.jpg",
      "img/pl26.jpg",
      "img/pl27.jpg",
      "img/pl28.jpg",
      "img/pl29.jpg",
      "img/pl30.jpg",
      "img/pl31.jpg",
      "img/pl32.jpg",
      "img/pl33.jpg",
      "img/pl34.jpg",
      "img/pl35.jpg",
      "img/pl36.jpg",
      "img/pl37.jpg",
      "img/pl38.jpg",
      "img/pl39.jpg",
      "img/pl40.jpg",
    ];
    const price = [
      "500",
      "520",
      "2,299",
      "4,830",
      "1,230",
      "950",
      "1,700",
      "1,830",
      "640",
      "9,200",
      "3,499",
      "830",
      "190",
      "1,500",
      "2,600",
      "4,200",
      "430",
      "230",
      "299",
      "380",
      "5,160",
      "5,220",
      "2,650",
      "4,400",
      "10,500",
      "11,000",
      "400",
      "730",
    ];
    const numberOfProducts = Math.ceil(Math.random() * 80) + 32;

    productList.innerHTML = Array.from({ length: numberOfProducts }, () => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      const randomPrice = price[Math.floor(Math.random() * price.length)];

      return `
         <div class="col-6 product-container col-md-4 col-lg-3">
          <div class="card">
            <a href="product.html"> <img src="${randomImage} " /></a>
              <h3>Roller Wall Mounting Manual</h3>
               <div class="card-body">
                    <div class="card-desc">
                      <p class="price">${randomPrice}</p>
                      <p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </p>
                    </div>
                    <div class="icons">
                      <div class="icon">
                        <i class="fa-solid fa-cart-shopping fa-2x d-block"></i>
                      </div>
                      <div class="icon">
                        <i class="fa-solid fa-heart d-block fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      `;
    }).join("");

    const productsList = document.querySelectorAll(".product-container");

    const paginationContainer = document.getElementById("page-info");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");

    const productsPerPage = 32;
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
  }

  displayProducts();
});

document.getElementById("filterSelect").addEventListener("change", function () {
  const selectedValue = this.value; // الحصول على الخيار الذي تم اختياره

  let url = "product.html"; // الرابط الافتراضي

  if (selectedValue === "most_popular") {
    url = "product.html?filter=most_popular";
  } else if (selectedValue === "price_low_to_high ") {
    url = "product.html?filter=price_low_to_high";
  } else if (selectedValue === "price_high_to_low ") {
    url = "product.html?filter=price_high_to_low";
  }

  // تغيير الصفحة إلى الرابط المطلوب
  window.location.href = url;
});

let cartImg = document.querySelector(".cart img");
let price_1 = document.querySelector(".cart .price_1").innerHTML;
let price_2 = document.querySelector(".cart .price_2");

console.log(cartImg);
console.log(price_1);
console.log(price_2);
