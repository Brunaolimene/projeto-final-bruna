const mongoose = require('mongoose')
const Category = require('../models/category')

//{GET} - listar todas as categorias [ok]
const getAll = async (req, res) => {
    const category = await Category.find()
    res.json(category)
}

//{GET} - listar categoria por id [ok]
const getById = async (req, res) =>{
    const category = await Category.find()
    const requiredId = req.params.id
    const filteredCategory = category.filter(clothing => clothing.id == requiredId)
    res.status(200).send(filteredCategory)
}


 //{POST} - criar nova categoria [ok]
const createCategory = async (req, res) => {
    const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,

    })
const existingCategory = await Category.findOne({nome: req.body.nome})
if (existingCategory) {
    return res.status(409).json({error: 'Categoria já cadastrada'})
}
try{
  const newCategory = await category.save()
  res.status(201).json(newCategory)
} catch(err) {
  res.status(400).json({ message: err.message})
    }
}

//{PATCH} - atualizar uma informacao especifica em uma categoria
const updateOne = async (req, res) => {
    
    try{
    
    const category = await Category.findById(req.params.id)
    if (category == null){
        return res.status(404).json({message: "Categoria não encontrada"})
    }
    if (req.body.nome != null){
        category.nome = req.body.nome
    }
    
    const updatedCategory = await category.save()
    res.status(200).json(updatedCategory)
    
    }catch (err){
        res.status(500).json({message: err.message})
    }
    }

//{DELETE} - deletar uma categoria [ok]
const deleteCategory = async (req, res) =>{

    const category = await Category.findById(req.params.id)
    if (category == null){
        return res.status(404).json({ message: 'Categoria não encontrada'})
}
try{
    await category.remove()
    res.status(200).json({ message: ' Categoria deletada com sucesso'})
}catch (err){
    res.status(500).json({message: err.message})
}
}


module.exports = {
    getAll,
    getById,
    createCategory,
    updateOne,
    deleteCategory
}