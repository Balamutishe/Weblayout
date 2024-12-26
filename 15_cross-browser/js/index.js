document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-how__link').forEach(function(howLink) {
    howLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      console.log(path)
      document.querySelectorAll('.section-how__desc').forEach(function(desc) {
        desc.classList.remove('section-how__desc--active')
        console.log(desc)
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('section-how__desc--active')
    })
  })

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('#close-menu').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active')
  })

  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#input').classList.toggle('header__input-active')
    document.querySelector('#header-form').classList.toggle('header__form-active')
    document.querySelector('#btn-search').classList.toggle('header__btn-search-active')
  })
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$(".section-faq__list").accordion( {
  heightStyle: "content"
});
