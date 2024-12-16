function findXMAS(grid) {
    const directions = [
        { dx: 0, dy: 1 },   // Right
        { dx: 0, dy: -1 },  // Left
        { dx: 1, dy: 0 },   // Down
        { dx: -1, dy: 0 },  // Up
        { dx: 1, dy: 1 },   // Down-right diagonal
        { dx: 1, dy: -1 },  // Down-left diagonal
        { dx: -1, dy: 1 },  // Up-right diagonal
        { dx: -1, dy: -1 }, // Up-left diagonal
    ];

    const word = "XMAS";
    const wordLength = word.length;
    const rows = grid.length;
    const cols = grid[0].length;

    const results = [];

    // Helper to check if "XMAS" is found starting at (x, y) in a specific direction
    function checkDirection(x, y, dx, dy) {
        let positions = [];
        for (let i = 0; i < wordLength; i++) {
            const nx = x + dx * i;
            const ny = y + dy * i;

            if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || grid[nx][ny] !== word[i]) {
                return null;
            }
            positions.push([nx, ny]);
        }
        return positions;
    }

    // Iterate through the grid
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (grid[x][y] === 'X') { // Start checking if the first letter matches
                for (const { dx, dy } of directions) {
                    const result = checkDirection(x, y, dx, dy);
                    if (result) {
                        results.push(result);
                    }
                }
            }
        }
    }

    return results;
}

// PART 1
// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs');

// parse input.txt
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    stringData = data.toString();
    stringData = stringData.trim().split("\n");
    const occurrences = findXMAS(stringData);
    console.log("Occurrences of 'XMAS':", occurrences.length);

});

// // Sample grid
// const grid = [
//     "MMMSXXMASM",
//     "MSAMXMSMSA",
//     "AMXSXMAAMM",
//     "MSAMASMSMX",
//     "XMASAMXAMM",
//     "XXAMMXXAMA",
//     "SMSMSASXSS",
//     "SAXAMASAAA",
//     "MAMMMXMMMM",
//     "MXMXAXMASX",
// ];

// // Run the function
// const occurrences = findXMAS(grid);

// // Print results
// console.log("Occurrences of 'XMAS':", occurrences.length);
