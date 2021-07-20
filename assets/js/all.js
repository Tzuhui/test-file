var menu = ['前端', '接案', '後端', '雲端']
const swiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination-custom',
    clickable: true,
      renderBullet: function (index, className) {
        return `<div class="slide-bullet flex-center ${className}">
        <div class="slide-bullet-bg"></div>
        <p>${menu[index]}</p>
      </div>`;
      },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});