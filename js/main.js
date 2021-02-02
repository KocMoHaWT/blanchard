document.addEventListener('DOMContentLoaded', function(){
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,

  // slidesPerColumn: 2,

  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});



const headerSelect = () => {
  const elements = document.querySelectorAll('.header-select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      sorter: function (a, b) {
      },
      position: 'bottom',
    });
  });
};

headerSelect ();

});
