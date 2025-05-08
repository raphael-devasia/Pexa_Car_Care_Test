function findMissingNumber(arr) {
    const n = arr.length

    const numSet = new Set(arr)

    for (let i = 1; i <= n + 1; i++) {
        if (!numSet.has(i)) {
            return i
        }
    }
}


const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); // Output: 6
console.log(findMissingNumber(arr2)); // Output: 3