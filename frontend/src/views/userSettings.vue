<template>
<div class="settingsDiv">

  
  <h1 v-if="$store.state.language == 'english'" class='title'>your profile picture:</h1> <h1 v-if="$store.state.language == 'spanish'" class='title'>tu foto de perfil:</h1>
  <img src="" class="picture" alt="">
  <div class="cambiarFoto">
    <h1 class='title' v-if="$store.state.language == 'english'">select your new profile picture:</h1>
    <h1 class='title' v-if="$store.state.language == 'spanish'">selecciona tu nueva foto de perfil:</h1>
   


  </div>
  
  <div class="pictures">
    <img  class='optionImg' value="1" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="2" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667583140/bigpiggy_aolbmf.jpg" alt="">
    <img  class='optionImg' value="3" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="4" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="5" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="6" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="7" v-on:click="$store.commit('changeProfilePicture')"  src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="8" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="9" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="10" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="11" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
    <img  class='optionImg' value="12" v-on:click="$store.commit('changeProfilePicture')" src="https://res.cloudinary.com/debvhmcid/image/upload/v1667441214/foto_w8m2y8.jpg" alt="">
</div>
 
</div>
</template>
<script>
import axios from 'axios'

export default {
name: 'userSettings',

components: {
},data(){
return{
picture:'',
username:''
}

},
created() {
  axios.get(`http://localhost:3000/settings/${localStorage.getItem('token')}`)
.then(res=>{
  if(res.data.success==='true'){
    console.log('success')
    this.picture=res.data.picture
    this.username=res.data.username
    document.querySelector('.picture').src=this.picture
 }
})
},
methods:{

},
}

</script>
<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.pictures{
  height: 20vh;
  width: 100vw;
  display: flex;
 justify-content: center;
 align-items: center;
  flex-wrap: wrap;
}
#profilepic{
  position: relative;
  left: 0;
height: 10vh;
width: 10vw;
}
.optionImg{
  max-height: 10vh;
  max-width: 10vh;
  min-height: 10vh;
  min-width: 10vh;
  padding: 7px;
  cursor: pointer;
}
.optionImg:hover{
border: 3px solid #f00;

}
.title{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
text-align: center;
}
.settingsDiv{
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 90vh;
width: 100%;
max-height: 90vh;

background-color: brown;
}
#fileInput{
  width: 10vw;
  background: linear-gradient(to top,#f00,#000);
  color: #fff;
  height: min-content;
  border: 3px solid black;
  font-size:x-large;
  border-color: black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  cursor: pointer;
}
.photo{
  display:flex;
  min-width: 15vh;
  min-height: 15vh;
  max-width: 15vh;
  max-height: 15vh;
  background-color: aqua;
}
.picture{
  max-height: 20vh;
  max-width: 20vh;
  min-height: 20vh;
  min-width: 20vh;
}
.cambiarFoto{
  display: flex;
  flex-direction: row;
  align-items: center;
  
}
@media(min-width: 1200px){
.picture{
margin: 5% 5%;
}

}

</style>
