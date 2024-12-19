


const shops = [];
const shopKeeper = [];
const shopRanking = [];

const condition = salary => {

    if (500000 > salary) { 0.03 * salary; }
    else if (700000 > salary && 500000 < salary) { 0.05 * salary; }
    else { "this shop doesn't have shop keeper" }

}


const sendDataShops = data => {
    data.map(item => {

        condition(item.salary)
    })
}

(function render() {
    sendDataShops(shops)
})()