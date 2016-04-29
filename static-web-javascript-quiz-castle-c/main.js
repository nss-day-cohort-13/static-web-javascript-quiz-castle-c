

function tree(branch) {

  var pyr = "";

  if ((branch.spaces) === "" || (branch.charc) === "") {
    alert("Both fields must have a value");
}

  for (var i = 0; i < branch.spaces; i++) {
    pyr += " ".repeat(branch.spaces - i - 1) + branch.charc.repeat(i + (i + 1)) + "\n";

 } console.log(pyr);
}


var button = document.getElementById("but")
  button.addEventListener("click", tree2);

document.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    tree2();
 }
})


function tree2() {

 var intoTree = {
  spaces: document.getElementById("spaces").value,
  charc: document.getElementById("charc").value
 }
   tree(intoTree);
}
