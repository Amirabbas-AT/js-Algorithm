const sumOfDigits = n => {
    let sum = 0
    for(let digit in n.toString()){
        sum +=parseInt(digit,10)
    }
    return sum
    }

const condition = n => n % sumOfDigits(n) ? true : false;

let n = 12345

const render = () => {
    console.log(condition(n));

}