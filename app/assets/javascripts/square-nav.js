$( document ).ready(function() {
    $(".square-normal").click(function (e){
      e.preventDefault;
      $(this).children('div').fadeIn();
    });
    
    $(".close-btn").click(function (e){
      e.preventDefault;
      e.stopPropagation();
      $('.drop').fadeOut();
    });
});
