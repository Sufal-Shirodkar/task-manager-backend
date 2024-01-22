const mongoose = require('mongoose')
const {Schema,model}= mongoose
const expenseSchema = new Schema({
    expenseDate : Date,
    amount:Number,
     categoryId:{
            type:Schema.Types.ObjectId,
            ref:'Category'
         },
    description:String
},{timestamps:true})
const Expense = model('Expense',expenseSchema)
module.exports  = Expense