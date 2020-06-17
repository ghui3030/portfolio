$(function(){

  // 스타트 스킵 메뉴 이벤트

  $('.skip_menu>li>a').focus(function(){
      $(this).parent().css('top',0);

  });
  $('.skip_menu>li>a').focusout(function(){
      $(this).parent().css('top','-100%');

  });

  // 네비 이벤트

  $('#open_nav_btn').click(function(){
      navBlock()
  })
  $('#close_nav_btn').click(function(){
      navNone()
  })
  $(window).resize(function(){
      var winWidth=$(this).width();
      if(winWidth>=767){
          navFlex()
      }else{
          navNone()
      }
  })

  function navFlex(){
      $('nav>ul').css('display','flex');
  }
  function navNone(){
      $('nav>ul').css('display','none');
  }
  function navBlock(){
      $('nav>ul').css('display','block');
  }

  // 메뉴 휠 이벤트

  $(window).on('mousewheel touchmove',function(){
      var a=$(location).attr('href');
      var b='welcome';
      var c='i_am';

      if(a.indexOf(b)>=0){
          $('.header').removeClass('active');
      }else{
          $('.header').addClass('active');
      }

      if(a.indexOf(c)>=0){
          $('.skill>li').addClass('active');
      }
  });
  
  

  // 메뉴 클릭 이벤트

  $('.header a').click(function(){
      var navTxt=$(this).text();
      var headerBox=$('.header');
      if(navTxt=='Welcome'){
          headerBox.removeClass('active');
      }else{
          headerBox.addClass('active');
      }
      if(navTxt=='About Me'){
          $('.skill>li').addClass('active');
      }  
  });

  // welcome 텍스트 이벤트
  $('.welcome').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('.text').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
  });

  // 그리드 이벤트
  $('.grid').hover(function(){
      $(this).children().children('.grid_hover_bg').css('opacity','1')
  },function(){
      $('.grid_hover_bg').css('opacity','0')
  });


//   fullpage   
  $('#fullpage').fullpage({
        //options here
        anchors: ['welcome', 'i_am', 'portfolio', 'contact'],
        menu: '#menu',
        scrollingSpeed: 1000,
    
    });

})