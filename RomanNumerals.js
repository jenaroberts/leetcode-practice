let romanToInt = (s) => {
  let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let array = s.split("");
  let current;
  let currentVal;
  let next;
  let nextVal;

  let total = 0;

  for (let i = 0; i < array.length; i++) {
    current = array[i];
    currentVal = nums[current];

    next = array[i + 1];
    nextVal = nums[next];

    if (current < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
  return total;
};
console.log(romanToInt("III"));
