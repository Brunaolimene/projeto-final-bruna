const express = require('express')
const app = express()

const db = require('./src/data/database')
db.connect()

app.use(express.json())

const categoryRouter = require('./src/routes/category.routes')
app.use('/category',  categoryRouter )

const clothingRouter = require('./src/routes/clothing.routes')
app.use('/clothing', clothingRouter )

app.listen(process.env.PORT || 3333, () => console.log('Servidor rodando na porta 3333'))