$(document).on("scroll", function() {
  var pageTopVal = $(document).scrollTop();
  var pageBottomVal = pageTopVal + $(window).height();
  var logos = $(".logo");

  for (var i = 0; i < logos.length; i++) {

    if ($(logos[i]).position().top < pageBottomVal) {
      $(logos[i]).addClass("visible");
    } else {
      $(logos[i]).removeClass("visible");
    }
  }
});


function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}