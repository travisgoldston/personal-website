// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  const isHome = page === '' || page === 'index.html';

  if (isHome) {
    const logo = document.querySelector('.nav-logo');
    if (logo) logo.classList.add('active');
  } else {
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      if (link.getAttribute('href') === page) {
        link.classList.add('active');
      }
    });
  }
});
