$( document ).ready(function() {
    $(".square-normal").click(function (e){
      e.preventDefault;
      $('.drop').fadeOut(); //close all subnav b4 opening another
      $(this).children('div').fadeIn();
    });
    
    $(".close-btn").click(function (e){
      e.preventDefault;

      // does sketchy ajjax things. why is this here?
      e.stopPropagation();
      $('.drop').fadeOut();
    });
});
