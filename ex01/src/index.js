var capsLock = false;
var shift = false;
var text = "";
var writeText = document.getElementById("write-text");

function smallOrLarge() {
  if (capsLock === false) {
    capsLock = true;
  } else {
    capsLock = false;
  }
  return capsLock;
}
function oneBig() {
  if (shift === false) {
    shift = true;
  } else {
    shift = false;
  }
  return shift;
}

function clicked(value) {
  if (capsLock === false && shift === false) {
    text += value;
    writeText.innerHTML = text;
  } else if (capsLock === false && shift === true) {
    text += value.toUpperCase();
    writeText.innerHTML = text;
    shift = false;
  } else if (capsLock === true && shift === false) {
    text += value.toUpperCase();
    writeText.innerHTML = text;
  } else if (capsLock === true && shift === true) {
    text += value;
    writeText.innerHTML = text;
    shift = false;
  }
}

function addDash() {
  text += "-";
  writeText.innerHTML = text;
}

function addUnderScore() {
  text += "_";
  writeText.innerHTML = text;
}

function alertIt() {
  alert(text);
}

function backSpace() {
  text = text.slice(0, -1);
  writeText.innerHTML = text;
}

function newRow() {
  text += "\n";
  writeText.innerHTML = text;
}

//console.log(aaa)
