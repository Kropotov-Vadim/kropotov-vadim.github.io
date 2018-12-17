var linkNav = document.querySelectorAll('[href^="#"]'),
  speed = 0.3,
  nameInput = document.getElementsByClassName("form_input")[0],
  email = document.getElementsByClassName("form_input")[1],
  subject = document.getElementsByClassName("form_input")[2],
  textAreaForm = document.getElementsByClassName("form_textarea")[0],
  subm = document.getElementsByClassName("btn-form")[0],
  formThx= document.getElementsByClassName("form-thx")[0],
  error = "error",
  alright = "good",
  menuMobile = document.getElementById("menu__mobile"),
  menu = document.getElementsByClassName("menu")[0];

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

$('.case__slider').slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

email.onblur = function () {
  var result = this.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    email.classList.remove(alright);
    email.classList.add(error);
  } else {
    email.classList.remove(error);
    email.classList.add(alright);
  }
}

email.onfocus = function () {
  email.classList.remove(error);
  email.classList.remove(alright);
}

nameInput.onblur = function () {
  if (nameInput.value == "") {
    nameInput.classList.remove(alright);
    nameInput.classList.add(error);
  } else {
    nameInput.classList.remove(error);
    nameInput.classList.add(alright);
  }
}

nameInput.onfocus = function () {
  nameInput.classList.remove(error);
  nameInput.classList.remove(alright);
}

subject.onblur = function () {
  if (subject.value == "") {
    subject.classList.remove(alright);
    subject.classList.add(error);
  } else {
    subject.classList.remove(error);
    subject.classList.add(alright);
  }
}

subject.onfocus = function () {
  subject.classList.remove(error);
  subject.classList.remove(alright);
}

textAreaForm.onblur = function () {
  if (textAreaForm.value == "") {
    textAreaForm.classList.remove(alright);
    textAreaForm.classList.add(error);
  } else {
    textAreaForm.classList.remove(error);
    textAreaForm.classList.add(alright);
  }
}

textAreaForm.onfocus = function () {
  textAreaForm.classList.remove(error);
  textAreaForm.classList.remove(alright);
}

subm.addEventListener("click", function() {
  var result = email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);

  if ( !result || nameInput.value == "" || textAreaForm.value == "" || subject.value == "") {
    event.preventDefault();
    email.classList.remove(alright);
    textAreaForm.classList.remove(alright);
    subject.classList.remove(alright);
    nameInput.classList.remove(alright);
    email.classList.add(error);
    textAreaForm.classList.add(error);
    subject.classList.add(error);
    nameInput.classList.add(error);
  } else {
    event.preventDefault();
    subm.style.display = "none";
    email.value = "";
    textAreaForm.value = "";
    subject.value = "";
    nameInput.value = "";
    formThx.style.display = "block";
  }
});

