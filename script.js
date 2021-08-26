function changePage(el, page) {
  Array.from(document.querySelectorAll('.nav-item.active')).forEach((el) => el.classList.remove('active'))
  el.classList.add('active')
  //Array.from(document.querySelectorAll('.main:not(.hidden)')).forEach((el) => el.classList.add('hidden'))
  //Array.from(document.querySelectorAll('.main.' + page)).forEach((el) => el.classList.remove('hidden'))
}
