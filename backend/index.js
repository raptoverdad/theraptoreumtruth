require('dotenv').config({ path: `${__dirname}/.env` }) 
const express=require('express')
const cors=require('cors')
const mysql=require('mysql')
const joi=require('joi')
const jwt =require('jsonwebtoken')
const sqlfile=require('./sql.js')
const brcryptjs= require('bcryptjs')
const {body,validationResult, param}=require('express-validator')
const {getToken,getTokenData}=require('./config/jwt.config.js')
const {sendMail}=require('./config/mail.config')
const {conector}=require('./sql')
const complexity= require('joi-password-complexity')

const app=express()
app.use(express.json())
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))

app.listen('3000',()=>{
    console.log('listening on port 3000')
})

const verifyToken=(req,res,next)=>{

    let bearerHeader=req.headers['authorization']
    
    if (typeof bearerHeader !== 'undefined'){
        const bearerToken= bearerHeader.split(" ")[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}
//hacer funcion que se meta ala tabla de un usuario en especifico y cambie el valor de verified
const verified=(email)=>{
  sqlfile.conector.query(`UPDATE users SET verified = 'true' WHERE email = '${email}'`,(err,result,field)=>{ 
   if(err){
      return false
    }else{
      return true
    }
})
}
app.get('/confirm/:token',(req,res)=>{
  const confirm= async()=>{
    try {
      const token=req.params.token
      const data= await getTokenData(token)
      const userEmail= data.data
      if(data===null){
        return res.json({error:"something went wrong confirmacion no valida"})
      }else{
           sqlfile.conector.query(`SELECT * FROM users WHERE email = '${userEmail}'`,(err,result,field)=>{ 
            if(result[0]){
              verified(userEmail)
     
                res.send(`your email has been confirmed you can login now here: <a href=${process.env.LOGIN_LINK}>goooo!</a>`)
             
            }else if(err){
              res.send("something went wrong please try again later")
            }
     })
    }
      console.log('token data:',data)
  
  console.log('token param',token)
    
      
    } catch (error) {
      console.log(error)
    }
  }
confirm()
})    

app.post('/login',[ body('loginEmail').isEmail({ allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false, blacklisted_chars: '*', host_blacklist: ['*-'] })
.normalizeEmail().toLowerCase(),
body('loginPassword').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}),],(req,res)=>{
let body=req.body
console.log(body)
let loginEmail=body.loginEmail
let loginPassword=body.loginPassword
let errors=validationResult(req)
if(!errors.isEmpty()){
res.status(401).json({errors:errors})
}else{
  const login=(email,userpassword)=>{

    let sql3=`SELECT * FROM users WHERE email = '${email}'`
    
  conector.query(sql3,(err,result,field)=>{
  
  if(err){
   res.status(401).json({error:'databaseError'})
  }
  try {
   
  if (!result[0]){
    res.status(401).json({error:"userDoesn'tExist"})
    
    } else if (result[0].verified === 'true'){
   
     let compare= brcryptjs.compareSync(userpassword,result[0].password);
     if(compare){
           jwt.sign({loginEmail},"secretkey",(err,token)=>{ //ver tutorial para saber deque carajo sirve firmar el loginEMAIL https://www.youtube.com/watch?v=B4c2kxs639w&t=1s
             if(err){
               console.log(err)
             }else{
               console.log('good result:',result[0].username)
               res.send(JSON.stringify({access:"approved",token:token,username:result[0].username,img:result[0].profilepicture}))
             }
  })
     }
    }else if (result[0].verified === 'false'){
      res.status(401).json({error:'userNotVerified'})
    }
  } catch (error) {
    console.log("result error: ", error)
  }
  })
  }
  
login(loginEmail,loginPassword)
}
})

function registerUser(req,res,next){
let user=req.body.registerUser

  sqlfile.conector.query(`SELECT * FROM users WHERE username = '${user}'`,(err,result,field)=>{
    if(result[0]){
     res.status(401).json({error:"this user already exists"})
    }else{
      return next()
    }
          })
} 
  
function registerEmail(req,res,next){
  let email=req.body.registerEmail
  
  sqlfile.conector.query(`SELECT * FROM users WHERE email = '${email}'`,(err,result,field)=>{
      if(result[0]){
       res.status(401).json({error:"this email already exists"})
      }else{
        return next()
      }
            })
  } 


          
let securityBridgeRegister1=(req,res,next)=>{

const schema=joi.object().keys({
    registerEmail: joi.string(),
    registerUser: joi.string().min(5).alphanum().required(),
    registerPassword:joi.string(),
    registerPassword2:joi.string()
})
let validation=schema.validate(req.body);
if(validation.error){
  console.log(validation.error.message)
  res.send(JSON.stringify({error:"joiError"}))
}else if(!validation.error){
  next()
}


}

app.post('/register',securityBridgeRegister1,[
body('registerUser')
  .exists()
  .toLowerCase(),
body('registerEmail')
   .isEmail({ allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true, allow_ip_domain: false, domain_specific_validation: false, blacklisted_chars: '*', host_blacklist: ['*'] })
   .normalizeEmail().toLowerCase(),
body('registerPassword')
  .isString()
  .isStrongPassword({ minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}),
 ],registerUser,registerEmail,async(req,res)=>{

  let bodyRes=req.body
  console.log(bodyRes)
  const errors=validationResult(req);
  if(!errors.isEmpty()){
     res.json({error: errors})
  }else{
   
  let passwordHash=await brcryptjs.hash(bodyRes.registerPassword,10)
  
  const register=(email,user,password)=>{
              
     let sql=`INSERT INTO users (email,username,password) VALUES ('${email}','${user}','${password}')`
     sqlfile.conector.query(sql,(err,result,field)=>{
  
  if(result.affectedRows == 1)
  {
  console.log(field)
  const token= getToken(bodyRes.registerEmail)
       let response={access:"granted"}
       sendMail(bodyRes.registerEmail,token)
       res.send(JSON.stringify(response))
  }else{
    
    res.status(401).json({error:'registerError'})
  }
  
  })}

  register(bodyRes.registerEmail,bodyRes.registerUser,passwordHash)
  }
            
  
})

