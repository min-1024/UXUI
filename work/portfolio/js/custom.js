$(document).ready(function(){
  $('.twosome>li').eq(1).click(function(){
    $('.twosomeC').fadeIn()
  })
  $('.twosomeC_img>p').click(function(){
    $('.twosomeC').fadeOut()
  })

  $('.clue>li').eq(1).click(function(){
    $('.clueC').fadeIn()
  })
  $('.clueC_img>p').click(function(){
    $('.clueC').fadeOut()
  })
})