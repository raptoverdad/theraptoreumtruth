<template>
    <div class="login">
      
        <div class="logbackground">
            <img class="raptologo" src="@/assets/rtm.png" alt="">
        </div>

        <div class="log">
       
        <div class="info">
            <h1 style="color:#fff;font-size:4vh">Hi Raptorean!</h1><h1 style="color:#f00;font-size:4vh">nice to see you again.</h1>
            <h1> {{$store.state.msg}}</h1>
           
        </div>

        <form class="form" v-on:submit.prevent="$store.commit('loginPost')">

            <h1 style="color:#f00;font-size: 6vh;font-family: 'Kanit', sans-serif" >Login</h1>
           
            <label for="email">email</label>
            <input id="email" v-model="$store.state.loginEmail" type="email">
            <label for="password">password</label>
            <input id="password" v-model="$store.state.loginPassword" type="password">
            <input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="log in">
           
            <div class="error" v-if="error">something's wrong with the server, try again later</div>
        
        </form>

        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import store from '../store/index.js'
    export default {
  name: 'loginView',
  store,
  components: {

},data(){
    // return{
    //     loginEmailValue:'',
    //     loginPasswordValue:'',
    //     error:false
},
computed:{
logindata(){

}
},
methods:{
login:()=>{

}
},
  computed:{
 
  },

}
</script >

<style scoped>
    
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    .login{
        height: 90vh;
        width: 100%;
        background-color: black;

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
       
        position: absolute;
        bottom: 0;
        background: transparent ;
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

#password,#email{
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
padding-top: 30%;
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
    #password,#email{
    width: 60vw;
    border: none;
    border-bottom:2px solid #f00;
}
.info{

}
.login{
    height: 130vh;
}
}

</style>