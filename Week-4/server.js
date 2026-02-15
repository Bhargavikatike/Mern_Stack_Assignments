import exp from 'express'
import {userRouter} from './Apis/userApi.js'
import {prodRouter} from './Apis/productApi.js'
import {connect} from 'mongoose'
const app=exp()
const port=4000;
app.use(exp.json())
app.use('/user-api',userRouter)
app.use('/product-api',prodRouter)
app.listen(port,()=>console.log("Server listening on port 4000..."))

async function connectDB(){
    try
    {
    await connect('mongodb://localhost:27017/ecomdb')
    console.log("DB connection sucess")
    }
    catch(err)
    {
    console.log("err in DB connection:",err)
    }
}
connectDB()

app.use((err,req,res,next)=>{
    res.status(500).json({message:err,reason:"error"})
})