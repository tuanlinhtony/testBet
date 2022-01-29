const request = require('postman-request')
const axios = require('axios')

const submitOrder = (transaction, callback) => {
    const url = process.env.THIRD_PARTY_URL
    console.log(url)
    const lastTransaction = {
        transid: transaction.transid,
        bankName: transaction.bankName,
        accountNumber: transaction.accountNumber,
        accountName: transaction.accountName,
        amount: transaction.amount,
        sign: transaction.sign,
        channel: transaction.channel,
        ipAddress: transaction.ipAddress,
        urlCallback: transaction.urlCallback,
        createdAt: transaction.createdAt
    }
    console.log(lastTransaction)
    axios.post(url, lastTransaction)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = submitOrder