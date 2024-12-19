const divisors4 = (number, div4) => {
    let result = [];
    for (let i = 0; i <= div4; i += 4) {
        if (number % i === 0) {
            result.push(i)
        }

    }
    return result
}
let n = 1024;
let multiplicativeDivisors4 = [];
let m4 = Math.round(n) % 4 === 0 ? Math.round(n) / 4 : false;
let result = m4 === false ? "This number has no divisors that are multiples of 4" : divisors4(n, m4);
console.log(result);