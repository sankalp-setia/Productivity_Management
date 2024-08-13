const startingminutes=0;
let time=startingminutes*3600;
const countdownElt=document.getElementById('countdown');
setInterval(updateCountdown,1000);
function updateCountdown()
{
    var timeminutes=time%3600;
    let hour=Math.floor(time/3600);
    let minutes=Math.floor(timeminutes/60);
    let seconds=time%60;
    seconds=seconds<10 ? '0'+seconds:seconds;
    minutes=minutes<10 ? '0'+minutes:minutes;
    hour=hour<10 ? '0'+hour:hour;
    countdownElt.innerHTML=`${hour}:${minutes}: ${seconds}`;
    time++;
}
if (seconds==30) {
alert("hei");
    
}
