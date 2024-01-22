const express = require('express')
const cors = require('cors')

const {checkSchema} = require('express-validator')
const app = express()

const Expense = require('./app/models/expense-model.js')
const port = 3050
 const configDB = require('./config/db.js')
 const categoriesController = require('./app/controllers/categories-controller.js')
 const expenseController = require('./app/controllers/expenses-controller.js')
 const categoryValidationSchema = require('./app/validations/category-validations.js')
 const expenseValidationSchema = require('./app/validations/expense-validations.js')
 configDB()
    app.use(express.json()) //parse the incoming data
    app.use(cors())



   app.get('/api/categories',categoriesController.list)
   app.post ('/api/categories',checkSchema(categoryValidationSchema),categoriesController.create)
   app.put('/api/categories/:id', checkSchema(categoryValidationSchema),categoriesController.update)
   app.delete('/api/categories/:id',categoriesController.destroy)


   app.get('/api/expenses', expenseController.list)
   app.post('/api/expenses',checkSchema(expenseValidationSchema),expenseController.create)
   app.put('/api/expenses/:id',checkSchema(expenseValidationSchema),expenseController.update)
   app.delete('/api/expenses/:id',expenseController.destroy)

app.listen(3050,()=>{
    console.log(`the expense app is running on ${port}`)
})