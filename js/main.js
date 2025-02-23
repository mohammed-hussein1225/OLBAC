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
console.log(currentPage);

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
  const product_card = document.querySelectorAll(".products #card-box-home");
  if (!product_card) return;
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
    "2299",
    "4830",
    "1230",
    "950",
    "1700",
    "1830",
    "640",
    "9200",
    "3499",
    "830",
    "190",
    "1500",
    "2600",
    "4200",
    "430",
    "230",
    "299",
    "380",
    "5160",
    "5220",
    "2650",
    "4400",
    "10500",
    "11000",
    "400",
    "730",
  ];

  product_card.forEach((product) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomprice = price[Math.floor(Math.random() * price.length)];
    product.innerHTML = `
      <div class="card">
            <a href="product.html"> <img src="${randomImage} " /></a>
              <h3>Roller Wall Mounting Manual</h3>
               <div class="card-body">
                    <div class="card-desc">
                      <p class="price">${randomprice}</p>
                      <p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </p>
                    </div>
                    <div class="icons" data-price=${randomprice} data-image=${randomImage}>
                      <div class="icon  icon-cart">
                        <i class="fa-solid fa-cart-shopping fa-2x d-block"></i>
                      </div>
                      <div class="icon">
                        <i class="fa-regular fa-heart d-block fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
    `;
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
      "2299",
      "4830",
      "1230",
      "950",
      "1700",
      "1830",
      "640",
      "9200",
      "3499",
      "830",
      "190",
      "1500",
      "2600",
      "4200",
      "430",
      "230",
      "299",
      "380",
      "5160",
      "5220",
      "2650",
      "4400",
      "10500",
      "11000",
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
                    <div class="icons" data-price=${randomPrice} data-image=${randomImage}>
                      <div class="icon  icon-cart">
                        <i class="fa-solid fa-cart-shopping fa-2x d-block"></i>
                      </div>
                      <div class="icon icon-cart">
                        <i class="fa-regular fa-heart d-block fa-2x"></i>
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

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("filterSelect")) return;
  document
    .getElementById("filterSelect")
    .addEventListener("change", function () {
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
});

function setupQuantityInputs() {
  document.querySelectorAll(".quantity").forEach((input) => {
    input.addEventListener("input", function () {
      let savedCart = JSON.parse(localStorage.getItem("cartContent")) || [];
      const index = parseInt(this.dataset.index);
      let newQuantity = parseInt(this.value);

      // تحديث القيم داخل localStorage
      savedCart[index].quantity = newQuantity;
      savedCart[index].totalPrice = newQuantity * savedCart[index].price;

      localStorage.setItem("cartContent", JSON.stringify(savedCart));

      // تحديث السعر بدون إعادة تحميل الصفحة
      document
        .querySelectorAll(".cart")
        [index].querySelector(".sup-total").textContent =
        savedCart[index].totalPrice.toFixed(2);

      // تحديث السعر الإجمالي
      updateTotalPrice();
    });
  });
}

function updateTotalPrice() {
  let total_price = 0;
  const savedCart = JSON.parse(localStorage.getItem("cartContent")) || [];

  savedCart.forEach((item) => {
    total_price += item.totalPrice;
  });

  const totalPriceContainer = document.querySelector(".total .total_price");
  if (totalPriceContainer) {
    totalPriceContainer.innerHTML = total_price.toFixed(2);
  }
}

// تشغيل تحديث الكمية فور تحميل الصفحة
setupQuantityInputs();

document.addEventListener("DOMContentLoaded", function () {
  function cart() {
    const icons = document.querySelectorAll(".icons .icon");
    if (icons.length === 0) return; // تأكد من وجود عناصر

    icons.forEach((icon) => {
      icon.addEventListener("click", function () {
        const parentIcons = this.closest(".icons");
        if (!parentIcons) return;

        const imageValue = parentIcons.dataset.image;
        const priceValue = parseFloat(parentIcons.dataset.price);

        // استرجاع المنتجات المخزنة
        let savedCart = JSON.parse(localStorage.getItem("cartContent")) || [];

        // تحقق مما إذا كان المنتج مضافًا مسبقًا، وإذا كان كذلك زِد الكمية
        let existingProduct = savedCart.find(
          (item) => item.image === imageValue
        );
        if (existingProduct) {
          existingProduct.quantity += 1;
          existingProduct.totalPrice =
            existingProduct.quantity * existingProduct.price;
        } else {
          savedCart.push({
            image: imageValue,
            description:
              "Godox XPro II TTL Wireless Flash Trigger for Sony Cameras",
            price: priceValue,
            quantity: 1,
            totalPrice: priceValue,
          });
        }

        // تحديث `localStorage`
        localStorage.setItem("cartContent", JSON.stringify(savedCart));

        // تحديث عرض السلة
        displayCart();
        alert("Item added to cart!");
      });
    });
  }
  function displayCart() {
    const cartBox = document.getElementById("cart-box");
    const savedCart = JSON.parse(localStorage.getItem("cartContent")) || [];

    if (!cartBox) return;

    cartBox.innerHTML = savedCart
      .map(
        (item, index) => `
        <div class="cart" data-index="${index}">
          <div class="container">
            <ul>
              <li>Image</li>
              <li>Description</li>
              <li class="ms-5">Quantity:</li>
              <li>Price</li>
              <li>Sub Total</li>
            </ul>
            <div class="row">
              <div class="col-md-2 d-flex align-items-center justify-content-center">
                <img src="${item.image}" width="80%" />
              </div>
              <div class="col-md-4 pt-3 align-items-center justify-content-center">
                <p class="fw-bold">${item.description}</p>
                <div class="cont d-flex align-items-center gap-5 justify-content-between">
                  <div class="item">
                    <i class="fa-regular fa-heart text-danger"></i>
                    <a href="#">Move To Saved Item</a>
                  </div>
                  <div class="item">
                    <i class="fa-solid fa-trash"></i>
                    <b href="#" style="cursor:pointer" class="remove-item" data-index="${index}">remove</b>
                  </div>
                </div>
              </div>
              <div class="col-md-2 pt-3 text-center" style="border-right: 1px solid #ced5e1">
                <label for="inp" class="d-inline-block">Quantity: </label>
                <input type="number" name="inp" class="w-25 d-block mt-2 quantity" style="margin: 0 auto"
                  value="${item.quantity}" min="1" data-index="${index}" />
              </div>
              <div class="col-md-2 text-center my-auto" style="border-right: 1px solid #ced5e1">
                <p class="price_1" style="color: #007594; font-weight: bold; font-size: 13pt;">${item.price.toFixed(
                  2
                )}</p>
              </div>
              <div class="col-md-2 text-center my-auto">
                <p class="sup-total" style="color: #007594; font-weight: bold; font-size: 13pt;">${item.totalPrice.toFixed(
                  2
                )}</p>
              </div>
            </div>
          </div>
        </div>
      `
      )
      .join("");

    setupQuantityInputs();
    updateTotalPrice();
    setupRemoveButtons();
  }

  // function setupRemoveButtons() {
  //   document.querySelectorAll(".remove-item").forEach((btn) => {
  //     btn.addEventListener("click", function () {
  //       // استرجاع البيانات المخزنة
  //       let savedCart = JSON.parse(localStorage.getItem("cartContent")) || [];
  //       // console.log(savedCart);

  //       // البحث عن العنصر الذي يجب حذفه باستخدام الصورة والسعر
  //       const imageValue = this.dataset.image;
  //       const priceValue = this.dataset.price;

  //       alert("item will be Delete");
  //       savedCart = savedCart.filter(
  //         (item) =>
  //           !(
  //             item.image === imageValue && item.price === parseFloat(priceValue)
  //           )
  //       );

  //       // تحديث localStorage بعد الحذف
  //       localStorage.setItem("cartContent", JSON.stringify(savedCart));
  //       // setTimeout(function () {
  //       //   location.reload();
  //       // }, 100);

  //       // تحديث عرض السلة بعد الحذف
  //       displayCart();
  //     });
  //   });
  // }

  function setupRemoveButtons() {
    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        // جلب الفهرس من `data-index`
        const index = parseInt(this.dataset.index);

        // استرجاع البيانات المخزنة
        let savedCart = JSON.parse(localStorage.getItem("cartContent")) || [];

        if (!isNaN(index) && index >= 0) {
          savedCart.splice(index, 1); // حذف العنصر من المصفوفة
        }

        // تحديث localStorage بعد الحذف
        localStorage.setItem("cartContent", JSON.stringify(savedCart));
        alert("Item will be Delete");
        // تحديث عرض السلة بعد الحذف بدون إعادة تحميل الصفحة
        displayCart();
      });
    });
  }
  displayCart();

  cart();
});
