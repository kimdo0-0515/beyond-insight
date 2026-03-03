$(function(){

    // Include files
    $('.header-include').load('include/header.html', function(){

      // Mega Navigation
      $(window).resize(function(){
        var wiw = $(window).innerWidth();

        if(wiw > 767){  /* PC, 태블릿 사이즈 */
          $('.trigger').click(function(){
            $('.mega-navi').stop().slideToggle();
          });
          $('section').click(function(){
            $('.mega-navi').stop().slideUp();
          });
        }
        else if(wiw <= 767){  /* 모바일 사이즈 */
          $('.trigger').click(function(){
            $('.mega-navi').animate({
              'left': 0
            },300);
          });
          $('section, .btn-mega-navi-close').click(function(){
            $('.mega-navi').animate({
              'left': -300
            },300);
          });
        }
      }).resize();

      // Member register : 로그인 모달에서도 작동해야 하기 때문에 header의 콜백 함수 위치에 작성
      $('.toggle-pw').click(function(){
        // toggle icon shape
        $(this).toggleClass('bi-eye');

        //toggle input type
        var inputType = $(this).parent().children('input').attr('type');  // 눈 아이콘과 형제인 input 태그의 type 속성을 가져옴
        if(inputType == 'password'){
          $(this).parent().children('input').attr('type', 'text');
        }
        else{
          $(this).parent().children('input').attr('type', 'password');
        }
      });

      // Header Login Modal
      $('.btn-login, .login-member a').click(function(){
        $('.member-login-overlay').fadeIn();
        $('body').addClass('active');
      });
      $('.member-login .btn-modal-close').click(function(){
        $('.member-login-overlay').fadeOut();
        $('body').removeClass('active');
      });

      // After Login Header UI
      $('.btn-member-primary').click(function(){
        $('.member-login-overlay').fadeOut();
        $('.user-alarm').show();
        $('.login-register-btns').hide();
      });

      // Mobile Mega Navi
      $('.mega-navi-item b').click(function(){
        $('.mega-navi-item-wrap').slideUp(200); // 1. 전체 접기
        $(this).next().stop().slideDown(200); // 2. 클릭한 메뉴만 펴기
        $(this).addClass('active'); // 3. 클릭한 메뉴명에 active 효과
        $(this).parent().siblings().children('b').removeClass('active');  // 4. 클릭한 것 이외의 메뉴명에서 active 효과 제거
      });

    });

    $('.footer-include').load('include/footer.html', function(){
      /* footer lnb */
      $('.link-item-title').click(function(){
        $(this).next().stop().slideToggle(200);
        $(this).toggleClass('active');
      });

      /* company info trigger */
      $('.company-info-trigger').click(function(){
        $('address').toggle();
      });
    });



    // Scroll Header Fixed
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $('header').addClass('active');
      }
      else{
        $('header').removeClass('active');
      }
    });



    // Category Detail Buttons
    $('.btn-shortcut').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });


    
    // Focus class like 이벤트
    /* $('.like').click(function(){
        $(this).toggleClass('active');
    }); */



    // Scroll Show Go to top
    $(window).scroll(function(){
      if($(this).scrollTop() > 700){
        $('.gototop').addClass('active');
      }
      else{
        $('.gototop').removeClass('active');
      }
    });

    // Go to top Action
    $('.gototop').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });

    



    // The Final Countdown
    $("#early-bird-countdown")
    .countdown("2026/03/08", function(event) {
      $(this).html( // .html : html을 입력하는 메소드
        event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음')
      );
    });



    // Take-course & Cart check all function
    $('.cart-overview .btn-clear').click(function(){
      // parent() : 바로 직속 부모 태그만 지칭
      // parents() : depth와 상관없이 부모 태그 지칭
      $(this).parents('.cart-item').remove(); // remove: html 구조에서 태그 아예 제거
      
      if($('.cart-item').length == 0){
        $('.cart-header').hide();
        $('.cart-item-empty').show();
      }
    });

    $('.cart-wrap .btn-all-clear').click(function(){
      $('.cart-item').remove();
      $('.cart-header').hide();
      $('.cart-item-empty').show();
    });

    $('.cart-chk-all').click(function(){
      $('.check-status .cart-chk').prop('checked',this.checked); // 선택자의 checked 속성에 checked 값을 부여
      // attr('속성명')
      // attr('속성명', '값')
    });



    // Class Share Modal
    $('.btn-sidebar-badge.share').click(function(){
      $('.class-share-overlay').fadeIn();
      $('body').addClass('active');
    });

    $('.class-share .btn-modal-close').click(function(){
      $('.class-share-overlay').fadeOut();
      $('body').removeClass('active');
    });

    $('.share-link').click(function(){
      $('.copied-link').show();
    });



    // Class Detail Navigation
    $('.class-detail-navigation a').click(function(e){
      // 탭버튼 active 상태의 효과
      $(this).addClass('active').siblings().removeClass('active');

      // smooth scroll
      var linkLocation = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkLocation).offset().top - 190,  // 디스플레이 상단에 고정된 헤더와 네비게이션 바의 높이 고려
      }, 500);
      e.preventDefault();
    });



    // Class Curriculum
    $('.chapter-title').click(function(){
      $(this).next().slideToggle(200);
      $(this).toggleClass('active');
    });



    // Class Curriculum All show/hide
    $('.btn-curriculum-fold').click(function(){
      $('.chapter-content').slideUp(200);
      $(this).addClass('selected');
      $(this).siblings('button').removeClass('selected');
      $('.chapter-title').addClass('active');
    });

    $('.btn-curriculum-expand').click(function(){
      $('.chapter-content').slideDown(200);
      $(this).addClass('selected');
      $(this).siblings('button').removeClass('selected');
      $('.chapter-title').removeClass('active');
    });



    // Class FAQ
    $('.faq-title').click(function(){
      // 클릭한 것만 펼치고 모두 접음
      // $(this).siblings('.faq-content').stop().slideUp(200);
      // $(this).next('.faq-content').stop().slideDown(200);

      // 클릭한 것만 접거나 펴기
      $(this).next('.faq-content').stop().slideToggle(200);
    });



    // Front Event Banner
    $('.close-btns a').click(function(){
      $('.front-event-banner').fadeOut();
    });



    // Cart Confirm
    $('.btn-primary.btn-cart').click(function(){
      $('.cart-confirm').show();
      setTimeout(function(){
        $('.cart-confirm').hide();
      }, 4000);
    });

    $('.cart-confirm .btn-close').click(function(){
      $('.cart-confirm').hide();
    });



    // Class Zzim
    $('.zzim').click(function(){
      $(this).children().toggleClass('bi-heart bi-heart-fill');
      $(this).children().css({
        'color': '#FF4C79',
      });
    });
    


    // Front Slider
    $('.front-slider-items').slick({
        infinite: true, // 마지막 슬라이드 후 처음으로 돌아가기
        arrows: false,  // 다음, 이전 버튼
        dots: false,    // 동그라미 도트 버튼
        autoplay: true, // 자동재생
        autoplaySpeed: 3000,    // 슬라이드가 머무는 시간
        fade: false,    // 페이드 효과 여부
        speed: 500, // 슬라이드 교차 시간
        pauseOnHover: true, // 마우스 호버 시 잠시 정지
    });



    // Focus class slider
    $('.focus-class-items').slick({
        slidesToShow: 4,    // 최초에 보이는 개수
        slidesToScroll: 2, // 슬라이드할 개수
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              dots: false,
              arrows: false,
            }
          }
        ]
    });


});

