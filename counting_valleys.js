//https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
const steps = 10;
const path = 'DDUUDDUDUUUD';

const count_valley = (steps, path) => {

    let altitudeHistory = ['plain'];
    let altitude = 0;
    let result = 0;
    for(let n=0; n < steps; n++){
        const currStep = path.charAt(n);
        switch (currStep){
            case 'U':
                altitude += 1;
                break;
            case 'D':
                altitude -= 1;
                break;
            default:
                break;
        }
        if(altitude < 0){
            altitudeHistory.push('valley')
        } 
        if (altitude > 0) {
            altitudeHistory.push('mountain')
        } 
        if (altitude == 0) {
            altitudeHistory.push('plain')
        }
        let lastIndex = altitudeHistory.length -1;
        if(altitudeHistory[lastIndex] == 'valley'){
            if (altitudeHistory[lastIndex  -1] == 'plain') {
                result += 1;
            }
        }
    }
    return result;
};

console.log(count_valley(steps,path));