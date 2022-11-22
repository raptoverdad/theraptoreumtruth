<template>
  <div class="languageModal" v-if="!$store.state.language">
    <img class="raptologo" src="@/assets/rtm.png" alt="">
  <h1>select your language:</h1><div><img src="./assets/usaflag.png" alt=""><h1 v-on:click="english">English</h1><img src="./assets/spainflag.png" alt=""><h1 v-on:click="spanish">Spanish</h1></div></div>  
  <nav v-if="!$store.state.token && $store.state.language=='english'"> 
      <img v-if="!$store.state.token" src="./assets/raptoverdad.png" class="logo" alt="">
  
      <div class="title"><h1  >THE RAPTOREUM TRUTH</h1></div>
  
     <div class="fakenav"> 
    
       <router-link tag="a" class="home" style="font-family: 'Kanit', sans-serif;"  class-active="active" to="/">Home</router-link>
       <router-link tag="a" class="login" style="font-family: 'Kanit', sans-serif;" class-active="active" to="/login">login</router-link> 
       <router-link tag="a" class="register" style="font-family: 'Kanit', sans-serif;" class-active="active" to="/register">register</router-link></div>
    </nav>
    <nav v-if="!$store.state.token  && $store.state.language=='spanish'"> 
      <img src="./assets/raptoverdad.png" class="logo" alt="">
      <div class="title"><h1>THE RAPTOREUM TRUTH</h1> </div>
  
     <div class="fakenav"> 
       <router-link tag="a" class="home" style="font-family: 'Kanit', sans-serif;"  class-active="active" to="/">inicio</router-link>
       <router-link tag="a" class="login" style="font-family: 'Kanit', sans-serif;" class-active="active" to="/login">ingresar</router-link> 
       <router-link tag="a" class="register" style="font-family: 'Kanit', sans-serif;" class-active="active" to="/register">registrarse</router-link></div>
    </nav>
    
    <nav class="userNav" v-if="$store.state.token" v-on:load="Animation"> 
      
      <img src="" class="logo" alt="">
      <div class="title"><h1 style="font-family: 'Kanit', sans-serif;" >{{$store.state.username}}</h1></div>
  
     <div class="fakenav" v-if="$store.state.language=='english'"> 
    
       <button class="logOut" v-on:click="$store.commit('logOut')">Logout</button>
     </div>
     <div class="fakenav" v-if="$store.state.language=='spanish'"> 
   
       <button class="logOut" v-on:click="$store.commit('logOut')">Salir</button>
     </div>
    </nav>
  
    <router-view/>
  </template>
  <script>
      import axios from 'axios'
      import createStore from './store/index.js'
    
  
      export default {
      name: 'appView',
      createStore,
      components: {
    
      },data(){
        return{
       picture:'',
       username:''
        }
      },
      mounted() {
      axios.get(`http://localhost:3000/settings/${localStorage.getItem('token')}`)
     .then(res=>{
      console.log(res)
      if(res.data.success==='true'){
      console.log('success')
      console.log(createStore.state.token)
      this.username=res.data.username
      console.log(res.data.picture)
      document.querySelector('.logo').src=res.data.picture
   }
  })
  },
      methods:{
      english:()=>{
       localStorage.setItem("language","english")
       window.location.href = "http://localhost:8080/"
      },
      spanish:()=>{
        localStorage.setItem("language","spanish")
        window.location.href = "http://localhost:8080/"
      },
     
      }
      ,
      
      }
  
  
  
  </script>
  <style  scoped>
  
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
  nav{
    display: flex;
    align-items: center;
    overflow: hidden;
    max-width: 100vw;
    height: 10vh;
    background-color: black;
    color: red
  }
  .fa-gear{
     color: #f00;
     background-color: #000;
     padding-right: 10px;
     cursor: pointer;
     animation:log1animation 5s forwards ;
    }
    .fa-gear:hover{
      
    }
  nav a{
    margin: 1vw;
    padding: 1vw;
    font-size: x-large;
    text-decoration: none;
    color: #f00;
  }
  nav a.router-link-exact-active{
    transition: 1s;
    color: #fff;
  }
  .logOut{
  width: 6vw;
  height: 3vh;
  margin-right:3vh ;
  background: transparent;
  border: none;
  font-size: x-large;
  color: #fff;
  cursor: pointer;
  animation:log1animation 5s forwards ;
  font-weight: 600;
  }
  .login{
    /* display: none; */
  }
  .fakenav{
     
  
   position: absolute;
   right: 0;
    
  }
  .title{
  
    position: absolute;
   left: 1vw;
   font-size:3vh;
   margin-left:10px ; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;}
  
  .logo{
  position: absolute;
  top: 0;
  left: 50%;
  width: 10vh;
  height: 10vh;
  margin-left:10px ;
  }
  .userNav{
    background:#000 ;
    animation:navAnimation 5s forwards;
    color: #f00;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .languageModal{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    background-color: #000;
  }
  .languageModal h1{
  color: #fff;
  }
  .languageModal div{
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1%;
  }
  .languageModal div img{
    height: 50px;
    width: 60px;
    margin: 4%;
  }
  .fa-gear{
  
  }
  
  
  @media (max-width: 1200px) {
   nav{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: 30vh;
  background-color: black;
  color: red
   }
   .fakenav{
     
  
     position: relative;
     margin-top: 10px;
  
     
   }
   .title{
  position: relative;
  text-align: center;
  margin-left: 0;
  font-size: large;
  
  }
  .logo{
    position: static;
    display: block;
    height: 16vh;
    width: 16vh;
  }
  .logOut{
    margin-right:0;
    text-align: center;
    width: 100vw;
  
  }
  }
  @keyframes log1animation{
      
  0%{
  opacity: 0;
  }100%{
  opacity: 5;
  }
      
  }
  @keyframes navAnimation{
    
      }
  </style>
  