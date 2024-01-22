const expenseValidationSchema = {
    expenseDate :{
        notEmpty : {
            errorMessage:'date is required'
        },
        isDate:{
            errorMessage:'enter valid expense date'
        }
    },
    amount:{
        notEmpty:{
            errorMessage:'amount is required'
        } 
    },
    categoryId:{
       notEmpty:{
        errorMessage:'enter categoryId'
       },
       isMongoId:{
        errorMessage:'enter valid Mongo Id'
       }
    }

}
module.exports = expenseValidationSchema