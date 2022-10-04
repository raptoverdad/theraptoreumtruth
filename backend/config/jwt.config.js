require('dotenv').config({ path: `${__dirname}/.env`}) 
const jwt = require('jsonwebtoken')
 
const getToken=(payload)=>{
    return jwt.sign({
        data:payload
    },process.env.SECRET_WORD)
}
console.log('archivo jwt',process.env.SECRET_WORD)
const getTokenData=(token)=>{
    let data =null
    jwt.verify(token,process.env.SECRET_WORD,(err,decoded)=>{
        if(err){
           console.log('error al obtener data del token')
        }else{
           data=decoded
        }
    })
    return data
}

module.exports={getToken,getTokenData}