$( document ).ready(function() {
  
  
  function hideLetters() {
    $('.big-letter').fadeOut()
  }
  function showLetters() {
    $('.big-letter').show()
  }
  
  $(".square-normal").click(function (e){
    e.preventDefault;
    $(this).children('div').fadeIn();
    
    //hideLetters()
  });
  
  $(".close-btn").click(function (e){
    e.preventDefault;
    // does sketchy ajjax things. why did i put this here?
    e.stopPropagation();
    $('.drop').fadeOut();
    
    //showLetters()
  });
});
