let switchState = { switch1: 0 };

function clickSwitch() {
  if (switchState.switch1) {
    theLight = document.getElementById("switchHolder");
    theLight.className = "switch-holder";
    theSwitch = document.getElementById("switchSlide");
    theSwitch.className = "switch-slide";
    invertText = document.getElementById("labels");
    invertText.className = "labels";
    switchState.switch1 = 0;
    console.log(switchState);
  } else {
    theLight = document.getElementById("switchHolder");
    theLight.className += " switch-holder--switch-on";
    theSwitch = document.getElementById("switchSlide");
    theSwitch.className += " switch-slide--switch-on";
    invertText = document.getElementById("labels");
    invertText.className += " labels--switch-on";
    switchState.switch1 = 1;
    console.log(switchState);
  }
}
