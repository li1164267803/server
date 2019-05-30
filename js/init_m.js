// window.onload = function(){
//   getRem(750,100)
// };
// window.onresize = function(){
//   getRem(750,100)
// };
// function getRem(pwidth,prem){
//   var html = document.getElementsByTagName("html")[0];
//   var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//   html.style.fontSize = oWidth/pwidth*prem + "px";
// }

// 移动端适配
(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if (clientWidth >= 750) {
              docEl.style.fontSize = '100px';
          } else {
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
          }
      };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
