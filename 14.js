const fakeData = [
    {
        id: 1,
        name: "user1",
        pass: 1234,
        wallet: { accountBalance: 100000, nov: 1 }
    },
    {
        id: 2,
        name: "user2",
        pass: 1234,
        wallet: { accountBalance: 100000, nov: 1 }
    }, {
        id: 3,
        name: "user3",
        pass: 1234,
        wallet: { accountBalance: 100000, nov: 1 }
    }, {
        id: 4,
        name: "user4",
        pass: 1234,
        wallet: { accountBalance: 100000, nov: 1 }
    }, {
        id: 5,
        name: "user5",
        pass: 1234,
        wallet: { accountBalance: 100000, nov: 1 }
    }, {
        id: 5,
        name: "user5",
        pass: 1234,
        wallet: { accountBalance: 100000, nov: 1 }
    },




]



const auth = (name, password, data) => {
    let result = false;
    for (let user in data) {
        if (user.name === name && user.pass === password) {
            result = true
            break
        } else { result = false };
    }
    return result
}

const atmCommand = (name, command, data, amount) => {
    switch (command) {
        case '1' || 1:
            data.map(item => {
                if (name === item.name) {
                    item.wallet.accountBalance += amount;
                    item.wallet.nov += 1
                }

            }


            )
        case '2' || 2:
            data.map(item => {
                if (name === item.name) {
                    item.wallet.accountBalance -= amount;
                    item.wallet.nov += 1
                }

            }


            )
        default:
            'this command is not defind'
    }
}
let amount = 0;
const atm = (userName, pass, command) => {
    let authResponse = auth(userName, pass, fakeData) === true ? atmCommand(userName, command, fakeData, amount) : 'your personal wallet information is not exist in database'
}