const express = require('express')
const router = express.Router()
const controller = require("../controllers/clothingController")

//{GET} - listar todas as roupas [ok]
router.get('/', controller.getAll) 

//{GET} - listar roupa por categoria [ok]
router.get('/:categoria', controller.getByCategory)

//{GET} - listar roupas por id
router.get('/:id', controller.getById)

//{GET} - listar todos os vestidos

//{GET} - listar todas as calças

//{GET} - listar todas as blusas

//{POST} - criar uma nova roupa [ok]
router.post('/', controller.createClothing)

//{PATCH} - atualizar uma informacao especifica em uma roupa
router.patch('/:id', controller.updateOne)

//{DELETE} - deletar uma categoria
router.delete('/:id', controller.deleteClothing)



module.exports = router