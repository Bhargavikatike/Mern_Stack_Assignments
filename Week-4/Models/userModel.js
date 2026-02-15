import {Schema,model} from 'mongoose'
//create cart schema
const cartSchema=new Schema({
    product:{
    type:Schema.Types.ObjectId, 
    ref:'product', //name of the product
    required:true
    },
    quantity:{
        type:Number
    }
})
const userSchema= new Schema({
    name:{
        type:String,
        required: [true," Name is required"]
   },
   email:{
        type:String,
        required: [true,"email is required"],
        unique:true 
   },
   password:{
    type:String,
        required: [true,"password is required"],
   },
cart:{
    type:[cartSchema]
}
})
export const userModel=model("user",userSchema)