//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */
const a = [1,2,3,4,5];
const d = 4;

function rotLeft(a, d) {
    // Write your code here
    let result = a;
    for(let n=0; n<d; n++){
        const firstElement = result.shift();
        result.push(firstElement);
    }
    return result;
    //console.log(result);
}

rotLeft(a, d);
