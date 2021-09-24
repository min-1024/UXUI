$(document).ready(function(){
  //gnb
  $('.gnb>li,.gnb_bg').mouseenter(function(){
    $('.sub,.gnb_bg').stop().slideDown()
  }).mouseleave(function(){
    $('.sub,.gnb_bg').stop().slideUp()
  })

  //main
  const $mainWrap=$('.main_wrap'),
  $main=$('.main'),
  $mainimg=$main.find('a'),
  $indicators=$mainWrap.find('.indicators'),
  mainCount=$mainimg.length

  let currentIdx=0

  update()
  start()

  $indicators.find('a').click(function(e){
    e.preventDefault();
    let idx=$(this).index() 
    gotoSldier(idx)
    $(this).addClass('active').siblings().removeClass('active')
  })

  function gotoSldier(idx){
    $main.stop().animate({'left':-100*idx+'%'},1000)
    currentIdx=idx
    update()
  }

  function update(){
    $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
  }

  function start(){
    timer=setInterval(function(){
      let nextIdx=(currentIdx+1)%mainCount
      gotoSldier(nextIdx)
    },4000)
  }

  //menu
  let $menu=$('.main').offset().top
  $(window).scroll(function(){
    if($(this).scrollTop()>=$menu){
      $('.menu_btm>li').eq(0).animate({'top':'-3%'},500)
      $('.menu_btm>li').eq(1).animate({'top':'-20%'},500)
      $('.menu_btm>li').eq(2).animate({'top':'10%'},1000)
      $('.menu_btm>li').animate({'opacity':'1'},1000)
    }
  })

  //event
  let $event=$('.menu_btm').offset().top
  $(window).scroll(function(){
    if($(this).scrollTop()>=$event){
      $('.event_wrap>img').animate({'opacity':'1','left':'24.5%'},1000)
    }
  })
})