<template>
<div class="login">
   <div class="confirmMail" v-if="$store.state.registerSuccess">
    
    <h1  style="font-family: 'Kanit', sans-serif;">you've been succesfully registered, please confirm your email </h1>
    <button v-on:click="$store.commit('goLogin')">understood</button>

</div>
        <div class="logbackground">
            <img class="raptologo" src="@/assets/rtm.png" alt="">
        </div>

             <div class="log">

                 <div class="info">
                     <h1 style="color:#fff;font-size:4vh">Hi Raptorean!</h1><h1 style="color:#f00;font-size:4vh">nice to see you again.</h1>
                 </div>

                          <form class="form" v-on:submit.prevent="$store.commit('registerPost')">

                               <h1 style="color:#f00;font-size: 6vh;font-family: 'Kanit', sans-serif" >Register</h1>
                               <label for="username">username</label>
                               <input id='username' v-model="$store.state.registerUser" type="text">
                               <p class="error" v-if="$store.state.userError">user already exists</p>
                               <label for="email">email</label>
                               <input id="email" v-model="$store.state.registerEmail" type="email">
                               <p class="error" v-if="$store.state.emailError">this email is already registered</p>
                               <label for="password">password</label>
                               <input id="password" v-model="$store.state.registerPassword" type="password">
                               <label for="password2">repeat password</label>
                               <input id="password2" v-model="$store.state.registerPassword2" type="password">
                               <input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="register">
                               <div class="error" v-if="error">something's wrong with our server, try again later</div>
        
                         </form>
            </div>
</div>
</template>

<script  scoped>
import axios from 'axios'
export default {
name: 'registerView',
components: {

  },
  data(){
    return{


    }
  },
  computed:{
   userRegister(){
   
   }
  },
  methods:{

  }
}
</script>

<style>
    
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .confirmMail{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #151515;
    z-index: 10;
  }
  .confirmMail h1{
    color: #fff;
    text-align: center;
  
  
  }
  .confirmMail button{
    margin-top: 5vh;
    width: 20vw;
    height: 5vh;
    cursor: pointer;
    border:2px solid #fff;
    background: transparent;
    color: #fff;
 font-family: 'Kanit', sans-serif;
 font-weight: 900;
  }
  .confirmMail button:hover{
    background-image: linear-gradient(#000,red);
 color: #fff;
}
    .login{
        height:90vh;
        width: 100%;
        background-color: black;
    }
    .error{
    color: #f00;
    text-align: center;
}
    .logbackground{
        display: flex;
        justify-content: center;
        align-items: center;
        height:90vh;
        width: 100%;
       background-color: #151515;
    }
    .log{
        display: flex;
        justify-items: center;
        background-color:transparent;
      
        position: absolute;
        bottom: 0;


    }
    .info{
        background: transparent  !important;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height:90vh;
        width: 50vw;
        font-family: 'Kanit', sans-serif;
  
    }
    form{
        background: transparent  !important;
        flex-direction: column;
     
        justify-content: center;
        align-items: center;
        display: flex;
        height:90vh;
        width: 50vw;
       
    }
    .raptologo{
  height: 30vh;
  width: 30vh;
  animation: raptoreumlogo 2s cubic-bezier(.63,.63,.75,.76)  both infinite;
}
label{
    margin:1vh;
    color: #fff;
    font-size: 5vh;
    font-family: 'Kanit', sans-serif;
}
.submit{
    margin-top: 5vh;
    width: 20vw;
    cursor: pointer;
    border:2px solid #fff;
    
}

#password,#email, #password2, #username{
    width: 20vw;
    border: none;
    border-bottom:2px solid #f00;
}
input{
    background-color: transparent;
    color: #fff;
    outline: none;
    border-bottom: 2px solid #f00;
    font-size: 5vh;
}
.submit:hover{
    background-image: linear-gradient(#000,red);
 color: #fff;
}

@keyframes raptoreumlogo {
    
    0%{
        transform: rotateY(0deg);
        filter: drop-shadow(0 0 5vh rgb(255, 0, 0));
    }50%{
        filter: drop-shadow(0 0 0vh rgb(255, 0, 0));
        
    }100%{
        filter: drop-shadow(0 0 5vh rgb(255, 0, 0));
        transform: rotateY(360deg);
    }
    
}
@media (max-width: 700px) {
.log{

    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100vw;
    bottom: 0;
    height: 61vh;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 70%;
}
.logbackground{
      
       background-color: #000;
    }
    label{
        color: #fff;
    }
    .submit{
    width: 70vw;
    }
    #password,#email,#username,#password2{
    width: 60vw;
    border: none;
    border-bottom:2px solid #f00;
}
.info{
    margin-top: 5vh;
    margin-bottom: 10vh;
}
.login{
    height:130vh;
}
.confirmMail{
    height: 115vh;
    padding-bottom: 25vh;
}

}

</style>