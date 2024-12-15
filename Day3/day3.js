// PART 1
// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs');

// parse input.txt
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    stringData = data.toString();
    // PART 1
    // const matches = stringData.match(/mul\(\b\d{1,3}\b,\b\d{1,3}\b\)/g);
    // PART 2
    // const matches = stringData.match(/do\(\).*?mul\(\b\d{1,3}\b,\b\d{1,3}\b\)/g);
    const matches = stringData.match(/mul\(\b\d{1,3}\b,\b\d{1,3}\b\)|do\(\)|don\'t\(\)/g)
    console.log(matches);

    let sum = 0;
    let isEnabled = true;

    // loop through matches and multiply numbers
    matches.forEach(element => {
        console.log(element)
        console.log(isEnabled)

        // PART 2
        if (element === "don't()") {
            isEnabled = false
            return;
        }
        else if (element === "do()") {
            isEnabled = true
            return;
        }
        
        if (isEnabled) {
            // process match until hitting "don't()" or "do()"
            numMatches = element.match(/\d+/g);
            console.log(numMatches);
            sum += numMatches[0] * numMatches[1]
        }

        // PART 1
        // numMatches = numMatches[0].match(/\d+/g);
        // console.log(numMatches);
        
    });
    console.log(sum);
});