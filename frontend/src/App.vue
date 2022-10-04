<template>
  <nav> 
    <img src="./assets/raptoverdad.png" class="logo" alt="">
    <div class="title"><h1 style="font-family: 'Kanit', sans-serif;" >The Raptorean Truth</h1></div>

   <div class="fakenav"> 
     <router-link tag="a" class="home" style="font-family: 'Kanit', sans-serif;"  class-active="active" to="/">Home</router-link>
     <router-link tag="a" class="login" style="font-family: 'Kanit', sans-serif;" class-active="active" to="/login">login</router-link> 
     <router-link tag="a" class="register" style="font-family: 'Kanit', sans-serif;" class-active="active" to="/register">register</router-link></div>
  </nav>
  <router-view/>
</template>
<script>
    import axios from 'axios'
    import store from './store/index.js'

    export default {
    name: 'appView',
    store,
    components: {
  
    },data(){
      return{
     
      }
    },
    methods:{
  
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

  width: 100vw;
  height: 10vh;
  background-color: black;
  color: red
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
.login{
  /* display: none; */
}
.fakenav{
   

 position: absolute;
 right: 0;
  
}
.title{
  border-bottom:2px solid #f00;
  position: absolute;
 left: 0;
 font-size:3vh;
 margin-left:10px ;
}

.logo{
position: absolute;
top: 0;
left: 49vw;
width: 10vh;
height: 10vh;
}


@media (max-width: 700px) {
 nav{
  display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
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
border-bottom:2px solid #f00;
margin-left: 0;

}
.logo{
  position: static;
  display: block;
  height: 16vh;
  width: 16vh;
}
}
</style>
