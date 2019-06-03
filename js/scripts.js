function solve() {
  var dime1 = parseFloat(document.getElementById("dimension1").value);
  var dime2 = parseFloat(document.getElementById("dimension2").value);
  var dime3 = parseFloat(document.getElementById("dimension3").value);

  var arr = [dime1, dime2, dime3];
  if (!(arr[0]) || !(arr[1]) || !(arr[2])) {
    document.getElementById("img").src = "image/img.gif";
    document.getElementById("name").innerHTML = "Please input dimensions";
  } else if ((arr[0] + arr[1]) < arr[2] || (arr[0] + arr[2]) < arr[1] || (arr[1] + arr[2]) < arr[0]) {
    document.getElementById("img").src = "image/img.gif";
    document.getElementById("name").innerHTML = "Not a triangle";
  } else if ((arr[0] === arr[1] && arr[1] !== arr[2]) || (arr[0] === arr[2] && arr[2] !== arr[1]) || (arr[1] === arr[2] && arr[2] !== arr[0])) {
    document.getElementById("img").src = "image/isosceles.png";
    document.getElementById("name").innerHTML = "isosceles triangle";
  } else if ((arr[0] === arr[1]) && (arr[1] === arr[2])) {
    document.getElementById("img").src = "image/equilateral.png";
    document.getElementById("name").innerHTML = "Equilateral triangle";
  } else {
    document.getElementById("img").src = "image/scalene.png";
    document.getElementById("name").innerHTML = "Scalene triangle";
  }
};
