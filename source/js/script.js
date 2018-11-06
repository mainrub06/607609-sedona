var button = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".site-list");
var logo = document.querySelector(".main-nav__logo");
var menuWrap = document.querySelector(".main-nav");
var flag = 0;
var formPage = document.querySelector(".review");
var form = document.querySelector(".interview");
var submit = document.querySelector(".review__submit");
var inputName = document.querySelector(".interview__name-input");
var inputContacts = document.querySelector(".interview__contacts-input");
var texTarea = document.querySelector(".interview__emotion-textarea");
var popupDone = document.querySelector(".review__popup-succes");
var popupFail = document.querySelector(".review__popup-failure");
var closeDone = document.querySelector(".close-done");
var closeFail = document.querySelector(".close-fail");


newFunction();
function newFunction() {
  button.classList.remove("no-js");
  menu.classList.add("js-event");
  logo.classList.add("js-logo");
  menuWrap.classList.add("js-close");
}

button.addEventListener("click", function toggle(evt) {
  if(flag == 0) {
    evt.preventDefault();
    button.classList.add("main-nav__toggle--click");
    menu.classList.remove("js-event");
    logo.classList.remove("js-logo");
    menuWrap.classList.remove("js-close");
    flag = 1;
  }
  else if(flag == 1) {
    evt.preventDefault();
    button.classList.remove("main-nav__toggle--click");
    menu.classList.add("js-event");
    logo.classList.add("js-logo");
    menuWrap.classList.add("js-close");
    flag = 0;
  }
});

if(form) {
  form.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputContacts.value || !texTarea.value) {
      evt.preventDefault();
      popupFail.classList.add("display-on");
    } else {
      evt.preventDefault();
      popupDone.classList.add("display-on");
    }
  });

  closeDone.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupDone.classList.remove("display-on");
  });

  closeFail.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFail.classList.remove("display-on");
  });
};
