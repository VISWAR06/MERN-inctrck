const mongoose=require('mongoose')

const dbconnect=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('connted to db')
    }).catch((e)=>{
        console.log(e.message)
    })
}
module.exports=dbconnect