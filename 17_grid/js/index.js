document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('nav-is-active')
  })

  document.querySelector('#close-menu').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('nav-is-active')
  })

})
