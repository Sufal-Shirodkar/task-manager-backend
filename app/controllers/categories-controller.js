const Category = require('../models/categories-model')
const {validationResult} = require('express-validator')
const categoryController ={}
categoryController.list = ( (req,res)=>{
    Category.find()
    .then( (categories)=>{
        res.json(categories)
    })
    .catch(err =>{
        console.log(err)
    })
})
categoryController.create = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
    const c1 = new Category(body)
    c1.save()
    .then( category =>{
        res.json(category)
    })
    .catch( err =>{
        console.log(err)
    })

}
categoryController.update=(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
    const id = req.params.id
    Category.findByIdAndUpdate(id,body,{new:true})
    .then(category =>{
        res.json(category)
    })
    .catch(err =>{
        console.log(err)
    })
}
categoryController.destroy = (req,res)=>{
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then( category =>{
        res.json(category)
    })
    .catch(err =>{
        console.log(err)
    })
}
module.exports = categoryController