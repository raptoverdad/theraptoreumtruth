require('dotenv').config({ path: `${__dirname}/.env`}) 
const nodemailer = require("nodemailer");
const {google}=require("googleapis")
const mail={
    user:process.env.GOOGLE_MAIL,
    pass:process.env.G00GLE_PASS
}
const CLIENT_ID='40290909520-bqu8o7p9tphljoredovpkf8a7g3t51s4.apps.googleusercontent.com'
const CLIENT_SECRET='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'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04kqYeN7LZ6h4CgYIARAAGAQSNwF-L9IrAcMIDITI8KY0wDU0pIOAyc8hzYgASxaFYPylfMCVMWe7-Z9eh9XO9kp_zGZiR2zsqWc'
const oAuthToClient=new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)
oAuthToClient.setCredentials({refresh_token:REFRESH_TOKEN})
async function sendMail(email, token){
    try {
  const accessToken= await oAuthToClient.getAccessToken()
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
       type:'oauth2',
       user:mail.user,
       clientId:CLIENT_ID,
       clientSecret:CLIENT_SECRET,
       refreshToken:REFRESH_TOKEN,
       accessToken:accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});
   const mailOptions={
    from: '"RAPTOREUM CEO 👻" <rodrigomreidenbach@gmail.com>', // sender address
    to:email, // list of receivers
    subject: "confirm your email ✔", // Subject line
    text: "Hello?", // plain text body
    html: `<h1>Hi raptorean click here to confirm your email: </h1><a href='http://localhost:3000/confirm/${token}'>confirm account</a>`
   }
   const result= await transporter.sendMail(mailOptions)
   return result
    } catch (error) {
        console.log('something went wrong',error)
    }
}



module.exports={
    sendMail
}