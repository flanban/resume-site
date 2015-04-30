function showSubNav(e) {
  $(e).children('div').fadeIn();
}  
function hideSubNav(e) {
  $('.drop').fadeOut();
}
$( document ).ready(function() {




  // SHOW SUBNAV
  $(".square-normal").click(function ( e){
    e.preventDefault;
    showSubNav(this, e);
  });
  
  // CLOSE SUBNAV
  $(".close-btn").click(function (e){
    e.preventDefault;
    e.stopPropagation(); // does sketchy ajjax things. why did i put this here?
    hideSubNav(this, e)
  });
});
