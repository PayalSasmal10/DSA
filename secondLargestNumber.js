function secondLargest(arr) {
  if (arr.length < 2) return null;

  let firstLargest = arr[0];
  let secondLargest = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest([5, 0, 7, 10, 8, 17, 1]));
console.log(secondLargest([4, 9, 0, 2, 8, 7, 1]));
console.log(secondLargest([4, 9, 0, 2, 8, 7, 1])); // when i have single length value of an array
console.log(secondLargest([10, 3, 4, 20, 5, 20])); // if we want 10 as second largest
