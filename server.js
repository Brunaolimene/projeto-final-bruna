const express = require('express')
const app = express()

require('dotenv-safe').config();

const cors = require('cors')
const PORT = process.env.PORT || 8080

const db = require('./src/data/database')
db.connect()

app.use(cors())
app.use(express.json())

const categoryRouter = require('./src/routes/category.routes')
app.use('/category',  categoryRouter )

const clothingRouter = require('./src/routes/clothing.routes')
app.use('/clothing', clothingRouter )

const usuariasRouter = require('./src/routes/usuarias.routes')
app.use('/usuarias', usuariasRouter)


app.listen(PORT, () => console.log('Servidor rodando na porta 8080'))