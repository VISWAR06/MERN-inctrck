const error=(err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).json({
        success:false,
        message:'internal server',
        statusCode:500
    })
}
module.exports=error