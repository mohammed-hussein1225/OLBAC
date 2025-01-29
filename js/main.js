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

document.addEventListener("DOMContentLoaded", function () {
  const paginationContainer = document.getElementById("page-info");
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");

  const productsPerPage = 16;
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

const links = document.querySelectorAll(
  ".products-container .link .category-item a"
);

const inputs = document.querySelectorAll(
  ".products-container .link .category-item input"
);

const currentPage = window.location.pathname.split("/").pop();

links.forEach((link, index) => {
  if (link.getAttribute("href") === currentPage) {
    inputs[index].checked = true;
  } else {
    inputs[index].checked = false;
  }
});
