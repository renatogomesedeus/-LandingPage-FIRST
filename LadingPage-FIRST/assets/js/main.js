console.clear(),
  $(".slider-simples").slick({
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
  });

$(".slider-teste").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//FUNÇÃO PARA NAVBAR 
(function () {
  var menu = document.getElementById('mainNav');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) menu.classList.add('menuFixo');
      else menu.classList.remove('menuFixo');
  });
})();