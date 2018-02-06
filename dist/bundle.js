/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var css = __webpack_require__(1);

console.log('hello');

/** Pomodoro Clock **/

// $(document).ready(function(){
//   var oBreak = {duration:3, tag:"Break Time"};
//   var oPomo = {duration:10, tag:"Session"};
//   var timer = null;
//   var audioSrc = "doorbell.wav";
//   var sumDuration = 0;
//   var sumMsg = "";
//   /** display default breaktime & pomotime **/
//   $("#controlBreak").html(oBreak.duration);
//   $("#controlPomo").html(oPomo.duration);
//   $("#pomoClock").html(displayTime(oPomo.duration*60));
//
//
//   $("#addtodo").click(function(){
//     oPomo.tag = $("#newtask").val();
//     $("#tagName").html(oPomo.tag);
//   });
//
//   $(".startControl").click(function(){
//    if(timer == null){
//      countDown(oPomo, oBreak);
//    }
//    else{
//      return 0;
//    }
//   });
//
//   // when click on stop button - stop the timer
//   $("#stop").click(function(){
//     clearTimer();
//   });
//
//   $("#increaseBreak").click(function(){
//     clearTimer();
//     oBreak.duration = controlDuration(oBreak.duration, "++");
//     $("#controlBreak").html(oBreak.duration);
//   });
//   $("#decreaseBreak").click(function(){
//     clearTimer();
//     oBreak.duration = controlDuration(oBreak.duration, "--");
//     $("#controlBreak").html(oBreak.duration);
//   });
//   $("#increasePomo").click(function(){
//     clearTimer();
//     oPomo.duration = controlDuration(oPomo.duration, "++");
//     $("#controlPomo").html(oPomo.duration);
//     $("#pomoClock").html(displayTime(oPomo.duration*60));
//   });
//   $("#decreasePomo").click(function(){
//     clearTimer();
//     oPomo.duration = controlDuration(oPomo.duration, "--");
//     $("#controlPomo").html(oPomo.duration);
//     $("#pomoClock").html(displayTime(oPomo.duration*60));
//   });
//
//
//   /** main functions **/
//   function controlDuration(duration, action){
//     if(action == "++"){
//       return (duration < 360) ? (duration + 1) : duration;
//     }
//     else{
//       return (duration > 1) ? (duration - 1) : duration;
//     }
//   }
//
//   function countDown(currentObj,nextObj){
//     var tag = currentObj.tag;
//     var time = currentObj.duration * 60 * 1000;
//     var now = Date.now();
//     var then = now + time;
//     displayTime(currentObj.duration * 60 - 1);
//
//     timer = setInterval(function(){
//       var secondsLeft = Math.floor((then - Date.now())/1000);
//       if(secondsLeft < 0){
//         playAudio();
//         if(tag != "Break Time"){
//           sumDuration += time;
//           sumMsg = "You have worked on "+ tag + " for " + Math.round(sumDuration/1000/60) + " minutes.";
//           alert("Time to take a break sweatheart ♥\nDon't work too hard ;)");
//           $("#sumMsg").html(sumMsg);
//         }
//         clearInterval(timer);
//         countDown(nextObj,currentObj);
//       }
//       else {
//         $("#tagName").html(tag);
//         $("#pomoClock").html(displayTime(secondsLeft));
//         document.title = tag + " " + displayTime(secondsLeft);
//       }
//     }, 1000);
//   }
//
//   function displayTime(seconds){
//     var hour = (seconds>3600) ? Math.floor(seconds/60/60) : 0;
//     var minute = Math.floor(seconds/60);
//     var second = seconds%60;
//     var displayHour = (hour == 0) ? "" : (addZero(hour) + ":");
//     var time = displayHour + addZero(minute) + ":" + addZero(second);
//     return time;
//   }
//
//   function clearTimer (){
//       clearInterval(timer);
//       timer = null;
//   }
//
//   function addZero(num){
//     return(num<10) ? ("0"+num) : num;
//   }
//
//   function playAudio(){
//     var audio = new Audio();
//     audio.addEventListener("load",function(){
//       audio.play();
//     }, true);
//     audio.src = audioSrc;
//     audio.autoplay = true;
//   }
//
// }); // document.ready

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);