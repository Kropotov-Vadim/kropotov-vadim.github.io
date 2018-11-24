var slide = document.getElementsByClassName("header__slide"),
  id = 1;

slide[0].style.display = "block";
slide[1].style.backgroundImage = "url(img/header/bg-slide-2.jpg)";
slide[2].style.backgroundImage = "url(img/header/bg-slide-3.jpg)";

var linkNav = document.querySelectorAll('[href^="#"]'),
  speed = 0.5;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener("click", function (e) {
    e.preventDefault();
    var wind = window.pageYOffset,
      hash = this.href.replace(/[^#]*(.*)/, "$1");
    to = document.querySelector(hash).getBoundingClientRect().top;
    start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        res = (to < 0 ? Math.max(wind - progress / speed, wind + to) : Math.min(wind + progress / speed, wind + to));
      window.scrollTo(0, res);
      if (res != wind + to) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash;
      }
    }
  }, false);
}

var menuMobile = document.getElementById("menu__mobile"),
  menu = document.getElementsByClassName("menu")[0];

menuMobile.addEventListener("click", function () {
  menuMobile.classList.toggle("menu__mobile-active");
  menu.classList.toggle("menu-active");
});

$('.slider-wrapper').slick({
  infinite: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="header__slide-prev"></div> ',
  nextArrow: '<div class="header__slide-next"></div> '
});

var namei = document.getElementsByClassName("form_input")[0],
  mail = document.getElementsByClassName("form_input")[1],
  subj = document.getElementsByClassName("form_input")[2],
  tarea = document.getElementsByClassName("form_textarea")[0],
  subm = document.getElementsByClassName("btn-form")[0];

mail.onblur = function () {
  var result = this.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    mail.style.borderBottomColor = "red";
  } else {
    mail.style.borderBottomColor = "green";
  }
}

mail.onfocus = function () {
  mail.style.borderBottomColor = "#999999";
}

namei.onblur = function () {
  if (namei.value == "") {
    namei.style.borderBottomColor = "red";
  } else {
    namei.style.borderBottomColor = "green";
  }
}

namei.onfocus = function () {
  namei.style.borderBottomColor = "#999999";
}

subj.onblur = function () {
  if (subj.value == "") {
    subj.style.borderBottomColor = "red";
  } else {
    subj.style.borderBottomColor = "green";
  }
}

subj.onfocus = function () {
  subj.style.borderBottomColor = "#999999";
}

tarea.onblur = function () {
  if (tarea.value == "") {
    tarea.style.borderBottomColor = "red";
  } else {
    tarea.style.borderBottomColor = "green";
  }
}

tarea.onfocus = function () {
  tarea.style.borderBottomColor = "#999999";
}

subm.addEventListener("click", function() {
  var result = mail.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);

  if ( !result || namei.value == "" || tarea.value == "" || subj.value == "") {
    event.preventDefault();
    mail.style.borderBottomColor = "red";
    tarea.style.borderBottomColor = "red";
    subj.style.borderBottomColor = "red";
    namei.style.borderBottomColor = "red";
  } else {
    alert("Отправленно");
  }
});