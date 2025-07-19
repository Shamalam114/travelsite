
// Swiper for Hero, Popular, Testimonials
var heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: { delay: 4000 },
  });
  
  var popularSwiper = new Swiper('.popular-swiper', {
    slidesPerView: 4,  // Default desktop view
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // When screen width is ≤ 768px (mobile)
      0: {
        slidesPerView: 1
      },
      // When screen width is ≤ 992px (tablet)
      768: {
        slidesPerView: 2
      },
      // When screen width is > 992px (desktop)
      992: {
        slidesPerView: 4
      }
    }
  });
  
  
  var testimonialSwiper = new Swiper('.testimonial-swiper', {
    loop: true,
    autoplay: { delay: 5000 },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Scroll to Top
  const topBtn = document.getElementById('topBtn');
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };
  topBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
// Featured Tours Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const tourCards = document.querySelectorAll('.tour-card');

// No need to filter on page load (show all by default)

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    if (filterValue === 'all') {
      tourCards.forEach(card => {
        card.style.display = 'block';
      });
    } else {
      tourCards.forEach(card => {
        if (card.classList.contains(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
});