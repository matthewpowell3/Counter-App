let number = 0;

function counterFun() {
  number++;
  document.getElementById('number').innerHTML = number;
  document.getElementById('number').style.color = 'lightgreen';
}

function resetFun() {
  number = 0;
  document.getElementById('number').innerHTML = number;
  document.getElementById('number').style.color = 'white';
}

function subtractFun() {
  number--;
  document.getElementById('number').innerHTML = number;
  document.getElementById('number').style.color = 'red';
}
