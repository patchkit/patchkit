window.$ = function (selector, parent) {
  parent = parent || document.body
  return parent.querySelector(selector)
}
window.$$ = function (selector, parent) {
  parent = parent || document.body
  return Array.prototype.slice.call(parent.querySelectorAll(selector))
}