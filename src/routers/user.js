const express = require('express')
const router = new express.Router()

const User = require('../models/user')

// Add new user
router.post('/users/add', async ( req, res) => {
    const user = new User(req.body)
    console.log(user)
    try{
        await user.save()
        res.status(201).send(user)
        console.log(user.name + ' was created succesful!')
    }catch(e){
        res.status(400).send(e.message)
        console.log(e.message)
    }
})

module.exports = router