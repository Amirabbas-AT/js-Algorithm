let n = 0;
let nStr = n.toString()
for (let i in nStr) {
    if (Number(i) % 2 === 0) {
        console.log(`${i} is even`);


    }
    else if (Number(i) === 0) {
        console.log(`${i} is zero`);

    }
    else {
        console.log(`${i} is odd`);

    }
}
