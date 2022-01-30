const express = require('express')
const router = new express.Router()
const crypto = require("crypto")

const Transaction = require('../models/transactions')
const submitOrder = require('../routers/submitOrder')
// Create a new task
router.post('/fundtransfer', async (req,res, id) => {
    console.log(id)
    const transaction = new Transaction(req.body)
    transaction.transid = crypto.randomBytes(16).toString("hex")
    transaction.urlCallback = "127.199.23.33"
    console.log(transaction)
    //refactor with async/await
    try{
        await transaction.save()
        res.status(201).send(transaction)
        submitOrder(transaction, (error) => {
            if(error){
                return console.log(error)
            }
        })
    }catch(e){
        
        console.log(e.message)
    }
})


module.exports = router