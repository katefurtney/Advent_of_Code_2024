// PART 1
// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs');

const afterMap = new Map();
let testData = [];
let valid = true;
let sum = 0;

// parse input.txt
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    stringData = data.toString();
    stringData = stringData.trim().split("\n");

    stringData.forEach(element => {
        if (element === '')
            return;

        if (element.includes('|')) {
            const numbers = element.split("|")
            // console.log(numbers)
            if(afterMap.has(numbers[0])){
                afterMap.get(numbers[0]).push(numbers[1])  
             }else{
                afterMap.set(numbers[0], [numbers[1]])
             }
        }
        else {
            const val = element.split(',')
            testData.push(val);
        }
    });

    // loop through each line of testData
    testData.forEach(num => {
        valid = true;
        // console.log(num, num.length)
        for (let i = num.length - 1; i >= 0; i--) {
            const beforeArray = afterMap.get(num[i]);
            if (beforeArray) {
                for (let j = 0; j <= i; j++) {
                    if (beforeArray.includes(num[j])) {
                        valid = false;
                    }
                }
            }
        }
        if (valid) {
            // add middle number of element
            const midpoint = Math.floor(num.length / 2);
            sum += Number(num[midpoint]);
        }
    });
    console.log('sum:', sum)
});