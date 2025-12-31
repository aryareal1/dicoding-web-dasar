// Elements declaration
const _html = document.querySelector("html");
/** @type {HTMLDivElement} */
const _jumbotron = document.querySelector(".jumbotron");
/** @type {HTMLDivElement} */
const _navTitle = document.querySelector("nav .title");

/**
 * Handle page scrolling.
 * @remarks Toggle the visibility of title in `nav`.
 */
function onScroll() {
  if (_html.scrollTop > _jumbotron.scrollHeight) {
    _navTitle.style.animation = "0.75s ease title-in";
    _navTitle.style.opacity = 1;
  } else if (_html.scrollTop < _jumbotron.scrollHeight / 2) {
    _navTitle.style.animation = null;
    _navTitle.style.opacity = 0;
  }
}
