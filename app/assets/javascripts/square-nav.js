$( document ).ready(function() {
  function is_touch_device() {
    return 'ontouchstart' in window // works on most browsers 
        || 'onmsgesturechange' in window; // works on ie10
  };

  if (!is_touch_device()) {
    $(".square-normal").click(function (e){
      e.preventDefault;
      $(this).children('div').fadeToggle('slow');
    });
  }

});
