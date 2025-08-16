//write function to search the elements
function searchElements(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }

    }

    return -1;
}
let arr = [4, 2, 0, 10];
console.log(searchElements(arr, 11))
console.log(searchElements(arr, 0))

//write function to count the negavtive number from an array
function countNegatives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
const arrNeg = [-4, -3, 0, 1, 4, -10, -90, -1];
console.log(countNegatives(arrNeg))