function checkAll1() {

  var inputs = document.querySelectorAll('.checkbox');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }

  this.onclick = uncheckAll1;
}

function uncheckAll1() {
  var inputs = document.querySelectorAll('.checkbox');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  this.onclick = checkAll1;
}

var el = document.getElementById('menu');
el.onclick = checkAll1;
