const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.get('/db/:userId', async (req, res) => {
    const { userId } = req.params
    try {
        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'testdb',
            password: ''
        })

        conn.connect( err=> {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log('DATABASE ----- CONNECTED SUCCESSFULLY')
            }
        })

        let query=`SELECT * FROM user_info WHERE id=${userId}`

        conn.query(query, async (err, result) => {
            console.log(err)
            console.log(result)
            await res.json(result)
        })

        conn.end(err=> {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log('DATABASE ----- DISCONNECTED SUCCESSFULLY')
            }
        })

    } catch (e) {
        res.statusCode = 500
        res.json({ errcode: 500, errmsg: 'DataBase error', ...e})
    }
})


app.post('/db/:userId', jsonParser, async (req, res) => {
    try {
        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'testdb',
            password: ''
        });

        const { name, scnmb, login, password, isLogged } = req.body;
        const userId = req.params.userId;

        conn.connect(err => {
            if (err) {
                console.log(err);
                res.status(500).send('Error connecting to database');
            } else {
                console.log('DATABASE ----- CONNECTED SUCCESSFULLY');
            }
        });

        conn.beginTransaction(err => {
            if (err) {
                console.log(err);
                res.status(500).send('Error updating user');
            } else {
                const sql1 = 'UPDATE user_info SET name = ?, scnmb = ?, login = ?, password = ?, is_logged = ? WHERE id = ?';

                conn.query(sql1, [name, scnmb, login, password, isLogged, userId], (err, result) => {
                    if (err) {
                        conn.rollback(() => {
                            console.log(err);
                            res.status(500).send('Error updating user');
                        });
                    } else {
                        conn.commit(err => {
                            if (err) {
                                conn.rollback(() => {
                                    console.log(err);
                                    res.status(500).send('Error updating user');
                                });
                            } else {
                                console.log('User updated successfully');
                                res.send('User updated successfully');
                            }
                        });
                    }
                });
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Database error');
    }
});


const port = process.env.PORT || 4050
app.listen(port, ()=> {
    console.log(`DB server is listening port --- ${port}`)
})