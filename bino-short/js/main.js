var menuMobile = document.getElementById("menu__mobile"),
  menu = document.getElementsByClassName("menu")[0],
  error = "error",
  alright = "good",
  submitForm = document.getElementsByClassName("btn-form")[0],
  nameInput = document.getElementsByClassName("form_input")[0],
  email = document.getElementsByClassName("form_input")[1],
  subject = document.getElementsByClassName("form_input")[2],
  textAreaForm = document.getElementsByClassName("form_textarea")[0],
  formThanks = document.getElementsByClassName("form-thx")[0];

initAllFunction();

function initAllFunction() {
  goToAnchore();
  sliderBino();
  addEventBino(menuMobile, "click", menuBino);
  addEventBino(email, "blur", setBlurEmail);
  addEventBino(email, "focus", setFocus);
  addEventBino(nameInput, "blur", setBlur);
  addEventBino(nameInput, "focus", setFocus);
  addEventBino(subject, "blur", setBlur);
  addEventBino(subject, "focus", setFocus);
  addEventBino(textAreaForm, "blur", setBlur);
  addEventBino(textAreaForm, "focus", setFocus);
  addEventBino(submitForm, "click", chekAllForm);
}

function goToAnchore() {
  var linkNav = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener("click", function (event) {
      event.preventDefault();
      var wind = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, "$1");
      screnScroll = document.querySelector(hash).getBoundingClientRect().top;
      start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          result = (screnScroll < 0 ? Math.max(wind - progress / speed, wind + screnScroll) : Math.min(wind + progress / speed, wind + screnScroll));
        window.scrollTo(0, result);
        if (result != wind + screnScroll) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash;
        }
      }
    }, false);
  }
}


function addEventBino(tag, events, funcBino) {
  tag.addEventListener(events, funcBino);
}

function menuBino() {
  menuMobile.classList.toggle("menu__mobile-active");
  menu.classList.toggle("menu-active");
}


function sliderBino() {
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
}


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

function chekAllForm() {
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
    submitForm.style.display = "none";
    email.value = "";
    textAreaForm.value = "";
    subject.value = "";
    nameInput.value = "";
    formThanks.style.display = "block";
  }
};

