/** Pomodoro Clock **/

$(document).ready(function(){
  var oBreak = {duration:3, tag:"Break Time"};
  var oPomo = {duration:10, tag:"Pomodoro Time"};
  var timer = null;
  /** display default breaktime & pomotime **/
  $("#controlBreak").html(oBreak.duration);
  $("#controlPomo").html(oPomo.duration);
  $("#pomoClock").html(displayTime(oPomo.duration*60));

  $("#pomoClock").click(function(){
   if(timer == null){
     countDown(oPomo, oBreak);
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
    oBreak.duration = controlDuration(oBreak.duration, "++");
    $("#controlBreak").html(oBreak.duration);
  });
  $("#decreaseBreak").click(function(){
    clearTimer();
    oBreak.duration = controlDuration(oBreak.duration, "--");
    $("#controlBreak").html(oBreak.duration);
  });
  $("#increasePomo").click(function(){
    clearTimer();
    oPomo.duration = controlDuration(oPomo.duration, "++");
    $("#controlPomo").html(oPomo.duration);
    $("#pomoClock").html(displayTime(oPomo.duration*60));
  });
  $("#decreasePomo").click(function(){
    clearTimer();
    oPomo.duration = controlDuration(oPomo.duration, "--");
    $("#controlPomo").html(oPomo.duration);
    $("#pomoClock").html(displayTime(oPomo.duration*60));
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

  function countDown(currentObj,nextObj){
    var tag = currentObj.tag;
    var time = currentObj.duration * 60 * 1000;
    var now = Date.now();
    var then = now + time;

    timer = setInterval(function(){
      var secondsLeft = Math.floor((then - Date.now())/1000) + 1;
      if(secondsLeft == -1){
        clearInterval(timer);
        countDown(nextObj,currentObj);
      }
      else {
        $("#tagName").html(tag);
        displayTime(secondsLeft);}
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
