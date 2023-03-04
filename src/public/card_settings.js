// const mysql = require('mysql')
//
// const info_change = async function() {
//     const conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         database: 'pocketsage',
//         password: ''
//     })
//
//     await conn.connect( err=> {
//         if (err) {
//             console.log(err)
//             return err
//         } else {
//             console.log('DATABASE ----- CONNECTED SUCCESSFULLY')
//         }
//     })
//
//     await conn.end(err=> {
//         if (err) {
//             console.log(err)
//             return err
//         } else {
//             console.log('DATABASE ----- DISCONNECTED SUCCESSFULLY')
//             window.location.href = 'http://localhost:3002/pocketsage'
//         }
//     })
// }
//
// module.exports = info_change()