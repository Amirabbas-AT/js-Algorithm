function base3ToBase10(base3Str) {
    let base10Num = 0;
    const length = base3Str.length;
    for (let i = 0; i < length; i++) {
        const digit = parseInt(base3Str[length - 1 - i], 10);
        base10Num += digit * Math.pow(3, i);
    }
    return base10Num;
}
console.log(base3ToBase10('120'));