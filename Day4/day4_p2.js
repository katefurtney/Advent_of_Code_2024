// PART 2
// find each A, look at corner chars
// A -> dx: -1, +1; dy: -1, +1

function findXMAS(grid) {

    const word = "MAS";
    const rows = grid.length;
    const cols = grid[0].length;
    let occurrences = 0;

    // Iterate through the grid
    for (let x = 1; x < rows - 1; x++) {
        for (let y = 1; y < cols - 1; y++) {
            if (grid[x][y] === 'A') { // Start checking if the first letter matches
                if (((grid[x-1][y-1] + grid[x+1][y+1]) === "MS" || (grid[x-1][y-1] + grid[x+1][y+1]) === "SM") && ((grid[x-1][y+1] + grid[x+1][y-1]) === "MS" || (grid[x-1][y+1] + grid[x+1][y-1]) === "SM"))
                    occurrences++
            }
        }
    }

    // return results;
    return occurrences;
}

// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs');

// parse input.txt
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    stringData = data.toString();
    stringData = stringData.trim().split("\n");
    const occurrences = findXMAS(stringData);
    console.log("Occurrences of 'X-MAS':", occurrences);

});