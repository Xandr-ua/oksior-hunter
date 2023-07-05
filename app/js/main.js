$(function() {

  $('.header__burger').on('click', function () {
    $('.menu-list').toggleClass('open-menu');
    $('.header__burger').toggleClass('open');
  });


  $('.targeted').on('click', function () {
    $('.business__wrap--targeted').toggleClass('open-box');
    $('.business__link--targeted').toggleClass('arrow-rotate');
  });

  $('.it').on('click', function () {
    $('.business__wrap--it').toggleClass('open-box');
    $('.business__link--it').toggleClass('arrow-rotate');
  });

  $('.brand').on('click', function () {
    $('.business__wrap--brand').toggleClass('open-box');
    $('.business__link--brand').toggleClass('arrow-rotate');
  });

  $('.teaching').on('click', function () {
    $('.business__wrap--teaching').toggleClass('open-box');
    $('.business__link--teaching').toggleClass('arrow-rotate');
  });

  $('.recruiting').on('click', function () {
    $('.business__wrap--recruiting').toggleClass('open-box');
    $('.business__link--recruiting').toggleClass('arrow-rotate');
  });

  $('.hr').on('click', function () {
    $('.business__wrap--hr').toggleClass('open-box');
    $('.business__link--hr').toggleClass('arrow-rotate');
  });

  $('.financial').on('click', function () {
    $('.business__wrap--financial').toggleClass('open-box');
    $('.business__link--financial').toggleClass('arrow-rotate');
  });

  $('.legal').on('click', function () {
    $('.business__wrap--legal').toggleClass('open-box');
    $('.business__link--legal').toggleClass('arrow-rotate');
  });

  $('.selection').on('click', function () {
    $('.business__wrap--selection').toggleClass('open-box');
    $('.business__link--selection').toggleClass('arrow-rotate');
  });

  $('.personnel').on('click', function () {
    $('.business__wrap--personnel').toggleClass('open-box');
    $('.business__link--personnel').toggleClass('arrow-rotate');
  });

  $('.testing').on('click', function () {
    $('.business__wrap--testing').toggleClass('open-box');
    $('.business__link--testing').toggleClass('arrow-rotate');
  });

  $('.screening').on('click', function () {
    $('.business__wrap--screening').toggleClass('open-box');
    $('.business__link--screening').toggleClass('arrow-rotate');
  });

  $('.consulting').on('click', function () {
    $('.business__wrap--consulting').toggleClass('open-box');
    $('.business__link--consulting').toggleClass('arrow-rotate');
  });

  $('.outsourcing').on('click', function () {
    $('.business__wrap--outsourcing').toggleClass('open-box');
    $('.business__link--outsourcing').toggleClass('arrow-rotate');
  });

  $('.outplacement').on('click', function () {
    $('.business__wrap--outplacement').toggleClass('open-box');
    $('.business__link--outplacement').toggleClass('arrow-rotate');
  });

  $('.certification').on('click', function () {
    $('.business__wrap--certification').toggleClass('open-box');
    $('.business__link--certification').toggleClass('arrow-rotate');
  });

  $('.career').on('click', function () {
    $('.business__wrap--career').toggleClass('open-box');
    $('.business__link--career').toggleClass('arrow-rotate');
  });

  $('.preparation').on('click', function () {
    $('.business__wrap--preparation').toggleClass('open-box');
    $('.business__link--preparation').toggleClass('arrow-rotate');
  });

  $('.teaching').on('click', function () {
    $('.business__wrap--teaching').toggleClass('open-box');
    $('.business__link--teaching').toggleClass('arrow-rotate');
  });

  $('.discovery').on('click', function () {
    $('.business__wrap--discovery').toggleClass('open-box');
    $('.business__link--discovery').toggleClass('arrow-rotate');
  });

  $('.start').on('click', function () {
    $('.business__wrap--start').toggleClass('open-box');
    $('.business__link--start').toggleClass('arrow-rotate');
  });

  $('.luxury').on('click', function () {
    $('.business__wrap--luxury').toggleClass('open-box');
    $('.business__link--luxury').toggleClass('arrow-rotate');
  });

  $('.vip').on('click', function () {
    $('.business__wrap--vip').toggleClass('open-box');
    $('.business__link--vip').toggleClass('arrow-rotate');
  });

  $('.cv').on('click', function () {
    $('.business__wrap--cv').toggleClass('open-box');
    $('.business__link--cv').toggleClass('arrow-rotate');
  });

  $('.letter').on('click', function () {
    $('.business__wrap--letter').toggleClass('open-box');
    $('.business__link--letter').toggleClass('arrow-rotate');
  });

  $('.translation').on('click', function () {
    $('.business__wrap--translation').toggleClass('open-box');
    $('.business__link--translation').toggleClass('arrow-rotate');
  });

  $('.placing').on('click', function () {
    $('.business__wrap--placing').toggleClass('open-box');
    $('.business__link--placing').toggleClass('arrow-rotate');
  });

  $('.recommendation').on('click', function () {
    $('.business__wrap--recommendation').toggleClass('open-box');
    $('.business__link--recommendation').toggleClass('arrow-rotate');
  });

  $('.preparation').on('click', function () {
    $('.business__wrap--preparation').toggleClass('open-box');
    $('.business__link--preparation').toggleClass('arrow-rotate');
  });

  $('.linkedin').on('click', function () {
    $('.business__wrap--linkedin').toggleClass('open-box');
    $('.business__link--linkedin').toggleClass('arrow-rotate');
  });

  $('.portfolio').on('click', function () {
    $('.business__wrap--portfolio').toggleClass('open-box');
    $('.business__link--portfolio').toggleClass('arrow-rotate');
  });

  $('.autobiography').on('click', function () {
    $('.business__wrap--autobiography').toggleClass('open-box');
    $('.business__link--autobiography').toggleClass('arrow-rotate');
  });

  $('.b2b').on('click', function () {
    $('.business__wrap--b2b').toggleClass('open-box');
    $('.business__link--b2b').toggleClass('arrow-rotate');
  });

  $('.b2c').on('click', function () {
    $('.business__wrap--b2c').toggleClass('open-box');
    $('.business__link--b2c').toggleClass('arrow-rotate');
  });

  $('.courses').on('click', function () {
    $('.business__wrap--courses').toggleClass('open-box');
    $('.business__link--courses').toggleClass('arrow-rotate');
  });

  $('.methods').on('click', function () {
    $('.business__wrap--methods').toggleClass('open-box');
    $('.business__link--methods').toggleClass('arrow-rotate');
  });



  $('.adress__box-kyiv').on('click', function () {
    $('.adress__box-kyiv').addClass('active-arrow');
    $('.adress__map-kyiv').css('display', 'block');

    $('.adress__box-lviv').removeClass('active-arrow');
    $('.adress__map-lviv').css('display', 'none');
  });

  $('.adress__box-lviv').on('click', function () {
    $('.adress__box-lviv').addClass('active-arrow');
    $('.adress__map-lviv').css('display', 'block');

    $('.adress__box-kyiv').removeClass('active-arrow');
    $('.adress__map-kyiv').css('display', 'none');
  });


  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slick-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slick-right.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.clients__list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slick-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slick-right.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  wow = new WOW({
    boxClass: 'wow', 
    animateClass: 'animate__animated', 
    offset: 0, 
    mobile: false, 
    live: true 
  })
  wow.init();


  let accordion = function () {
    let data = $('.professionally__list').attr('data-accordion');

    $('.professionally__subtitle').on('click', function () {
      if (data === 'close') {
        $('.professionally__text').slideUp();
        if ($(this).hasClass('active')) {
          $(this).toggleClass('active');
        } else {
          $('.professionally__list').removeClass('active');
          $(this).toggleClass('active');
        }
      } else {
        $(this).toggleClass('active');
      }
      $(this).next('.professionally__text').not(':animated').slideToggle();
    })
  };

  accordion();


  var show = true;
  var countbox = ".numbers__list";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.numbers__list').css('opacity', '1');
      $('.count').spincrement({
        thousandSeparator: "",
        duration: 2000
      });

      show = false;
    }
  });


  let mixer = mixitup ('.jobs__content-list');
  
  
});


let accordion = function () {
  let data = $('.access__list').attr('data-accordion');

  $('.access__subtitle').on('click', function () {
    if (data === 'close') {
      $('.access__sublist').slideUp();
      if ($(this).hasClass('active-2')) {
        $(this).toggleClass('active-2');
      } else {
        $('.access__list').removeClass('active-2');
        $(this).toggleClass('active-2');
      }
    } else {
      $(this).toggleClass('active-2');
    }
    $(this).next('.access__sublist').not(':animated').slideToggle();
  })
};

accordion();

















/**
 * jQuery Spincrement plugin
 *
 * Plugin structure based on: http://blog.jeremymartin.name/2008/02/building-your-first-jquery-plugin-that.html
 * Leveraging of jQuery animate() based on: http://www.bennadel.com/blog/2007-Using-jQuery-s-animate-Method-To-Power-Easing-Based-Iteration.htm
 * Easing function from jQuery Easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
 * Thousands separator code: http://www.webmasterworld.com/forum91/8.htm
 *
 * @author John J. Camilleri
 * @version 1.2
 */

/* global jQuery */

(function ($) {
  // Custom easing function
  $.extend($.easing, {
    // This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
    spincrementEasing: function (x, t, b, c, d) {
      return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    }
  })

  // Spincrement function
  $.fn.spincrement = function (opts) {
    // Default values
    var defaults = {
      from: 0,
      to: null,
      decimalPlaces: null,
      decimalPoint: '.',
      thousandSeparator: ',',
      duration: 1000, // ms; TOTAL length animation
      leeway: 50, // percent of duraion
      easing: 'spincrementEasing',
      fade: true,
      complete: null
    }
    var options = $.extend(defaults, opts)

    // Function for formatting number
    var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/)

    function format(num, dp) {
      num = num.toFixed(dp) // converts to string!

      // Non "." decimal point
      if ((dp > 0) && (options.decimalPoint !== '.')) {
        num = num.replace('.', options.decimalPoint)
      }

      // Thousands separator
      if (options.thousandSeparator) {
        while (re_thouSep.test(num)) {
          num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2')
        }
      }
      return num
    }

    // Apply to each matching item
    return this.each(function () {
      // Get handle on current obj
      var obj = $(this)

      // Set params FOR THIS ELEM
      var from = options.from
      if (obj.attr('data-from')) {
        from = parseFloat(obj.attr('data-from'))
      }

      var to
      if (obj.attr('data-to')) {
        to = parseFloat(obj.attr('data-to'))
      } else if (options.to !== null) {
        to = options.to
      } else {
        var ts = $.inArray(options.thousandSeparator, ['\\', '^', '$', '*', '+', '?', '.']) > -1 ? '\\' + options.thousandSeparator : options.thousandSeparator
        var re = new RegExp(ts, 'g')
        to = parseFloat(obj.text().replace(re, ''))
      }

      var duration = options.duration
      if (options.leeway) {
        // If leeway is set, randomise duration a little
        duration += Math.round(options.duration * ((Math.random() * 2) - 1) * options.leeway / 100)
      }

      var dp
      if (obj.attr('data-dp')) {
        dp = parseInt(obj.attr('data-dp'), 10)
      } else if (options.decimalPlaces !== null) {
        dp = options.decimalPlaces
      } else {
        var ix = obj.text().indexOf(options.decimalPoint)
        dp = (ix > -1) ? obj.text().length - (ix + 1) : 0
      }

      // Start
      obj.css('counter', from)
      if (options.fade) obj.css('opacity', 0)
      obj.animate({
        counter: to,
        opacity: 1
      }, {
        easing: options.easing,
        duration: duration,

        // Invoke the callback for each step.
        step: function (progress) {
          obj.html(format(progress * to, dp))
        },
        complete: function () {
          // Cleanup
          obj.css('counter', null)
          obj.html(format(to, dp))

          // user's callback
          if (options.complete) {
            options.complete(obj)
          }
        }
      })
    })
  }
})(jQuery)
