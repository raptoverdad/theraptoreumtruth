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
    userProfilePicture:'',
    userUsername:'',
    userError:false,
    emailError:false,
    registerSuccess:false,
    userNotVerified:false
  },
  getters: {
  },
  mutations: {
    loginPost(state){
      if(state.loginEmail.includes('*','=','or','OR','SELECT','select','from','FROM','DROP','drop') || state.loginPassword.includes('*','=','or','OR','SELECT','select','from','FROM')){
     alert('you are using not allowed characters .|. // estás usando caracteres no permitidos .|.')
}
else{
        let loginUserData={loginEmail:state.loginEmail,loginPassword:state.loginPassword}
        axios.post('http://localhost:3000/login',loginUserData)
        .then(res=>{
          console.log(res)

          try {
          if(res.data.access=='approved'){ 
          router.push('/')
          //localstorage
          }else if(res.data.access=='denied'){
            console.log('denied:',res)
          }
          } catch (error) {
            console.log(error)
          }
          
          }).catch(err=>{
          try {
            console.log(err)
            if(err.response.data.error === 'userNotVerified'){
               state.userNotVerified=true
            }
            console.log(state.userNotVerified)
          } catch (error) {
            
          }
        })
      }
     
    },
    registerPost(state){
      console.log(state.registerUser)
  if(state.registerEmail.includes('*','=','or','OR','SELECT','select','from','FROM','DROP','drop')){
        alert('your email contains not allowed characters // tu email contiene caracteres no permitidos')
   }else if(state.registerPassword.includes('*','=','or','OR','SELECT','select','from','FROM')){
    alert('your password contains not allowed characters // tu email contiene caracteres no permitidos')
   }
   else if(state.registerPassword != state.registerPassword2){
       alert('Passwords do not match // las contraseñas no coinciden')
    }else if(state.registerUser.includes('*','=','or','OR','SELECT','select','from','FROM','TABLE','table','?','¿','!','¡','-','"','#','/','(',')','','|','$','%','&',';','<','>','{','}','+',',')){
       alert('your username must only contain letters or numbers')  
   }else if(state.registerPassword2 == '' || state.registerPassword == ''  || state.registerUser=='' || state.registerEmail==''){
    alert('you must fulfill all the fields')  
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

           }).catch(err=>{
              console.log(err.response.data.error)
              if(err.response.data.error==="this user already exists"){
                    state.userError=true
                    state.emailError=false
                  }else if(err.response.data.error==="this email already exists"){
                    state.emailError=true
                    state.userError=false
                  }else if(err.response.data.error==="this email already exists" && err.response.data.error==="this user already exists"){
                    state.userError=true
                    state.emailError=true
                  }
              
           })
         }
        
    }, goLogin:(state)=>{
      state.registerSuccess=false
  
    }
  },
  actions: {
  },
  modules: {
  }
})

