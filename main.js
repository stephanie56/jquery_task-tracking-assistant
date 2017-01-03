// Pomodoro clock to-do
// var defaultTime = 25; var defaultBreak = 5;
// 1. onclick [somewhere] -> start the clock
// - function startClock();
// - function timer();
// - function displayTime();
// 2. onclick [somewhere] -> stop the clock
// -  function stopClock();
// (done) 3. onclick [somewhere] to increase or decrease the # of defaultTime and defaultBreak;
// - function increaseNum();
// - function decreaseNun();

$(document).ready(function(){
  var breakDuration = 3;
  var pomoDuration = 10;
  /** display default breaktime & pomotime **/
  $("#controlBreak").html(breakDuration);
  $("#controlPomo").html(pomoDuration);
  $("#pomoClock").html(displayTime(pomoDuration*60));

  $("#pomoClock").click(function(){
   countDown(pomoDuration);
  });

  $("#increaseBreak").click(function(){
    breakDuration = controlDuration(breakDuration, "++");
    $("#controlBreak").html(breakDuration);
  });
  $("#decreaseBreak").click(function(){
    breakDuration = controlDuration(breakDuration, "--");
    $("#controlBreak").html(breakDuration);
  });
  $("#increasePomo").click(function(){
    pomoDuration = controlDuration(pomoDuration, "++");
    $("#controlPomo").html(pomoDuration);
    $("#pomoClock").html(displayTime(pomoDuration*60));
  });
  $("#decreasePomo").click(function(){
    pomoDuration = controlDuration(pomoDuration, "--");
    $("#controlPomo").html(pomoDuration);
    $("#pomoClock").html(displayTime(pomoDuration*60));
  });

});

function controlDuration(duration, action){
  if(action == "++"){
    return (duration < 360) ? (duration + 1) : duration;
  }
  else{
    return (duration > 1) ? (duration - 1) : duration;
  }
}

function countDown(duration){
  var time = duration * 60 * 1000;
  var now = Date.now();
  var then = now + time;
  setInterval(function(){
    var secondsLeft = Math.floor((then - Date.now())/1000);
    displayTime(secondsLeft);
  },1000);

}

function displayTime(seconds){
  var hour = (seconds>3600) ? Math.floor(seconds/60/60) : 0;
  var minute = Math.floor(seconds/60);
  var second = seconds%60;
  var displayHour = (hour == 0) ? "" : (addZero(hour) + ":");
  $("#pomoClock").html(displayHour + addZero(minute) + ":" + addZero(second));
}

function addZero(num){
  return(num<10) ? ("0"+num) : num;
}
