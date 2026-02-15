import {Schema,model} from 'mongoose'

const productSchema= new Schema({
    productName:{
    type:String,
    required: [true,"Product Name is required"],
   },
   price:{
    type:Number,
    required:[true,"product price is required"]
   },
   brand:{
    type:String,
    required:[true,"product brand is required"]
   },
   quantity:{
    type:Number,
    required:[true,"quantity is required"]
   }
},
{
    strict:"throw",
    timestamps:true,
    versionKey: false 
    
})
export const ProductModel=model("product",productSchema)