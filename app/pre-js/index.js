var Top = 900;
var Left = 1850;

$(document).ready(function async() {
  setInterval(function () {
    $(".events__inner__skimaster").offset({
      left: Left
    });
    Left--;
    if (Left < -150) {
      Left = 1850;
    }
  }, 1)
  setInterval(function () {
    $(".events__inner__skimaster").offset({
      top: Top
    });
    Top+=0.05;
    if (Top > 1000) {
      Top = 900;
    }
  }, 1)
})
