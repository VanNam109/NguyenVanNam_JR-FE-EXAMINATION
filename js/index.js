
function getEle(id) {
  return document.getElementById(id);
}

function removeDulicates(number) {
  var x,
    len = number.length,
    out = [],
    obj = {};
  for (x = 0; x < len; x++) {
    obj[number[x]] = 0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}


var number = [1, 2, 2, 3, 4, 6, 7, 8, 6];
var result = removeDulicates(number);


console.log("Input = [" + number + "]");
console.log("Output = [" + result + "]");
getEle('input').innerHTML = number;
getEle('output').innerHTML = result;