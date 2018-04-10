function addN(n) {
  var adder = function(x) {
    return n + x;
  };
  return adder;
}

var add2 = addN(2);
console.log(add2(10));
console.log(add2(100));