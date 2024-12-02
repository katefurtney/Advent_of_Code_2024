// PART 1
// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs');

// frequency function for part 2
const frequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

// parse input.txt
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    // column arrays
    var leftColumn = [];
    var rightColumn = [];
    var diffArray = [];

    stringData = data.toString();
    stringData = stringData.trim().split("\n");
    stringData.forEach(line => {
        const [left, right] = line.trim().split(/\s+/)
        leftColumn.push(Number(left));
        rightColumn.push(Number(right));
    });
    
    // sort arrays
    leftColumn.sort();
    rightColumn.sort();

    for(i = 0; i < leftColumn.length; i++) {
        diffArray.push(Math.abs(leftColumn[i] - rightColumn[i]))
    }

    // sum items in each array
    const leftTotal = leftColumn.reduce((a, b) => a + b, 0)
    const rightTotal = rightColumn.reduce((a, b) => a + b, 0)
    const diffTotal = diffArray.reduce((a, b) => a + b, 0)

    // find difference
    console.log("diff total: ", diffTotal);


    // PART 2
    // arrays for testing:
    // leftColumn = [3,4,2,1,3,3];
    // rightColumn = [4,3,5,3,9,3];

    // create a map of frequency for rightColumn
    const mapRight = new Map();

    var sum = 0;

    leftColumn.forEach(item => {
        // find frequency in the rightColumn array
        const itemFreq = frequency(rightColumn, item);

        // Check if the item is already in the Map
        if (!mapRight.has(item)) {
            // Increment the count
            mapRight.set(item, itemFreq);
        }
        sum += item * itemFreq;
    });

    console.log("sum: ", sum);
});