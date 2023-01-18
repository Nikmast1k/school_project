const express = require('express')
const router = express.Router()

const user = {
    "id": "1",
    "name": "Вуймов Никита",
    "isLogged": false,
    "school": 5
}

router.get('/pocketsages', (req, res) => {

    res.render('./pocketsage/main.ejs', {
        user: user
    })
})

router.get('/pocketsages/ekj', (req, res) => {
    res.render('./pocketsage/ekj.ejs', {
        user:user
    })
})

router.get('/pocketsages/actirovka', (req, res) => {
    res.render('./pocketsage/actirovka.ejs', {
        user:user
    })
})

router.get('/pocketsages/notes', (req, res) => {
    res.render('./pocketsage/notes.ejs', {
        user:user
    })
})
router.get('/pocketsages/links', (req, res) => {
    res.render('./pocketsage/links.ejs', {
        user:user
    })
})
router.get('/pocketsages/calculator', (req, res) => {
    res.render('./pocketsage/calculator.ejs', {
        user:user
    })
})

router.get('/pocketsages/log_in', (req, res) => {
    res.render('./pocketsage/log_in.ejs', {
        user:user
    })
})

router.get('/pocketsages/card_settings', (req, res) => {
    res.render('./pocketsage/card_settings.ejs', {
        user:user
    })
})

router.get('/pocketsages/error_feedback', (req, res) => {
    res.render('./pocketsage/error_feedback.ejs', {
        user:user
    })
})



module.exports = router