const numbers = [5, 7, 2, 9, 1, 8, 3, 4, 12];

function analyzeArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
  }
  else {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];

    if (x < min) min = x;
    if (x > max) max = x;

    sum += x;
  }

  const y = sum / arr.length;

  return { min, max, y };
    }
}

console.log(analyzeArr(numbers));