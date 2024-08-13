var hralarm;
var minalarm;
var secalarm;


  
document.getElementById("alarmset").onclick = function() {
  
    hralarm=document.getElementById("alarmhrs").value;
    minalarm=document.getElementById("alarmmins").value;
    secalarm=document.getElementById("alarmsecs").value;
  
    chrome.runtime.sendMessage({  //send a message to the background script
      from: "alarmtimer",
    
      
      firsteltala: hralarm,
      secondeltala:minalarm ,
      thirdeltala: secalarm,
    
  
    });
    alert("Alarm Saved");
  }
  const deg=6;
  const hr=document.querySelector('#ahr');
  const mn=document.querySelector('#amn');
  const sc=document.querySelector('#asc');
  setInterval(() => {
      let day=new Date();
      let hh=day.getHours()*30;
      let mm=day.getMinutes()*deg;
      let ss=day.getSeconds()*deg;
      hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
      mn.style.transform=`rotateZ(${mm}deg)`;
      sc.style.transform=`rotateZ(${ss}deg)`;

  })
