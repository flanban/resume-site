$(document).ready(function() {
  // One Page Scroll
  $(".main").onepage_scroll({
     sectionContainer: "section",
     easing: "ease",
     animationTime: 1000,
     pagination: true,
     updateURL: false
  });
  
  
  var color = 'green',
      pageType = $( "#page-type option" ).val()
      pageState = 'after'
      device = 'desktop'

  // Before and After page 
  $(".device-option").click(function (){
    $(this).addClass('active').siblings().removeClass('active');
    var deviceName = $(this).text();
    var frameSrc =  "/assets/featured-sbnu/frame-" + deviceName + ".png"
    $('#device-frame').attr('src',frameSrc);
    //set the current src
     device = $(this).attr('id')  
    // set url 
     reload_script();
  });

  $(".page-state-option").click(function (){
    //set the current src
    pageState = $(this).attr('id');
    $(this).addClass('active').siblings().removeClass('active');
    // set url 
    reload_script();
  });

  $(".color-option").click(function (){
    //set the current src
    color = $(this).text()
    $(this).addClass('active-color').siblings().removeClass('active-color');
    // set url 
    reload_script();
  });

  $("#page-type").on("change", function() {
    pageType = this.value;
    // set url 
    reload_script();
  });

  function reload_script()
  {
    updateImageSrc()//run again
  }
  function updateImageSrc()
  {
    imageSrc = "/assets/featured_sbnu/" + device + "-" + pageType + "-" + color + "-" + pageState + ".jpg"
    $(".screengrab").attr("src",imageSrc);
  }

  
});
