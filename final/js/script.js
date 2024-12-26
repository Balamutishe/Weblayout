document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.directions-list__item-title').forEach(function(howLink) {
    howLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      console.log(path)
      document.querySelectorAll('.pointers-list').forEach(function(desc) {
        desc.classList.remove('pointers-list__is-active')
        console.log(desc)
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('pointers-list__is-active')
    })
  })

  document.querySelectorAll('.painter-name').forEach(function(howLink) {
    howLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      console.log(path)
      document.querySelectorAll('.painter-card').forEach(function(desc) {
        desc.classList.remove('painter-card--active')
        console.log(desc)
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('painter-card--active')
    })
  })

  document.querySelector('#btn-search').addEventListener('click', function() {
    document.querySelector('#header-form-input').classList.toggle('header-form-input-active'),
    document.querySelector('#header-form-one').classList.toggle('header-form-one-active'),
    document.querySelector('#btn-search').classList.toggle('header-form-button-active'),
    document.querySelector('#btn-search-close').classList.toggle('header-form-button-close-active')
    document.querySelector('#header-burger').classList.toggle('header-burger-disabled')
    document.querySelector('#header-logo').classList.toggle('header-logo-disabled')
  })

  document.querySelector('#btn-search-close').addEventListener('click', function() {
    document.querySelector('#header-form-input').classList.remove('header-form-input-active'),
    document.querySelector('#header-form-one').classList.remove('header-form-one-active'),
    document.querySelector('#btn-search').classList.remove('header-form-button-active'),
    document.querySelector('#btn-search-close').classList.remove('header-form-button-close-active')
    document.querySelector('#header-burger').classList.remove('header-burger-disabled')
    document.querySelector('#header-logo').classList.remove('header-logo-disabled')
  })

  document.querySelector('#header-burger').addEventListener('click', function() {
    document.querySelector('#header-nav').classList.toggle('header-nav-is-active')
  })

  document.querySelector('#btn-nav').addEventListener('click', function() {
    document.querySelector('#header-nav').classList.remove('header-nav-is-active')
  })
})

// hero-swiper

new Swiper('#swiper-one', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  clickable: true,
});

// gallery-swiper

new Swiper('#swiper-two', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,

  navigation: {
    nextEl: '.gallery-swiper__button-next',
    prevEl: '.gallery-swiper__button-prev',
  },

  pagination: {
    el: '.gallery-swiper__pagination-fraction',
    type: 'fraction',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 34,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});

// events-swiper

new Swiper('#swiper-three', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-events-button-next',
    prevEl: '.swiper-events-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,

      pagination: {
        el: '.swiper-pagination-fraction-events',
      },
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,

      pagination: {
        el: '.swiper-pagination-fraction-events',
      },
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,

      pagination: {
        el: '.swiper-pagination-fraction-events',
      },
    },
  }
});

// projects-swiper

new Swiper('#swiper-four', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.swiper-projects-button-next',
    prevEl: '.swiper-projects-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  }
});

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false
});

$(".periodization-list").accordion( {
  heightStyle: "content"
});

tippy('#tooltip-one', {
  content: 'Пример современных тенденций - современная методология разработки',
});

tippy('#tooltip-two', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('#tooltip-three', {
  content: 'В стремлении повысить качество',
});

var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

new JustValidate('.contacts-content__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.lengh === 10
      }
    },
    mail: {
      required: true,
      email: true,
    },
  },

  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон!',
    mail: 'Укажите ваш e-mail!',
  }

});

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 12
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location-icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -62]
  });

  myMap.geoObjects.add(myPlacemark);
}

// var a,w=document.createTreeWalker(document,NodeFilter.SHOW_TEXT);while(a=w.nextNode()){if(a.textContent.trim().length)a.textContent='Одиннадцатиклассница пошла посмотреть на достопримечательность, она шла долго, несколько строчек, пока не пришла'}


