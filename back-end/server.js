const express =require('express')
 const app= express()
 require('dotenv').config({path:'./config/.env'})
 const connectdb=require('./config/connectdb')

 app.use(express.json())

 const port =process.env.PORT|| 5000
 connectdb()






app.use('/product',require('./routes/productRoutes'))
app.listen(port,(err)=>err?console.log(err):console.log(`server is running on port ${port}`))