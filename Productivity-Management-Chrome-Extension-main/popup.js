
    var hr=9999;
    var min=9999;
    var sec=9999;
    var hrpop=9999;
    var minpop=9999;
    var secpop=9999;
    var l=0;
    var m=0;
    var n=0;
    
    
    
    
    const countdownElt=document.getElementById('countdown');
    setInterval(updateCountdown,1000);
    let bgpage=chrome.extension.getBackgroundPage();
    function updateCountdown()
{
   
     hr=bgpage.hour;
     min=bgpage.minutes;
     sec=bgpage.seconds;
     hrpop=bgpage.hourspop;
     minpop=bgpage.minutespop;
     secpop=bgpage.secondspop;
     
     
     


    countdownElt.innerHTML=`${hr}:${min}: ${sec}`;
    // console.log(`${hr}:${min}: ${sec}`);
}
// document.getElementById("set").onclick = function() 
// {

//     // chrome.tabs.query({active: true, currentWindow: true}, gotTabs);
//     // function gotTabs(tabs) {
//             let hrmsg={
//                 txt:hrs.value()
//             };
//             let minmsg={
//                 txt:mins.value()
//             };
//             let secmsg={
//                 txt:secs.value()
//             };
//           chrome.runtime.sendMessage();
//           chrome.runtime.sendMessage(tabs[0].id,minmsg);
//           chrome.runtime.sendMessage(tabs[0].id,secmsg);
//         }
      
//   }
document.getElementById("set").onclick = function() {
  l=document.getElementById("hrs").value;
  m=document.getElementById("mins").value;
n=document.getElementById("secs").value;

  chrome.runtime.sendMessage({  //send a message to the background script
    from: "popup",
  
    
    first: l,
    second:m ,
    third: n,
    fourth:hrpop,
    fifth:minpop,
    sixth:secpop

  });

}
document.getElementById("Blocksite").onclick = function() {
  chrome.runtime.sendMessage({  //send a message to the background script
    from: "popupblock"

  });
}
document.getElementById("Todolist").onclick = function() {
  chrome.runtime.sendMessage({  //send a message to the background script
    from: "popuptodolist"

  });
}
document.getElementById("Breaktime").onclick = function() {
  chrome.runtime.sendMessage({  //send a message to the background script
    from: "popupBreaktime"

  });
}
document.getElementById("alarm").onclick = function() {
  chrome.runtime.sendMessage({  //send a message to the background script
    from: "popupalarm"

  });
}



