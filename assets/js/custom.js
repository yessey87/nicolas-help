$( document ).ready(function() {
  console.log('asd')

  $('.header__mobile').click(function () {
    $(this).toggleClass('header__mobile_active');
    $('.header__controls').slideToggle(250)
  });

  $('.stream-slider').slick({
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.faqs-item__head').click(function () {
    $(this).parent().toggleClass('faqs-item--active');
    $(this).siblings('.faqs-item__body').slideToggle(250);

  });

  $('.work-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: true,
    prevArrow: $('.work-slider__prev'),
    nextArrow: $('.work-slider__next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.projects-slider').each(function () {
    let slider = $(this);
    slider.slick({
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: slider.parent().find('.projects-slider__prev'),
      nextArrow: slider.parent().find('.projects-slider__next'),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  })


  $('.projects-tab__title').click(function () {
    $('.projects-tab').removeClass('projects-tab--active');
    $(this).parent().addClass('projects-tab--active');
    let tabI = $(this).parent().index();
    $('.projects__slider').removeClass('projects__slider_active');
    $('.projects__slider').eq(tabI).addClass('projects__slider_active');
    $('.projects__slider').find('.projects-slider').get(tabI).slick.setPosition();
  });

  $('.team__more').click(function (e) {
    let team_more_btn = document.getElementById("team_more");

    if (team_more_btn.innerHTML === '???????????????? ????????') {
      $('.team-item:nth-child(6) ~ .team-item').css('display', 'flex');
      team_more_btn.innerHTML = '????????????';
    }
    else {
      $('.team-item:nth-child(6) ~ .team-item').css('display', 'none');
      team_more_btn.innerHTML = '???????????????? ????????';
      window.location = 'index.html#team'
    }
    
  });

  $('.js-copy').click(function () {
    let value = $(this).data('value');
    if (navigator && navigator.clipboard && navigator.clipboard.writeText){
        return navigator.clipboard.writeText(value);
    }else{
      const el = document.createElement('textarea');
      el.value = value;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  });

});

$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});


 $(document).ready(function(){   
    $('#btn-send').click(function () {
        var email = $('#email').val();
        var text = $('#text').val();
        $.ajax({
            type: "POST", //?????????? ???????????????? ????????????
            url: '/page.php', //???????????????????? php
            data: {email: email, text:text},//???????????????????????? ????????????
            success: function(data) { //?????????????????? ????????????????????
                var old = $('.modal-header').html();//???????????????? ?????????????????? div
                $('.modal-header').html(old + data); //?????????????????? ?????????????????? ???? ????????????????
                }
            });
    });
});    
