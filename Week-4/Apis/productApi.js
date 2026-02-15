import exp from 'express'
import { ProductModel } from '../Models/productModel.js'
export const prodRouter=exp.Router()

//route to cretae new product
prodRouter.post('/products',async(req,res)=>{ 
    let productObj=req.body;
    let productDocument=new ProductModel(productObj)
    await productDocument.save()
    res.status(201).json({message:"Product Created"})
})