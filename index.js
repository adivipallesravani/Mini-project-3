let display = document.getElementById("display");
function appendNumber(number) {
  display.value += number;
}
function evalFunction() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "undefined";
  }
}
function slice() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}
