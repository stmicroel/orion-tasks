function sum(a) {
  var currentSum = a;

  let f = (b) => {
    if (b === undefined) {
      return currentSum;
    }

    currentSum += b;
    return f;
  }

  f.valueOf = () => currentSum;
  f.toString = () => currentSum;
  
  return f;
}

console.log(sum(1)(2)(5)());

promiceReduce([promise1, promise2], acc)