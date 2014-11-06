$(document).mousemove(function (e){
  $("#mousemove").css({
    left: e.pageX + 20,
    top: e.pageY + 20
  });
});