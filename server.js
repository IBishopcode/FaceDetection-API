const express = require('express');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const register = require('./Controllers/register');
const signin = require('./Controllers/signin');
const profile = require('./Controllers/profile');
const getImage = require('./Controllers/image')

const db = knex({
    client: 'pg',
    connection: {
    host :'127.0.0.1',
    user :'postgres',
    port:5432,
    password : 'PSQtest',
    database : 'smart-brain'
}
});

db.select('*').from('users').then(data => {
    console.log(data);
});

const app = express();
app.use(bodyParser.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.post('/signin',(req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, bd)})

app.put('/image', (req, res) => { getImage.handleImage(req, res, db) })

app.post('/imageurl', (req, res) => {getImage.handleApiCall(req, res)})


app.listen(8000, () => {
    console.log("App is running on port 8000")
})