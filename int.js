function getData(a, b) {
  console.log("first");
}

function getData(a, b, c) {
  console.log("second");
}

function getData() {
  console.log("third");
}

getData();
getData(1, 2);
getData(1, 2, 3);

/************************* Check string exist or not.  *************************/

var a = "This is sample text";
var b = "sample";

function checkIs(a, b) {
  var result = a.split(" ");
  result.forEach(element => {
    if (element == b) {
      console.log("Match!!" + element);
    }
  });
}
checkIs(a, b);

/************************* Check string exist or not.  *************************/

/************************* Check it is even or odd.  *************************/

function isEven($n) {
  $isEven = true;
  for ($i = 1; $i <= $n; $i++) {
    $isEven = !$isEven;
  }
  return $isEven;
}

// Driver code
$n = 101;
$is = isEven($n) ? "Even" : "Odd";
console.log($is);

/************************* Check it is even or odd.  *************************/

var obj = ["1", "2", "3", "4"];
//add element at end of array
obj[obj.length] = "5";
console.log(obj);

//add element at first of array
obj.unshift("0");
console.log(obj);

/************************* Find the last index of   *************************/

function findLastIndex($str, $x) {
  $index = -1;
  if ($x.length == 1) {
    for ($i = 0; $i < $str.length; $i++) {
      if ($str[$i] == $x) {
        $index = $i;
      }
    }
    return $index;
  } else {
    str = $str.split(" ");
    var len = 1;
    str.forEach(element => {
      if (element == $x) {
        $index = len;
      }
      len = len + element.length + 1;
    });

    return $index;
  }
}

$str = "This is simple test.";
$x = "s";
$index = findLastIndex($str, $x);
if ($index == -1) {
  console.log("Character not found");
} else {
  console.log("Last index is " + $index);
}

/************************* Find the last index of   *************************/

function test(x) {
  var x;
  var y = x;
  x = 2;
  return [y, x];
}
console.log(test(1)); // [1,2]

// Change the value of variable.
var x = { data: "Bhavin" };
console.log(x);

x = { data: "bhavesh" };
console.log(x);

/************************* Pass by value   *************************/

var x = 10;
var y = x;

x++;
console.log(x); // 11
console.log(y); // 10

/************************* Pass by Reference   *************************/

let x = { value: 10 };
let y = x;

x.value++;
console.log(x); // x.value => 11
console.log(y); // y.value => 11
