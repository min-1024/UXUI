$(document).ready(function(){
  //gnb
  const $sub=$('.sub,.sub_bg'),
  $gnbLi=$('.gnb>li'),
  $gnbSb=$('.gnb>li,.sub_bg')
  // $sub.hide()

  // $gnbLi.mouseenter(function(){
  //   $sub.stop().slideDown()
  // }).mouseleave(function(){
  //   $sub.stop().slideUp()
  // })


  $(window).resize(function(){
    let win=$(window),
    winWid=win.width()
    $sub.css('display','none');

    if(winWid<=768){
      // $sub.css('display','none');
      // $gnbSb.mouseenter(function(){
      //   $('.sub').removeClass('on');
      //   $(this).find('.sub').addClass('on')
      //   $(this).find('.sub').show()
      // }).mouseleave(function(){
      //   $(this).find('.sub').removeClass('on')
      //   $(this).find('.sub').hide()
      // });

      $sub.css('display','none');
      $gnbLi.click(function(){
        $('.sub').removeClass('on');
        $(this).find('.sub').toggleClass('on')
        $(this).find('.sub').show()
      })
      $('.gnb_banner').click(function(){
        $('.sub').removeClass('on')
        $('.sub').hide()
      })
    }else{
      $gnbSb.mouseenter(function(){
        $sub.stop().slideDown();
      }).mouseleave(function(){
        $sub.stop().slideUp();
      });
    }
  }).resize()

  //gnb_icon
  const $gnbShow=$('.utile_lt,.utile_rt,nav,body,.gnb_banner'),
  $gnbIcon=$('.gnb_icon')
  
  $gnbIcon.click(function(){
    $gnbShow.toggleClass('on')
    $(this).toggleClass('close')
  })

  //main btn
  const $main=$('#main'),
  $mainImgs=$('.main_img'),
  $mainImg=$mainImgs.find('a'),
  $mainBtn=$('.main_btn'),
  $mainBtnL=$mainBtn.find('.main_btn_l'),
  $mainBtnR=$mainBtn.find('.main_btn_r'),
  $indicators=$main.find('.indicators'),
  mainCount=$mainImg.length

  let currentIdx=0,
  input=''

  $mainImg.each(function(){
    input+='<a href="#none">'+'</a>'
    $indicators.html(input);
  })

  update()
  start()

  $indicators.find('a').click(function(e){
    e.preventDefault();
    let idx=$(this).index() 
    gotoSldier(idx)
    $(this).addClass('active').siblings().removeClass('active')
  })

  function gotoSldier(idx){
    $mainImgs.stop().animate({'left':-100*idx+'%'},1000)
    currentIdx=idx
    update()
  };

  $mainBtn.find('a').click(function(){
    if($(this).hasClass('main_btn_l')){
      gotoSldier(currentIdx-1)
    }else{
      gotoSldier(currentIdx+1)
    }
  });

  function update(){
    if(currentIdx==0){
      $mainBtnL.addClass('disabled')
    }else{
      $mainBtnL.removeClass('disabled')
    }
    if(currentIdx==mainCount-1){
      $mainBtnR.addClass('disabled')
    }else{
      $mainBtnR.removeClass('disabled')
    }
    $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
  }

  function start(){
    timer=setInterval(function(){
      let nextIdx=(currentIdx+1)%mainCount
      gotoSldier(nextIdx)
    },3800)
  }

    //main slide
    // let num=0;
    // $('.main_img').stop().animate({'left':num},300)
  
    // setInterval(function(){
    //   if(num<2){
    //     num++
    //   }else{
    //     num=0;
    //   }
    //   $('.main_img').stop().animate({'left':-100*num+'%'},400)
    // },3800);
  
  //new
  const $newBtnA=$('.new_btn>a'),
  $newImgs=$('.new_imgs')
  $newBtnA.eq(0).addClass('disabled')

  $newBtnA.eq(1).click(function(){
    $newImgs.stop().animate({'left':'-100%'},800)
    $newBtnA.removeClass('disabled')
    $newBtnA.eq(1).addClass('disabled')
  });
  $newBtnA.eq(0).click(function(){
    $newImgs.stop().animate({'left':'0'},800)
    $newBtnA.removeClass('disabled')
    $newBtnA.eq(0).addClass('disabled')
  });

  //best
  $('.best_a').show()
  $('.best_list>li').eq(0).addClass('under')
  const contD=$('.cont_wrap>div')
  let $bestL=$('.best_list>li')

  $bestL.eq(0).click(function(){
    $bestL.removeClass('under')
    $(this).addClass('under')
    contD.hide()
    $('.best_a').show()
  });
  $bestL.eq(1).click(function(){
    $bestL.removeClass('under')
    $(this).addClass('under')
    contD.hide()
    $('.best_j').show()
  });
  $bestL.eq(2).click(function(){
    $bestL.removeClass('under')
    $(this).addClass('under')
    contD.hide()
    $('.best_w').show()
  });
  $bestL.eq(3).click(function(){
    $bestL.removeClass('under')
    $(this).addClass('under')
    contD.hide()
    $('.best_b').show()
  });
  $bestL.eq(4).click(function(){
    $bestL.removeClass('under')
    $(this).addClass('under')
    contD.hide()
    $('.best_c').show()
  });

  //centerbanner

  let $cenB=$('.best').offset().top

  $(window).resize(function(){
    let $cenB=$('.best').offset().top
    let win=$(window),
    winWid=win.width()

    if(winWid<=486){
      $(window).scroll(function(){
        if($(window).scrollTop()>=$cenB){
          $('.center_banner_txt').animate({'left':'-29%'},1000)
          $('.center_banner_r').animate({'top':'50%'},2000)
        }
      })
    }else if(winWid<=768){
      $(window).scroll(function(){
        if($(window).scrollTop()>=$cenB){
          $('.center_banner_txt').animate({'left':'-4%'},1000)
          $('.center_banner_r').animate({'top':'50%'},2000)
        }
      })
    }else{
      $(window).scroll(function(){
        if($(window).scrollTop()>=$cenB){
          $('.center_banner_txt').animate({'left':'0'},1000)
          $('.center_banner_r').animate({'top':'52%'},2000)
        }
      })
    }
  }).resize()

  // $(window).scroll(function(){
  //   if($(window).scrollTop()>=$cenB){
  //     $('.center_banner_txt').animate({'left':'0'},1000)
  //     $('.center_banner_r').animate({'top':'52%'},2000)
  //   }
  // })

  // exhibitions
  let exnum=0;
  $('.ex_img2').animate({'left':exnum},300)

  setInterval(function(){
    if(exnum<2){
      exnum++
    }else{
      exnum=0;
    }
    $('.ex_img2').stop().animate({'left':-100*exnum+'%'},400)
  },3800);

  //btm_banner
  let $btmB=$('.exhibitions').offset().top
  $(window).scroll(function(){
    if($(this).scrollTop()>=$btmB){
      $('.btm_txt').stop().animate({'left':'29%'},1000)
      $('.btm_item').stop().animate({'right':'15%'},1400)
    }
  })

  //goTop
  $('.goTop').click(function(){
    $('html').stop().animate({'scrollTop':0})
  })
}); //ready