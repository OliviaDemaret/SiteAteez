{
  let swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    801: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  }
  })
}
 
