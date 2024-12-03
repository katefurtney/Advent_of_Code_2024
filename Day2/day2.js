// PART 1
const fs = require('fs');

unsafeCount = 0;

// Helper function to check if an array is increasing or decreasing
function isSafe(arr) {
    const isIncreasing = arr.every((val, i, arr) => i === 0 || (val > arr[i - 1] && val - arr[i - 1] <= 3));
    const isDecreasing = arr.every((val, i, arr) => i === 0 || (val < arr[i - 1] && arr[i - 1] - val <= 3));
    return isIncreasing || isDecreasing;
}

// parse input.txt
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    stringData = data.toString();
    stringData = stringData.trim().split("\n");
    stringData.forEach(line => {
        lineData = line.trim().split(" ").map(Number);
        if (isSafe(lineData))
            unsafeCount++;
        else {      // PART 2
            // Iterate through the array, removing one element at a time
            for (let i = 0; i < lineData.length; i++) {
                // Create a new array without the current element
                const modifiedArray = lineData.slice(0, i).concat(lineData.slice(i + 1));
                // Check if the modified array is monotonic
                if (isSafe(modifiedArray)) {
                    unsafeCount++;
                    break;
                }
            }
        }
    });
    console.log(unsafeCount);
});