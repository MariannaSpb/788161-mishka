
  var siteNav = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.page-header__button-humburger');

  siteNav.classList.remove('main-nav--nojs');
  navToggle.addEventListener('click', function() {
    if (siteNav.classList.contains('main-nav--closed')) {
      siteNav.classList.remove('main-nav--closed');
      siteNav.classList.add('main-nav--opened');
    } else {
      siteNav.classList.add('main-nav--closed');
      siteNav.classList.remove('main-nav--opened');
    }
  });
