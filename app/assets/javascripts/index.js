function initSlider() {
  $('.project-slider').royalSlider({
    controlNavigation:'none',
    imageScaleMode:'fit',
    imageScalePadding:0,
    imageAlignCenter:true,
    slidesSpacing:0,
    globalCaption:true,
    arrowNav:true,
    loop:false,
    usePreloader: false
  });
}
$( document ).ready(function() {

  function showSlider() {
    $('#project-slider').css({'margin-top': $('body').scrollTop()}).slideDown();
    $('html, body').css('overflow', 'hidden');
  }
  function hideSlider() {
    $('#project-slider').fadeOut();
    $('html, body').css('overflow', 'auto');
  }
  function clearSlider() {
    $('.resume-slider').royalSlider('destroy')
    $('#project-slider').empty();
    
  }
  initSlider()
  
  function sliderStart() {
    showSlider();
  }
  function sliderEnd() {
    hideSlider();
    clearSlider();
  }




  $('.slider-link').click(function() {
    sliderStart();
  });
  $("body").on("click",".close-slider", function(e){
    // autohide dropdown items $('.drop').hide();
    sliderEnd();
    if ($(this).hasClass('resume-close')) {
      hideSubNav(this, e)
    }
  });

});