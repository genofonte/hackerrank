//https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

const s ="ceebbcb";
const n = 817723;

function repeatedString(s, n) {
    // Write your code here
    let result = 0;
    const regex = /a/g;
    let numberOfletters = s.match(regex) && s.match(regex).length || 0;
    if (numberOfletters === 0) return 0;

    const remaninder = (n % s.length);
    if (remaninder === 0){
        result = numberOfletters * (n / s.length);
    } else {
        const renaindSubstring = s.substring(0, remaninder);
        const numberOflettersInReminder = renaindSubstring.match(regex) && renaindSubstring.match(regex).length || 0;
        result = (numberOfletters * ((n-remaninder) / s.length)) + numberOflettersInReminder;
    }
    return result;
}

console.log(repeatedString(s, n));