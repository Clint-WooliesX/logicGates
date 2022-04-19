let switchState = [0,0];

function clickSwitch(event) {
theLight = document.body.querySelectorAll(".switch-holder");
theSwitch = document.body.querySelectorAll(".switch-slide");
invertText = document.body.querySelectorAll(".labels");
  if (switchState[event]) {
    theLight[event].className = "switch-holder";
    theSwitch[event].className = "switch-slide";
    invertText[event].className = "labels";
    switchState[event] = 0;
  } else {
    theLight[event].className += " switch-holder--switch-on";
    theSwitch[event].className += " switch-slide--switch-on";
    invertText[event].className += " labels--switch-on";
    switchState[event] = 1;
  }

for(item in switchState){
  console.log("Switch:"+item+" = "+item)
}
}
