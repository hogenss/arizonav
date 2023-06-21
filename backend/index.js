require('dotenv').config()
require('./strategies/discord')

const express = require('express')
const session = require('express-session');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const Store = require('connect-mongo')

const errorMiddleware = require('./middlewares/error-middleware')
const router = require('./router')

const PORT = process.env.PORT || 3003
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    resave: false,
    saveUninitialized: false,
    store: Store.create({mongoUrl:process.env.DB_URL, mongooseConnection: mongoose.connection})
}))

app.use(passport.initialize());
app.use(passport.session())

app.use('/api', router);
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
