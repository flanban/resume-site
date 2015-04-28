$( document ).ready(function() {
    $(".square-normal").click(function (e){
      e.preventDefault;
      $(this).children('div').fadeIn();
    });
    
    $(".close-btn").click(function (e){
      e.preventDefault;

      // does sketchy ajjax things. why is this here?
      e.stopPropagation();
      $('.drop').fadeOut();
    });
});
