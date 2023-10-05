// configurção inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()



// forma de ler json / middlwwares
app.use(
    express.urlencoded({
        extended: true,
    }), 
)

app.use(express.json())

app.use((req, res, next) => {
    //console.log("acessou o Middleware!")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Aloow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors());
    next()
})


// Rotas da api


const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial / endpoint
app.get('/', (req, res) => {

    // mostra requisição
    res.json({ message: 'oi Express!' })
})


// entregar uma porta

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)


mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.iphdhth.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(8080)
})
.catch((err) => console.log(err))

