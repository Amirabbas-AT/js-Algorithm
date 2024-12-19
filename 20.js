let numbers = [];
const evenNum = [0, 2, 4, 6, 8];
const evenNumZero = [2, 4, 6, 8];
const oddNumbers = [1, 3, 5, 7, 9]


for (let i in evenNum) {
    for (let j in evenNumZero) {
        for (let x in evenNum) {
            for (let y in evenNum) {
                numbers.push(`${i}${j}${x}${y}`)
            }
        }
    }
}