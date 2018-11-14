var prevSlide = document.getElementsByClassName("header__slide-prev")[0],
    nextSlide = document.getElementsByClassName("header__slide-next")[0],
    slide = document.getElementsByClassName("header__slide"),
    id = 1;

slide[0].style.display = "block";
slide[1].style.backgroundImage = "url(img/header/bg-slide-2.jpg)";
slide[2].style.backgroundImage = "url(img/header/bg-slide-3.jpg)";

function moveSlide(n) {
  showSlides(id += n);
};

function showSlides(n) {
  var i;

  if (n > slide.length)
    id = 1;
  if (n < 1)
    id = slide.length;
  for (i = 0; i < slide.length; i++)
    slide[i].style.display = "none"

  slide[id - 1].style.display = "block";
};


var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener("click", function (e) {
    e.preventDefault();
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, "$1");
    t = document.querySelector(hash).getBoundingClientRect().top;
    start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash;
      }
    }
  }, false);
}

var menuMobile = document.getElementById("menu__mobile"),
    menu = document.getElementsByClassName("menu")[0];

menuMobile.addEventListener("click", function(){
  menuMobile.classList.toggle("menu__mobile-active");
  menu.classList.toggle("menu-active");
});