
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


  // function initMap() {
  //   // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
  //   var centerLatLng = new google.maps.LatLng(59.938808, 30.323031);
  //   // Обязательные опции с которыми будет проинициализированна карта
  //   var mapOptions = {
  //     center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
  //     zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
  //   };
  //   // Создаем карту внутри элемента #map
  //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // }
  // // Ждем полной загрузки страницы, после этого запускаем initMap()
  // google.maps.event.addDomListener(window, "load", initMap);
