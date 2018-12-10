var linkNav = document.querySelectorAll('[href^="#"]'),
  speed = 0.3;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener("click", function (e) {
    e.preventDefault();
    var wind = window.pageYOffset,
      hash = this.href.replace(/[^#]*(.*)/, "$1");
    toTop = document.querySelector(hash).getBoundingClientRect().top;
    start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        res = (toTop < 0 ? Math.max(wind - progress / speed, wind + toTop) : Math.min(wind + progress / speed, wind + toTop));
      window.scrollTo(0, res);
      if (res != wind + toTop) {
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
  subm = document.getElementsByClassName("btn-form")[0],
  formThx= document.getElementsByClassName("form-thx")[0],
  error = "error",
  alright = "good";

mail.onblur = function () {
  var result = this.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    mail.classList.remove(alright);
    mail.classList.add(error);
  } else {
    mail.classList.remove(error);
    mail.classList.add(alright);
  }
}

mail.onfocus = function () {
  mail.classList.remove(error);
  mail.classList.remove(alright);
}

namei.onblur = function () {
  if (namei.value == "") {
    namei.classList.remove(alright);
    namei.classList.add(error);
  } else {
    namei.classList.remove(error);
    namei.classList.add(alright);
  }
}

namei.onfocus = function () {
  namei.classList.remove(error);
  namei.classList.remove(alright);
}

subj.onblur = function () {
  if (subj.value == "") {
    subj.classList.remove(alright);
    subj.classList.add(error);
  } else {
    subj.classList.remove(error);
    subj.classList.add(alright);
  }
}

subj.onfocus = function () {
  subj.classList.remove("error");
  subj.classList.remove(alright);
}

tarea.onblur = function () {
  if (tarea.value == "") {
    tarea.classList.remove(alright);
    tarea.classList.add(error);
  } else {
    tarea.classList.remove(error);
    tarea.classList.add(alright);
  }
}

tarea.onfocus = function () {
  tarea.classList.remove(error);
  tarea.classList.remove(alright);
}

subm.addEventListener("click", function() {
  var result = mail.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);

  if ( !result || namei.value == "" || tarea.value == "" || subj.value == "") {
    event.preventDefault();
    mail.classList.remove(alright);
    tarea.classList.remove(alright);
    subj.classList.remove(alright);
    namei.classList.remove(alright);
    mail.classList.add(error);
    tarea.classList.add(error);
    subj.classList.add(error);
    namei.classList.add(error);
  } else {
    event.preventDefault();
    subm.style.display = "none";
    mail.value = "";
    tarea.value = "";
    subj.value = "";
    namei.value = "";
    formThx.style.display = "block";
  }
});

