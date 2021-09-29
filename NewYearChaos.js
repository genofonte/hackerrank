'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    let result = 0;
    let newArr = [];
    for(let n=1; n<=q.length; n++){
        newArr.push(n);
    }
    let n=0;
    while(n<q.length){
        if(q[n] !== newArr[n]){
            if(q[n] > n+3){
                result = 'Too chaotic';
                break;
            }
            let valToMove = q[n];
            let indexToMove = newArr.indexOf(valToMove, n);
            newArr[indexToMove] = newArr[indexToMove - 1];
            newArr[indexToMove - 1] = valToMove;
            result += 1;
        }else{
            n++
        }
    }
    return result;
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
