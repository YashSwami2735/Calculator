function clearScreen() {
  document.getElementById("result").value = "";
}

function yami(value) {
  let res = document.getElementById("result");
  if(res.value == "undefine") {
    res.value = "";
  }
  res.value += value;
}
