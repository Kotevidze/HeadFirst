const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num/2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

console.log(smallestDivisor(7));

var smallestDivisor2 = function(num) {
  var acc = 2;
  while (acc < num / 2) {
    if (num % acc === 0) {
      return acc;
    }
    acc++;
  } 
  return num; 
}

console.log(smallestDivisor2(15));