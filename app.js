var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var millisec = document.getElementById("msec");
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer(){   

    msec++
    if(msec<10){
        msec = 0+""+msec;
    }else{
        msec;
    }
    millisec.innerHTML = msec

    if(msec>=99){
        sec++;
        if(sec<10){
            sec = 0+""+sec;
        } else{
            sec;
        }
        seconds.innerHTML = sec
        msec = 0
    }

    

    if(sec>=60){
        min++;
        if(min<10){
            min = 0+""+min;
        } else{
            min;
        }    
        minutes.innerHTML = min
        sec = 0;
    }

    

}
var start = document.getElementById("btn1");
var pause = document.getElementById("btn2");
 function On(){
    interval = setInterval(timer,10);
    btn1.disabled = true;
    btn2.disabled = false;
    btn3.disabled = false;

}
function stop(){
    clearInterval(interval);
    btn1.disabled = false;
    btn2.disabled = true;
    btn3.disabled = false;

}
function reset(){
    min = 0+""+0
    sec = 0+""+0
    msec = 0+""+0
    minutes.innerText = min
    seconds.innerText = sec
    millisec.innerText = msec
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = true;
}


