import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

export default createStore({
  state: {
    registerUser:'',
    registerEmail:'',
    registerPassword:'',
    registerPassword2:'',
    loginEmail:'',
    loginPassword:'',
    isUser:false,
    userUsername:'',
    userError:false,
    emailError:false,
    registerSuccess:false,
    userNotVerified:false,
    loginError:false,
    credentialError:false,
    isNotUser:true,
    token:localStorage.getItem("token"),
    username:localStorage.getItem("user"),
    language:localStorage.getItem("language")
  },
  getters: {
  },
  mutations: {
    loginPost(state){
      if(state.loginEmail.includes('*','=','or','OR','SELECT','select','from','FROM','DROP','drop') || state.loginPassword.includes('*','=','or','OR','SELECT','select','from','FROM')){
     alert('you are using not allowed characters // estás usando caracteres no permitidos .|.')
}
else{
        let loginUserData={loginEmail:state.loginEmail,loginPassword:state.loginPassword}
        axios.post('http://localhost:3000/login',loginUserData)
        .then(res=>{
    

          try {
          if(res.data.access=='approved'){

          localStorage.setItem('user',res.data.username)
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('profilePicture',res.data.img)
          state.isUser=true
          state.isNotUser=false
           window.location.href = "http://localhost:8080/"

          }else if(res.data.access=='denied'){
            console.log('denied:',res)
            loginError=true
          }
          } catch (error) {
            console.log(error)
          }

          }).catch(err=>{
              console.log(err.response.data.error)

              try {
                if(err.response.data.error === "userDoesn'tExist"){
                  state.userError =true
                }else if(err.response.data.error === "userNotVerified"){
                  state.userNotVerified=true
                }else if(err.response.data.error === "databaseError"){
                  state.error=true
                } 
              } catch (error) {
                
              }

         
        })
      }
     
    },
    registerPost(state){
      console.log(state.registerUser)
  if(state.registerEmail.includes('*' || '=' || 'or' ||'OR' ||'SELECT' ||'select' || 'from' || 'FROM' || 'DROP' || 'drop' || "#")){
        alert('your email contains not allowed characters // tu email contiene caracteres no permitidos')
   }
   else{
           let registerUserData={registerEmail:state.registerEmail,registerPassword:state.registerPassword,registerUser:state.registerUser,registerPassword2:state.registerPassword2}
           axios.post('http://localhost:3000/register',registerUserData)
           .then(res=>{
          
             console.log(res)         
//aqui vendria la redireccion a la pagina para que confime su correo electronico
            
            try{
              if(res.data.access == 'denied'){
                 console.log('denied',res.data)
              }else if(res.data.access == 'granted'){
                state.registerSuccess=true
                console.log('granted',res.data)
              }
            }catch(e){
              console.log(e)
            }
               
          try {
            if(res.data.error=='joiError' && state.language == 'english'){
             alert('you are using not allowed characters in username')
            }else if(res.data.error=='joiError' && state.language == 'spanish'){
              alert('estás usando caracteres no permitidos en tu nombre de usuario')
            }
          } catch (error) {
            
          }

           }).catch(err=>{
   
              try {
                if(err.response.data.error==='this user already exists'){
                     state.userError= true
                }else if(err.response.data.error==='this user email exists'){
                  state.emailError= true
                }
              } catch (error) {
                
              }
           })
         }
        
}, goLogin:(state)=>{
      state.registerSuccess=false
},goRegister:(state)=>{
   state.userError=false
},goVerify(state){
   state.userNotVerified=false
},goError(state){
  state.loginError=false
},userStatus(state){

console.log(state.token)
},
credentialErrorFalse(state){
state.credentialError=false
},logOut(){
  localStorage.removeItem("token")
  window.location.href = "http://localhost:8080/"
},getRichList(){
  
fetch('https://explorer.raptoreum.com/api/queryrichlist?start=0&length=1', {
  method: 'GET',
  headers: {
    mode: "no-cors"
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data));
}
  },
  actions: {
  
  },
  modules: {
  }
})

