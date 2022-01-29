const express = require('express')
const { route } = require('express/lib/application')
const res = require('express/lib/response')
const router = new express.Router()

const User = require('../models/user')



// Create router for index page
router.get('', (req,res) => {
    res.render('template')     
})

router.get('/users', (req, res, next) => {
    User.find((err, docs) => {
        if (!err) {
            res.render("users", {
                data: docs
            })
        } else {
            console.log('Failed to retrieve the Course List: ' + err)
        }
    })
})

router.get('/payout', (req, res, next) => {
    User.find((err, docs) => {
        if (!err) {
            res.render("payout", {
                data: docs
            })
        } else {
            console.log('Failed to retrieve the Course List: ' + err)
        }
    })
})



module.exports = router