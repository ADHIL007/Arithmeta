function onButtonClick(){
  document.getElementById('hide1').className="show";
  document.getElementById('hide4').className="hide";
  }
function calc(){
    var selected =document.getElementById('select');
    var txt = selected.options[selected.selectedIndex].value;
    var a =document.getElementById('t1').value;
    var b =document.getElementById('t2').value;
  
    var c;
    switch(txt)
    {
        case "+" : c= (parseInt(a)+ parseInt(b));
                  break;
        case "-" : c= (parseInt(a)-parseInt(b));
                  break;
        case "*" : c= (parseInt(a)*parseInt(b));
                  break;   
        case "/" : c= (parseInt(a)/parseInt(b));
                  break;  
        case "%" :c = (parseInt(a)% parseInt(b));
                  break;                             
    }
    document.getElementById('hide3').className="show";
    document.getElementById('hide2').value=c;
  
}
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 700; 
} 

function makeSmall() { 
    myVideo.width = 450; 
} 

function makeNormal() { 
    myVideo.width = 590; 
} 
