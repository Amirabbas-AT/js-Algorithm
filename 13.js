const replace = (num1, num2) => {
    let firstMassage = `Before swapping: num1 = ${num1}, num2 = ${num2}`
    num1 = num1 + num2;
    num2 = num1 - num2
    num1 = num1 - num2

    let lastMassage = `Before swapping: num1 = ${num1}, num2 = ${num2}`
    return `${firstMassage}\n${lastMassage}`;
}
console.log(replace(5, 10));