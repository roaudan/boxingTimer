var button = document.getElementById("button");
var time = document.getElementById("time");

var runTime = 180;
var restTime = 30;
var ring = new Audio('audio/ring.mp3');

function run() {
  document.getElementById("button").style.display = "none";
  ring.play();
    setInterval(function () {
      document.getElementById("now").innerHTML = "exercize time"
      document.getElementById("time").innerHTML = `${runTime}seconds left`
      if(runTime <= -1){
        ring.play();0
        document.getElementById("now").innerHTML = "break time"
        document.getElementById("time").innerHTML = `${restTime}seconds left`
        if(restTime <= 0){
          runTime = 180;
          restTime = 30;
          ring.play();
        } else {
          restTime--;
        }
      } else  {
        runTime--;
      }
    }, 1000);
  }
  
function settings(){
  alert("Settings will be updated soon.")
}