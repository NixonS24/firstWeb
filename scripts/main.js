'use strict';

jQuery(document).ready(function ($) {

  /*-------home page countUP -----------*/
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
    prefix: '',
    suffix: ''
  };
  var counters = [];
  var counterElements = document.querySelectorAll('.js-countup');

  for (var i = 0; i < counterElements.length; i++) {
    counters.push(new CountUp(counterElements[i], 0, counterElements[i].getAttribute('data-count'), 0, 2.5, options));
  }
  if ($('.counterBoxWrap').length) {
    var count_row = $('.counterBoxWrap');
    var counterTop = count_row.offset().top;
    var counterHeight = count_row.outerHeight();

    $(window).scroll(function () {
      var win = $(window);
      var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      var bounds = count_row.offset();
      bounds.right = bounds.left + count_row.outerWidth();
      bounds.bottom = bounds.top + count_row.outerHeight();
      if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
        counters.map(function (counter) {
          counter.start();
        });
      }
    });
  }
  if ($('.js-countRow').length) {
    var count_row = $('.js-countRow');
    var counterTop = count_row.offset().top;
    var counterHeight = count_row.outerHeight();

    $(window).scroll(function () {
      var win = $(window);
      var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      var bounds = count_row.offset();
      bounds.right = bounds.left + count_row.outerWidth();
      bounds.bottom = bounds.top + count_row.outerHeight();
      if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
        counters.map(function (counter) {
          counter.start();
        });
      }
    });
  }

  /*-------- home page masonry for project gallery -----------*/
  var masonryElements = document.querySelector('.js-galleryWrap');
  if (masonryElements !== null) {

    $('.js-galleryWrap').masonry({
      itemSelector: '.js-galBox'
    });

    $('.js-masonryList li a').on('click', function () {
      $('.js-masonryList li').removeClass('active');
      $(this).parent().addClass('active');
      var filterValue = $(this).attr('class');
      $('.js-galBox').hide();
      $('.' + filterValue).show();
      $('.js-galleryWrap').masonry('layout');
    });

    $('.js-galleryWrap').imagesLoaded().progress(function () {
      $('.js-galleryWrap').masonry('layout');
    });
  }

  /*--------- slick slider init for team section ------------*/
  if ($('.js-teamSlick').length) {
    $('.js-teamSlick').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }]
    });
  }

  /*--------- accordian for service page ------------*/
  if ($('.js-accord').length) {
    $('.js-accord').on('click', function () {
      $(this).toggleClass('accordWrap');
      $('.js-accord').not($(this)).removeClass('accordWrap');
    });
  }

  /*--------- waypoint uses ------------*/
  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
          osAnimationClass = osElement.attr('data-os-animation'),
          osAnimationDelay = osElement.attr('data-os-animation-delay');

      osElement.css({
        '-webkit-animation-delay': osAnimationDelay,
        '-moz-animation-delay': osAnimationDelay,
        'animation-delay': osAnimationDelay
      });

      var osTrigger = trigger ? trigger : osElement;

      osTrigger.waypoint(function () {
        osElement.addClass('animated').addClass(osAnimationClass);
      }, {
        triggerOnce: true,
        offset: '0'
      });
    });
  }
  if ($(window).width() > 992) {
    /*--------- Service Box appearance on Home page ------------*/
    if ($('.js-serviceBox').length) {
      onScrollInit($('.js-serviceBox'), $('.content-ourservice'));
    }

    /*---------  Price box appearance on Home page ------------*/
    if ($('.js-priceBox').length) {
      onScrollInit($('.js-priceBox'), $('.proj-background'));
    }

    /*--------- Skill box appearance on About page ------------*/
    if ($('.js-skill').length) {
      onScrollInit($('.js-skill'), $('.navigation'));
    }

    /*--------- Service Blurb appearance on Service page ------------*/
    if ($('.service-blurb').length) {
      onScrollInit($('.js-serviceBlurb'), $('.service-blurb'));
    }
    if ($('.js-servBox').length) {
      onScrollInit($('.js-servBox'), $('.wrap'));
    }

    /*--------- Work Gallery appearance on Portfolio page ------------*/
    if ($('.js-workGallery').length) {
      onScrollInit($('.js-workGallery'), $('.work-gallery'));
    }
  }

  /*--------- Choice Text with Image appearance on Service page ------------*/
  if ($(window).width() > 992) {
    if ($('.js-choice').length) {
      $('.js-choice').each(function () {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');

        osElement.css({
          '-webkit-animation-delay': osAnimationDelay,
          '-moz-animation-delay': osAnimationDelay,
          'animation-delay': osAnimationDelay
        });

        var osTrigger = osElement;

        osTrigger.waypoint(function () {
          osElement.addClass('animated').addClass(osAnimationClass);
        }, {
          triggerOnce: true,
          offset: '50%'
        });
      });

      //onScrollInit( $('.js-choice'), $('#js-service') )
    }
  }
  /*--------- Header Menu for MOBILE ------------*/
  if ($('.navbar .navbar-toggler').length) {
    $('.navbar .navbar-toggler').on('click', function (event) {
      event.stopPropagation();
      event.preventDefault();
      $('body').addClass('bodyWrap');
      $('.wrap').toggleClass('wraptoggle');
      $('.mobile-menu').addClass('pushLeft');
      $('.mobile-menu .nav-close').on('click', function () {
        $('.mobile-menu').removeClass('pushLeft');
        $('.wrap').removeClass('wraptoggle');
        $('body').removeClass('bodyWrap');
      });
      $(document).on('click', function () {
        $('.mobile-menu').removeClass('pushLeft');
        $('.wrap').removeClass('wraptoggle');
        $('body').removeClass('bodyWrap');
      });
    });
    $('.mobile-menu li').has('ul').addClass('has-menu');
    $('li.has-menu').children('ul').addClass('submenu');
    $('li.has-menu').prepend('<i class="re re-down-arrow"></i>');
    $('li.has-menu > .re').on('click', function () {
      $(this).parent().children('ul').slideToggle();
      $(this).toggleClass('re-up-arrows');
      $(this).toggleClass('re-down-arrow');
    });

    $('.mobile-menu').on('click', function (ev) {
      ev.stopPropagation();
    });

    $(window).on('resize', function () {
      if ($(this).width() > 992) {
        $('.mobile-menu').removeClass('pushLeft');
        $('.wrap').removeClass('wraptoggle');
        $('body').removeClass('bodyWrap');
      }
    });
  }

  /*--------- Header Search ------------*/
  $('.search-icon').on('click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).next().addClass('open');
    $('body').addClass('bodyWrap');
  });
  $('.search-close').on('click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).parent().removeClass('open');
    $('body').removeClass('bodyWrap');
  });

  /*----------------- form input style ------------------*/
  if ($('.js-form').length) {
    $('.js-form').on('focusin', function () {
      $(this).find('.js-label').addClass('label-pos');
    });
    $('.js-form').on('focusout', function () {
      var formVal = $(this).find('.js-control');
      if (formVal.val() == 0) {
        $(this).find('.js-label').removeClass('label-pos');
      }
    });
  }

  /*-------- Google Map embedding ----------*/
  if ($('#map').length) {
    gmap();
  }
  function gmap() {
    var mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(40.6700, -73.9400),
      scrollwheel: false,
      draggable: true,
      styles: [{ 'featureType': 'water', 'elementType': 'geometry', 'stylers': [{ 'color': '#e9e9e9' }, { 'lightness': 17 }] }, { 'featureType': 'landscape', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f5f5' }, { 'lightness': 20 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 17 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 29 }, { 'weight': 0.2 }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 18 }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'color': '#ffffff' }, { 'lightness': 16 }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f5f5' }, { 'lightness': 21 }] }, { 'featureType': 'poi.park', 'elementType': 'geometry', 'stylers': [{ 'color': '#dedede' }, { 'lightness': 21 }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'visibility': 'on' }, { 'color': '#ffffff' }, { 'lightness': 16 }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'saturation': 36 }, { 'color': '#333333' }, { 'lightness': 40 }] }, { 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'transit', 'elementType': 'geometry', 'stylers': [{ 'color': '#f2f2f2' }, { 'lightness': 19 }] }, { 'featureType': 'administrative', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#fefefe' }, { 'lightness': 20 }] }, { 'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#fefefe' }, { 'lightness': 17 }, { 'weight': 1.2 }] }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var image = 'images/map-marker.png';
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      icon: image,
      title: 'RedBee',
      animation: google.maps.Animation.DROP
    });
    google.maps.event.addDomListener(window, 'ready', gmap);
  }

  /*-------- Form Validation ------------*/
  $('.js-formFill').validate();

  /*-------- blog sidebar search ------------*/
  if ($('.js-input').length) {
    $('.js-input').on('focusin', function () {
      $('.js-searchForm').addClass('search-wrap');
    });
    $('.js-input').on('focusout', function () {
      $('.js-searchForm').removeClass('search-wrap');
    });
  }

  /*---------------- Lazy load ---------------*/
  $('img.lazy').lazyload();
});