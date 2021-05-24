const givenArray = [10, 5, 2, 7, 8, 7];
const givenArray2 = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

let result1 = [];
for (let i = 0; i < givenArray.length - k + 1; i++) {
  let max = -Infinity;
  for (let j = 0; j < k; j++) {
    if (givenArray[i + j] > max) {
      max = givenArray[i + j];
    }
  }
  result1.push(max);
}

console.log("Output : " + result1);

let result2 = [];
for (let x = 0; x < givenArray2.length - k + 1; x++) {
  result2.push(Math.max(...givenArray2.slice(x, x + k)));
}

console.log("Output : " + result2);
