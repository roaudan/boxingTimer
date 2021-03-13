var button = document.getElementById("button");
var time = document.getElementById("time");

var runTime = 180;
var restTime = 30;


function run() {
    setInterval(function () {
      document.getElementById("time").innerHTML = `${runTime}seconds left`
      if(runTime <= 0){
        document.getElementById("time").innerHTML = `${restTime}seconds left`
        if(restTime <= 0){
          runTime = 180;
        } else {
          restTime--;
        }
      } else  {
        runTime--;
      }
    }, 1000);
  }
  

  