const mongoose = require('mongoose')
const  validator = require('validator')

const transactionSchema = new mongoose.Schema(
    {
        transid: {
            type: String,
            required: true
        },
        userid: {
            type: String,
            required: true
        },
        bankName: {
            type: String,
            required: true
        },
        accountNumber: {
            type: Number,
            required: true
        },
        accountName: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        sign: {
            type: String,
            required: true
        },
        channel: {
            type: String,
            required: true
        },
        ipAddress: {
            type: String,
            required: true
        },
        urlCallback: {
            type: String,
            required: true
        },
        callbackResult: {
            type: String,
            default: "Đang xử lý"
        }
    }
    ,
    {
        timestamps: true
    }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction