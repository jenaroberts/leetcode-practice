//fibinnache sequence
//provided x generate an array with that length
// fSequence(1) -> [1] fSequence(2) -> [1,1] fSequence(3) -> [1,1,2] fSequence(4) -> [1,1,2,3] fSequence(5) -> [1,1,2,3,5]

// const number =[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,]

const fSequence = (num) => {
  let sum = [];
  while (sum.length !== num) {
    if (sum.length < 2) {
      sum.push(1);
    } else {
      sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
    }
  }
  return sum;
};
console.log(fSequence(12));
console.log(fSequence(24));
