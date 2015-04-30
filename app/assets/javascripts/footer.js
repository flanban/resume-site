$( document ).ready(function() {


  function fadeFooterOut() {
    $('footer').css('opacity','.3')
  }
  
  function fadeFooterIn() {
    $('footer').css('opacity','1')
    
  }

  $("#square-nav").mouseenter(function(){
      fadeFooterOut()
  }).mouseleave(function(){
      fadeFooterIn()
  });

});