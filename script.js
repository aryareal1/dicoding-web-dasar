const _html = document.querySelector("html");
/** @type {HTMLDivElement} */
const _jumbotron = document.querySelector(".jumbotron");
/** @type {HTMLDivElement} */
const _navTitle = document.querySelector("nav .title");

function onScroll() {
  if (_html.scrollTop > _jumbotron.scrollHeight)
    _navTitle.style.animation = "0.75s ease forwards title-in";
  else if (_html.scrollTop < _jumbotron.scrollHeight / 2)
    _navTitle.style.animation = "0.75s ease forwards title-out";
}
