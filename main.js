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
  var oBreak = {breakDuration:3, tag:"Break Time"};
  var oPomo = {pomoDuration:10, tag:"Pomodoro Time"};
  var timer = null;
  /** display default breaktime & pomotime **/
  $("#controlBreak").html(oBreak.breakDuration);
  $("#controlPomo").html(oPomo.pomoDuration);
  $("#pomoClock").html(displayTime(oPomo.pomoDuration*60));

  $("#pomoClock").click(function(){
   if(timer == null){
     countDown(oPomo.pomoDuration, oBreak.breakDuration);
   }
   else{
     return 0;
   }
  });

  // when click on stop button - stop the timer
  $("#stop").click(function(){
    clearTimer();
  });

  $("#increaseBreak").click(function(){
    clearTimer();
    oBreak.breakDuration = controlDuration(oBreak.breakDuration, "++");
    $("#controlBreak").html(oBreak.breakDuration);
  });
  $("#decreaseBreak").click(function(){
    clearTimer();
    oBreak.breakDuration = controlDuration(oBreak.breakDuration, "--");
    $("#controlBreak").html(oBreak.breakDuration);
  });
  $("#increasePomo").click(function(){
    clearTimer();
    oPomo.pomoDuration = controlDuration(oPomo.pomoDuration, "++");
    $("#controlPomo").html(oPomo.pomoDuration);
    $("#pomoClock").html(displayTime(oPomo.pomoDuration*60));
  });
  $("#decreasePomo").click(function(){
    clearTimer();
    oPomo.pomoDuration = controlDuration(oPomo.pomoDuration, "--");
    $("#controlPomo").html(oPomo.pomoDuration);
    $("#pomoClock").html(displayTime(oPomo.pomoDuration*60));
  });


  /** main functions **/
  function controlDuration(duration, action){
    if(action == "++"){
      return (duration < 360) ? (duration + 1) : duration;
    }
    else{
      return (duration > 1) ? (duration - 1) : duration;
    }
  }

  function countDown(currentDuration,nextDuration){
    //var tag = ;
    var time = currentDuration * 60 * 1000;
    var now = Date.now();
    var then = now + time;

    timer = setInterval(function(){
      var secondsLeft = Math.floor((then - Date.now())/1000);
      if(secondsLeft == 0){
        clearInterval(timer);
        countDown(nextDuration,currentDuration);
      }
      else {displayTime(secondsLeft);}
    }, 1000);
  }

  function displayTime(seconds){
    var hour = (seconds>3600) ? Math.floor(seconds/60/60) : 0;
    var minute = Math.floor(seconds/60);
    var second = seconds%60;
    var displayHour = (hour == 0) ? "" : (addZero(hour) + ":");
    $("#pomoClock").html(displayHour + addZero(minute) + ":" + addZero(second));
  }

  function clearTimer (){
      clearInterval(timer);
      timer = null;
  }

  function addZero(num){
    return(num<10) ? ("0"+num) : num;
  }

}); // document.ready
