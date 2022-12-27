const mongoose=require('mongoose')
const connectdb=async()=>{

    try {
    await mongoose.connect(process.env.dbURL)
    console.log('data is connected')
    } catch (error) {
        console.log(error)
    }

}


module.exports=connectdb