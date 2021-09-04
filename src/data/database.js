require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URI

const connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Conectadas bb no MongoDb Atlas")
    })
    .catch((error)=>{
        console.log("Algo deu errado")
        console.error(error)
    })
}

module.exports = { connect }



// const mongoose = require('mongoose')

// const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/cameliabrasil"

// const connect = () => {
//   mongoose.connect(MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(console.log('Database conectada com sucesso.'))
//   .catch(err => console.err)
// }

// module.exports = { connect }