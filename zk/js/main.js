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

const data = [
  {
    id: 1,
    item: {
      salePrice: '1 950 00 руб.',
      nosalePrice: '2 100 000 руб.',
      sale: '150 000 руб.'
    }
  },
  {
    id: 2,
    item: {
      salePrice: '1 850 00 руб.',
      nosalePrice: '1 900 000 руб.',
      sale: '50 000 руб.'
    }
  },
  {
    id: 3,
    item: {
      salePrice: '2 050 00 руб.',
      nosalePrice: '2 250 000 руб.',
      sale: '200 000 руб.'
    }
  },
  {
    id: 4,
    item: {
      salePrice: '1 900 00 руб.',
      nosalePrice: '2 050 000 руб.',
      sale: '150 000 руб.'
    }
  },
  {
    id: 5,
    item: {
      salePrice: '2 150 00 руб.',
      nosalePrice: '2 400 000 руб.',
      sale: '250 000 руб.'
    }
  }
];

let active = 1


$('.appart__price_block').on('click', function() {
  let itemData = data[$(this).attr('data-tabs')-1]
  $('.appart__price_block')[active-1].classList.remove('active')
  active = $(this).attr('data-tabs');
  $('.appart__price_block')[active-1].classList.add('active')
  $('.appart__scheme_price').text(itemData.item.salePrice)
  $('.appart__scheme_price-nosale').text(itemData.item.nosalePrice)
  $('.appart__scheme_sale').text('Скидка: '+itemData.item.sale)
});

