// Set active nav link based on current page + mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const isHome = path === '' || path === '/';

  if (isHome) {
    const logo = document.querySelector('.nav-logo');
    if (logo) logo.classList.add('active');
  } else {
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === path || href === path + '/') {
        link.classList.add('active');
      }
    });
  }

  // Mobile nav toggle
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close menu when a link is clicked (for same-page or after navigate)
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
