var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  breakpoints: {
    765: {
      slidesPerView: "2",
      spaceBetween: 50,
    },
    1023: {
      slidesPerView: "3",
      spaceBetween: 80,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var reviewSwiper = new Swiper(".reviews", {
  slidesPerView: "auto",
  spaceBetween: 500,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  breakpoints: {
    765: {
      slidesPerView: "2",
      spaceBetween: 200,
    },
    1023: {
      slidesPerView: "3",
      spaceBetween: 80,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var serviceSwiper = new Swiper(".swiper-service", {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  breakpoints: {
    765: {
      slidesPerView: 1,
      allowTouchMove: false,
    },
    1023: {
      slidesPerView: 1,
      allowTouchMove: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// controll service slide
const menu = document.querySelector("[data-serviceMenu='serviceMenu']");
menu.addEventListener(`click`, (e) => {
  const allItems = Array.from(menu.children);

  // target item will be shown in red
  e.target.classList.add(`text-red-500`);

  allItems.forEach((item, idx) => {
    if (item.dataset !== e.target.dataset) {
      // remove text-red from the rest of the item
      item.classList.remove(`text-red-500`);
    } else {
      // move to slide which associated with the selected item
      serviceSwiper.slideTo(idx, 1000);
    }
  });
});
