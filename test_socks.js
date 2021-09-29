const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 9;


function sockMerchant(n, ar) {
    // Write your code here
    let result = 0;

    const socks = (n, ar) => {
        if (n==0) {
          return;
        } 
      
        const search = ar[0];
        let ocurrences = 1;
        for(let a=1; a<n; a++){
          if(search === ar[a]){
            ocurrences ++
          }
        }
      
        result += Math.floor(ocurrences / 2);
        
        const newArray = ar.filter(
          val => val !== search
        );
        socks(newArray.length, newArray);
      };

      socks(n, ar, 0);
      return result;
}

let num;
num = sockMerchant(n, ar);
console.log(num);