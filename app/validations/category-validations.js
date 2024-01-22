
const categoryValidationSchema = {
    name:{
        notEmpty:{
            errorMessage : 'name required'
        }
    }
}
module.exports = categoryValidationSchema