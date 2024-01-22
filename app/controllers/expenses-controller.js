const Expense = require('../models/expense-model')
const {validationResult } = require('express-validator')
const expenseController ={}
expenseController.list=(req,res)=>{
    Expense.find()
    .then(expenses =>{
        res.json(expenses)
    })
    .catch(err =>{
        res.json(err)
    })
}
expenseController.create =(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
  const body = req.body
  const e1 = new Expense(body)
  e1.save()
  .then( expense =>{
    res.json(expense)
  })
  .catch( err =>{
    res.json(err)
  })
}
expenseController.update = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
 const id = req.params.id
 const body = req.body
 Expense.findByIdAndUpdate(id,body,{new:true})
 .then( expense =>{
    res.json(expense)
 })
 .catch( err =>{
    res.json(err)
 })
}
expenseController.destroy = (req,res)=>{
    const id = req.params.id
    Expense.findByIdAndDelete(id)
    .then( expense =>{
        res.json(expense)
    })
    .catch( err =>{
        res.json(err)
    })
}
module.exports = expenseController