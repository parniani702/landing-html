var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
            document.querySelector(".swiper-button-next").style.color = "white";
            document.querySelector(".swiper-button-prev").style.color = "white";
        }
    }
  });