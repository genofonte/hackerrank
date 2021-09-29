const arr = 
`1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`;

const hourglassSum = (arr) => {
    let arraySum = [];
    const hourglassSahpe = [[0,0],[0,1],[0,2],[1,1],[2,0],[2,1],[2,2]];
    for(let i = 0; i<4; i++){
        let parcialSum = 0;
        for(let x = 0; x<4; x++){
            const parcial = hourglassSahpe.map( (index) => { 
                return arr[index[0] + x ][index[1] + i ] 
            });
            console.log(parcial);
            arraySum.push(parcial.reduce((prev, curr) => prev + curr))
        }
    }
    console.log(arraySum);
    return arraySum.sort((a,b) => a -b ).pop();
}

hourglassSum(arr);