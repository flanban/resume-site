$( document ).ready(function() {
    $(".square-normal").click(function (e){
      e.preventDefault;
      $(this).children('div').fadeToggle('slow');
    });
});
