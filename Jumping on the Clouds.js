//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
const arr = [0, 0, 0, 0, 1, 0];

function jumpingOnClouds(sky) {
    // Write your code here
    const numberOfCLouds = sky.length;
    let currentClound = 0;
    let result = 0;
    while(currentClound < numberOfCLouds){
        let couldJunp = (sky[currentClound + 2] === 0 ) ? true: false;
        if(couldJunp){
            currentClound += 2;
            result += 1;
            continue;
        } else {
            couldJunp = (sky[currentClound + 1] === 0 ) ? true: false;
            if (couldJunp){
                currentClound += 1;
                result += 1;
            } else {
                currentClound += 2;
            }
        }
    }
    return result;

}

const res = jumpingOnClouds(arr);