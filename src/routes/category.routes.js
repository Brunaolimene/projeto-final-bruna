const express = require('express')
const router = express.Router()
const controller = require('../controllers/categoryController')

//{GET, listar todas as categorias}
router.get('/', controller.getAll)

//{GET} - listar categoria por id
router.get('/:id', controller.getById)

//{POST} - criar uma nova categoria 
router.post('/', controller.createCategory)

//{PATCH} - atualizar uma informacao especifica em uma categoria
router.patch('/:id', controller.updateOne)

//{DELETE} - deletar uma categoria
router.delete('/:id', controller.deleteCategory)

module.exports = router