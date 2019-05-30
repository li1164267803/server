
var fenjiTop = $('.fenji').offset().top;
console.log(fenjiTop)

$('.logo_btn').on('touchstart ', function(){
  $('.btn_nav').toggle()
  return false; // 阻止事件冒泡
})
$(document).on('touchstart', function () { 
  $('.btn_nav').hide().stop()
 })

// 点击nav滑动事件
$('.btn_nav p:nth-child(1)').on('touchstart',function(){
  move.call(this, '.header')
})
$('.btn_nav p:nth-child(2)').on('touchstart',function(){
  move.call(this, '.liu')
})
$('.btn_nav p:nth-child(3)').on('touchstart',function(){
  move.call(this, '.xuesheng')
})
$('.btn_nav p:nth-child(4)').on('touchstart',function(){
  move.call(this, '.zhuanjia')
})
$('.btn_nav p:nth-child(5)').on('touchstart',function(){
  move.call(this, '.evaluate')
})


function move(id) { 
  console.log('-------------',id)
  console.log(this)
  $('html,body').animate({scrollTop:$(id).offset().top},600)
  $('.btn_nav').toggle()
  $(this).addClass('active')
         .siblings()
         .removeClass('active')
 }




