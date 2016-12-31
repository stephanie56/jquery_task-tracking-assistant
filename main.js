
function countDown(seconds){
  var now = Date.now();
  var then = now + seconds * 1000;

  setInterval(function(){
  var secondsLeft = Math.floor((then - Date.now())/1000);
  console.log(secondsLeft);
  }, 1000);
}
