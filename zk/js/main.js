$('.owl-carousel.appart__scheme_slider').owlCarousel({
  loop: true,
  dots: false,
  margin: 5,
  navText: ["", ""],
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    440: {
      items: 3
    }
  }
}); 

$('.owl-carousel.dinamic__slider').owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  navText: ["", ""],
  responsive: {
    0: {
      items: 1,
      margin: 10,
      nav: true,
    },
    500: {
      items: 2
    },    
    700: {
      items: 3
    },
    940: {
      items: 4,
      margin: 20
    }
  }
});