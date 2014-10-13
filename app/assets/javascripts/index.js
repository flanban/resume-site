function initSlider() {
  $('.project-slider').royalSlider({
    controlNavigation:'none',
    imageScaleMode:'fill',
    imageScalePadding:0,
    imageAlignCenter:false,
    slidesSpacing:0,
    globalCaption:true,
    loop:true
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
  function initSlider() {
    $('.project-slider').royalSlider({
      controlNavigation:'none',
      imageScaleMode:'fill',
      imageScalePadding:0,
      imageAlignCenter:false,
      slidesSpacing:0,
      globalCaption:true,
      loop:true
    });
  }
  
  function sliderStart() {
    showSlider();
  }
  function sliderEnd() {
    hideSlider();
    clearSlider();
  }




  $('.project-link').click(function() {
    sliderStart();
  });

  $('.close-slider').click(function() {
    sliderEnd();
  });

});