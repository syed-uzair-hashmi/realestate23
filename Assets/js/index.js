// Loader
window.addEventListener('load', function() {
  // Hide the loader
  document.getElementById('loader').style.display = 'none';
  // Optionally, show the content
  document.getElementById('content').style.display = 'block';
});


// navbar
const navbar = document.querySelector('.navbar');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
  lastScrollPosition = currentScrollPosition;
});


// Top-Button
document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.querySelector('.top-btn');

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        topBtn.classList.add('btn-show');
      } else {
        topBtn.classList.remove('btn-show');
      }
    });
  } else {
    console.warn('Element with class "top-btn" not found.');
  }
});

// swiper slider

var swiper = new Swiper('.swiper.agent-slider', {
  slidesPerView: 6,
  spaceBetween: 10,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay:{
    delay:5000
  },
  breakpoints: {
    1024:{
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    330:{
      slidesPerView: 1,
      spaceBetween: 10,
    }
  },
});

var swiper = new Swiper('.swiper.review-1', {
 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay:{
    delay:5000
  },

  breakpoints: {
    1100:{
      slidesPerView: 2, 
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    330:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});






