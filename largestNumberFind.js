// write a function that returns the largest number in an array

function largestNumberFind(arr) {
  let largestNumber = arr[0]; // i can put -Infinity here too
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

console.log(largestNumberFind([5, 0, 7, 10, 8, 17, 1]));

// smallest number of array

function smallestNumber(arr) {
  let smallestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (smallestNumber > arr[i]) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

console.log(smallestNumber([5, 0, 7, 10, 8, 17, 1]));
