const mongoose = require('mongoose')
const category = require('../models/category')
const clothing = require('../models/clothing')
const Clothing = require('../models/clothing')

//{GET} - listar todas as roupas [ok]
const getAll = async (req, res) =>{
    const clothing = await Clothing.find()
    res.status(200).json(clothing)
}
//{GET} - listar roupa por categoria [ok]
const getByCategory = async (req, res) =>{
    const { categoria } = req.params
    Clothing.find({categoria : categoria})
     .then((list)=> {
        if(!list.length > 0) return res.status(404).send({message: "Categoria não encontrada"})
        return res.status(200).send(list)
     }) 
}

//{GET} - listar roupas por id [rever na aula]
const getById = async (req, res) =>{
    const clothing = await Clothing.find()
    const requiredId = req.params.id
    const filteredClothing = clothing.filter(clothing => clothing.id == requiredId)
    res.status(200).send(filteredClothing)
}
//{GET} - listar todos os vestidos
//{GET} - listar todas as blusas
//{GET} - listar todas as calças

//{POST} - criar roupas [ok]
const createClothing = async (req, res) =>{ 
    const clothing = new Clothing({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        cor: req.body.cor,
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        categoria: req.body.categoria,
        criadoEm: req.body.criadoEm
    })
    console.log(req.body)
    //criando validação caso já exista uma roupa 
     const existingClothing = await Clothing.findOne({nome: req.body.nome})
     if (existingClothing ){
         return res.status(409).json({error:'Roupa já cadastrada.'})
      }
       try {
          const newClothing = await clothing.save()
         res.status(201).json(newClothing)
      } catch (err){
         res.status(400).json({ message: err.message})
      }
    
}

//{PATCH} - atualizar uma informacao especifica em uma roupa
const updateOne = async (req, res) =>{
    const clothing = await Clothing.findById(req.params.id)
    try{
   if (clothing == null){
       return res.status(404).json({message: 'Roupa não encontrada'})
   } 

   if (req.body.nome != null){
       clothing.nome = req.body.nome
   }
   if (req.body.cor != null){
       clothing.cor = req.body.cor
   }
   if (req.body.quantidade != null){
    clothing.quantidade = req.body.quantidade
   }
   if (req.body.valor != null){
    clothing.valor = req.body.valor
  }
  if (req.body.categoria != null){
    clothing.categoria = req.body.categoria
  }

  const updatedClothing = await clothing.save()
  res.status(200).json(updatedClothing)
   
}catch (err){
    res.status(500).json({message: err.message})
}
}

//{DELETE} - deletar uma roupa
const deleteClothing = async (req, res) =>{

    const clothing = await Clothing.findById(req.params.id)
    if (clothing == null){
        return res.status(404).json({message: "Roupa não encontrada"})

    }
    try{
        await clothing.remove()
        res.status(200).json({message: "Roupa deletada com sucesso"})
    }catch (err){
        res.status(500).json({message: err.message})
    }
         
}




module.exports = {
    getAll,
    getByCategory,
    getById,
    createClothing,
    updateOne,
    deleteClothing
}