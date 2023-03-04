const express = require('express')
const router = express.Router()
const cheerio = require('cheerio');
//const mysql = require('mysql')
const axios = require('axios')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


const user = {
    "id": "1",
    "name": "Вуймов Никита", //no_information323
    "isLogged": true,
    "school": 5
}

router.get('/pocketsage', jsonParser, (req, res) => {

    const DATABASE_URL = process.env.DATABASE_URL || "http://localhost:4050"
    let userId = 4
    axios
        .get(`${DATABASE_URL}/db/${userId}`)
        .then(result => {
            let name = result.data[0].name
            let school = result.data[0].scnmb
            console.log(result.data)
            res.render('./pocketsage/main.ejs', {
                name:name,
                school:school,
                userId: userId
            })
        })
})

router.get('/pocketsage/ekj', (req, res) => {

    const DATABASE_URL = process.env.DATABASE_URL || "http://localhost:4050"
    let userId = 4
    axios
        .get(`${DATABASE_URL}/db/${userId}`)
        .then(result => {
            let name = result.data[0].name
            let school = result.data[0].scnmb
            let login = result.data[0].login
            let password = result.data[0].password
            let isLogged = result.data[0].is_logged
            console.log(result.data)
            res.render('./pocketsage/ekj.ejs', {
                name: name,
                school: school,
                login: login,
                password: password,
                isLogged: isLogged
            })
        })
})

router.get('/pocketsage/actirovka', (req, res) => {

    axios.get('https://www.gismeteo.ru/weather-nefteyugansk-3993/now/')
        .then((response) => {
            const $ = cheerio.load(response.data);
            const temperature = $('.weather-value .unit_temperature_c .sign').text() + $('.weather-value .unit_temperature_c').text().replace(/\D/g,'');
            const windSpeed = $('.now-info-item.wind .unit_wind_m_s').text().trim();

            res.render('./pocketsage/actirovka.ejs', {
                temperature:temperature,
                windSpeed:windSpeed
            })

            console.log('Температура:', temperature);
            console.log('Скорость ветра:', windSpeed);
        })
        .catch((error) => {
            console.log(error);
        });



})

router.get('/pocketsage/links', (req, res) => {
    res.render('./pocketsage/links.ejs', {})
})

router.get('/pocketsage/calculator', (req, res) => {

    const DATABASE_URL = process.env.DATABASE_URL || "http://localhost:4050"
    let userId = 4
    axios
        .get(`${DATABASE_URL}/db/${userId}`)
        .then(result => {
            let is_logged = result.data[0].is_logged
            console.log(result.data)
            res.render('./pocketsage/calculator.ejs', {
                is_logged:is_logged
            })
        })
})

router.get('/pocketsage/log_in', (req, res) => {

    const DATABASE_URL = process.env.DATABASE_URL || "http://localhost:4050"
    let userId = 4
    axios
        .get(`${DATABASE_URL}/db/${userId}`)
        .then(result => {
            let is_logged = result.data[0].is_logged
            console.log(result.data[0].is_logged)
            res.render('./pocketsage/log_in.ejs', {
                is_logged:is_logged
            })
        })
})

let userId;

router.get('/pocketsage/card_settings', (req, res) => {
    const DATABASE_URL = process.env.DATABASE_URL || "http://localhost:4050"
    userId = 4;
    axios
        .get(`${DATABASE_URL}/db/${userId}`)
        .then(result => {
            console.log(result.data)
            res.render('./pocketsage/card_settings.ejs', {
                userInfo:result.data[0],
                userId: userId
            })
        })
})

router.get('/pocketsage/error_feedback', (req, res) => {
    res.render('./pocketsage/error_feedback.ejs', {})
})

module.exports = router