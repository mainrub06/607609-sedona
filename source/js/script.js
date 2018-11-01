var button = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".site-list");
var logo = document.querySelector(".main-nav__logo");
var menuWrap = document.querySelector(".main-nav");
var flag = 0;

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
