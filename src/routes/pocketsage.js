const express = require('express')
const router = express.Router()

const user = {
    "id": "1",
    "name": "Вуймов Никита", //no_information323
    "isLogged": true,
    "school": 5
}

router.get('/pocketsage', (req, res) => {

    res.render('./pocketsage/main.ejs', {
        user: user
    })
})

router.get('/pocketsage/ekj', (req, res) => {
    res.render('./pocketsage/ekj.ejs', {
        user:user
    })
})

router.get('/pocketsage/actirovka', (req, res) => {
    res.render('./pocketsage/actirovka.ejs', {
        user:user
    })
})

router.get('/pocketsage/links', (req, res) => {
    res.render('./pocketsage/links.ejs', {
        user:user
    })
})
router.get('/pocketsage/calculator', (req, res) => {
    res.render('./pocketsage/calculator.ejs', {
        user:user
    })
})

router.get('/pocketsage/log_in', (req, res) => {
    res.render('./pocketsage/log_in.ejs', {
        user:user
    })
})

router.get('/pocketsage/card_settings', (req, res) => {
    res.render('./pocketsage/card_settings.ejs', {
        user:user
    })
})

router.get('/pocketsage/error_feedback', (req, res) => {
    res.render('./pocketsage/error_feedback.ejs', {
        user:user
    })
})



module.exports = router