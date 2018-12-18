var linkNav = document.querySelectorAll('[href^="#"]'),
  speed = 0.3,
  nameInput = document.getElementsByClassName("form_input")[0],
  email = document.getElementsByClassName("form_input")[1],
  subject = document.getElementsByClassName("form_input")[2],
  textAreaForm = document.getElementsByClassName("form_textarea")[0],
  subm = document.getElementsByClassName("btn-form")[0],
  formThx = document.getElementsByClassName("form-thx")[0],
  error = "error",
  alright = "good",
  menuMobile = document.getElementById("menu__mobile"),
  menu = document.getElementsByClassName("menu")[0];

function goToAnchore() {
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
}

goToAnchore();

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


function setFocus() {
  this.classList.remove(error);
  this.classList.remove(alright);
}

function setBlur() {
  if (this.value == "") {
    this.classList.remove(alright);
    this.classList.add(error);
  } else {
    this.classList.remove(error);
    this.classList.add(alright);
  }
}

function setBlurEmail() {
  var result = this.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    this.classList.remove(alright);
    this.classList.add(error);
  } else {
    this.classList.remove(error);
    this.classList.add(alright);
  }
}

email.addEventListener("blur", setBlurEmail);

email.addEventListener("focus", setFocus);

nameInput.addEventListener("blur", setBlur);

nameInput.addEventListener("focus", setFocus);

subject.addEventListener("blur", setBlur);

subject.addEventListener("focus", setFocus);

textAreaForm.addEventListener("blur", setBlur);

textAreaForm.addEventListener("focus", setFocus);

subm.addEventListener("click", function () {
  var result = email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);

  if (!result || nameInput.value == "" || textAreaForm.value == "" || subject.value == "") {
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