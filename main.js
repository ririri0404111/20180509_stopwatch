(function (){
  'use strict';
  window.addEventListener('load',function(){

    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var startTime;
    var progressTime;


    minute.addEventListener('click',function(){

    })


    function update () {
      var elapsedTime;
      elapsedTime = (Date.now() - startTime) / 1000;
      timer.textContent = elapsedTime;
    }


    start.addEventListener('click',function(){
      startTime = Date.now();
      progressTime = setInterval(update, 30);
    });

    stop.addEventListener('click',function(){
      var stopTime;
      clearInterval(progressTime);
      stopTime = (Date.now() - startTime) / 1000;
      timer.textContent = stopTime;
    });

    reset.addEventListener('click',function(){
      timer.textContent = '00:00.000';
;    })

  });
})();
