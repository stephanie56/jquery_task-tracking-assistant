// Pomodoro clock to-do
// var defaultTime = 25; var defaultBreak = 5;
// 1. onclick [somewhere] -> start the clock
// - function startClock();
// - function timer();
// - function displayTime();
// 2. onclick [somewhere] -> stop the clock
// -  function stopClock();
// 3. onclick [somewhere] to increase or decrease the # of defaultTime and defaultBreak;
// - function increaseNum();
// - function decreaseNun();

$(document).ready(function(){
  var displayTime = parseInt($("#timer").html());
  var tempt;
  $("#increase").click(function(){
   displayTime++;
   alert(displayTime);
  });
  $("#decrease").click(function(){
    displayTime--;
    alert(displayTime);
  });

  
});
