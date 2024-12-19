const firstHalf = 31 * 6;
const lastMonth = 29;
const fiveSecondHalfMonth = 30 * 5;
let day = 0;
let result = 0;
if (day > firstHalf) {
    if (day > firstHalf + fiveSecondHalfMonth) {
        result = `${12}/${day - (firstHalf + fiveSecondHalfMonth)}`;
    }
    else {
        day -= firstHalf;
        let month = Math.round(day / 30) + 6;

        if (month % 30 === 0) {
            result = `${month}/30`

        }
        else {
            result = `${month}/${day % 30}`

        }
    }
}
else {
    let month = Math.round(day / 31);
    day %= 31;
    result = day === 0 ? `${month}/${31}` : `${month}/${day}`
}