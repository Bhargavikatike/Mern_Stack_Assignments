import exp from 'express'
import { userModel } from '../Models/userModel.js'
import { ProductModel } from '../Models/productModel.js';
export const userRouter=exp.Router()

//create user
userRouter.post('/users',async(req,res)=>{ 
    let userObj=req.body;
    await new  userModel(userObj).validate()

    //hashed password
    //await is used to stop the empty passwords by user
    let hashedPassword= await hash(newUser.password,12)
    userObj.password=hashedPassword

    let userDocument=new userModel(userObj)
    await userDocument.save({validateBeforeSave:false})
    res.status(201).json({message:"user Created",payload:userObj})
})

/*
//add product in user's cart
userRouter.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{ 
    //readuser and prod id from url
    let {uid,pid}=req.params; //reads the urls and returns in obj from //{uid:"",pid:""}
    //console.log(uid)
    //console.log(pid)
    //check user (using findOne)
    let user=await userModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"user not found"})
    }
    //check product
    let product=await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"product not found"})
    }
    //perform update
    //since cart of type array we use push to insert
    let modifiedUser=await userModel.findByIdAndUpdate(
        uid,
        {$push:{cart:{product:pid}}},
        {new:true}
    )
    //res
    res.status(200).json({message:"product added into cart",payload:modifiedUser})
})
*/

//read user by id
userRouter.get('/users/:uid',async(req,res)=>{
     let {uid}=req.params;
     //find user
     let userObj=await userModel.findById(uid).populate("cart.product")
     //response
     res.status(200).json({message:"user",payload:userObj})
    })
    //increase the quantity of the product if present
userRouter.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
    let {uid,pid}=req.params
    //check the user  is avail
    let userObj=await userModel.findById(uid)
    if(!userObj)
    {
        return res.status(401).json({message:"user not found"})
    }
    //check the product is available
    let prodObj=await ProductModel.findById(pid)
    if(!prodObj)
    {
        return res.status(401).json({message:"product not found"})
    }

    let cartItem=user.cart.find(
        a=>a.prodObj.toString()==pid)

    if(cartItem){
        cartItem.quantity+=1
    }
    else{
        user.cart.push({
            product:pid,
            quantity:1
        })
    }
    
    res.status(200).json({message:"product updated sucessfully",payload:userObj})
})


//read user by id
userRouter.get('/compare/:pid',async(req,res)=>{
    let productId=req.params.pid
    //get product
    let prot =await ProductModel.findById(productId) 
    //compare ids
    /*
    if(productId==productId._id){
        console.log("Equal")
    }
    else{
        console.log("Not Equal")
    }*/

    if(productId._id.equals(productId)){
     console.log("Equal")
    }
    else{
        console.log("Not Equal")
    }
})