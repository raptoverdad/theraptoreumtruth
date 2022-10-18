<template>
  <div class="raptoChan" v-if="$store.state.language == 'english'">
  <i class="fa-solid fa-arrow-right" v-on:click="closeChan()"></i>
  <div class="section">
    <h1 class="sectionTitle">Raptoreum chan: Create your own chan</h1>
    <h3 class="sectionBody">Given that the current 'chan' of Raptoreum has been choosen by... (no one), i decided to create a game where you 
      can create your own chan of Raptoreum. download the final result and share it with your friends.
    </h3>
   <button class="button" v-on:click=" openRaptochan()">PLAY</button>
  </div>

  <div class="section sectionImage">
   <img src="../assets/raptochancaptureoficial.png" alt="">
  </div>
</div>


<div class="raptoChan" v-if="$store.state.language == 'spanish'">
  <i class="fa-solid fa-arrow-right" v-on:click="closeChan()"></i>
  <div class="section">
    <h1 class="sectionTitle">Raptoreum chan: Crea tu propio chan</h1>
    <h3 class="sectionBody">Dado que el actual 'chan' de raptoreum fue escogido por... (nadie), decidí crear un juego donde puedas
      crear tu propio chan de raptoreum.Descarga el resultado final y compartelo con tus amigos.
    </h3>
   <button class="button" v-on:click=" openRaptochan()">JUGAR</button>
  </div>

  <div class="section sectionImage">
   <img src="../assets/raptochancaptureoficial.png" alt="">
  </div>
</div>


<div class="games" v-if="$store.state.language == 'english'">

    <h1 class="gametitle">THE RAPTOREUM TRUTH'S GAMES</h1>
    <h2 class="gametitle2">play online or offline games as you share with people who love raptoreum</h2>
    
    <div class="wrapperGames">
     <div  class="container"><img src="../assets/raptoreummundial.png" alt=""></div>
     <div  class="container"><img src="../assets/encuestas.png" alt=""></div>
     <div  class="container"><img src="../assets/estadisticas.png" alt=""></div>
     <div class="container"><img src="../assets/raptoreumsmartcontracts.png" alt=""></div>
     <div class="container" ><img src="../assets/raptojuegos.png" alt=""></div>
     <div v-on:click="openChan()" class="container"><img src="../assets/raptochanfoto.png" alt=""></div>
    </div>

</div>
<div class="games" v-if="$store.state.language == 'spanish'">
 
    <h1 class="gametitle">JUEGOS THE RAPTOREUM TRUTH</h1>
    <h2 class="gametitle2">juega juegos en linea o desconectado al mismo tiempo que compartes con gente que ama raptoreum</h2>
    
    <div class="wrapperGames">
     <div  class="container"><img src="../assets/raptoreummundial.png" alt=""></div>
     <div  class="container"><img src="../assets/encuestas.png" alt=""></div>
     <div  class="container"><img src="../assets/estadisticas.png" alt=""></div>
     <div class="container"><img src="../assets/raptoreumsmartcontracts.png" alt=""></div>
     <div class="container" ><img src="../assets/raptojuegos.png" alt=""></div>
     <div v-on:click="openChan()" class="container"><img src="../assets/raptochanfotoespañol.png" alt=""></div>
    </div>
 
</div>

</template>
<script>

export default {
  name: 'games',
  components: {

  },
  methods:{
    openRaptochan(){
window.location.href="https://raptoverdad.github.io/raptochan/"
}, openAbout(){
this.$router.push('about')
},openContracts(){
  this.$router.push('smartcontracts')
}
,openSurveys(){
  this.$router.push('surveys')
}
,openStatistics(){
  this.$router.push('statistics')
}
,openChan(){

  document.querySelector('.games').style.display='none'

  document.querySelector('.raptoChan').style.display='flex'
},
closeChan(){
  document.querySelector('.games').style.display='flex'
  document.querySelector('.raptoChan').style.display='none'
}
  }
}
</script>
<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.games{

    max-width: 100vw;
    height: min-content;
    background:linear-gradient(#000,#f00) ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
}
.wrapperGames{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px; /*The space between grid containers*/
  grid-auto-rows:minmax(30vh,30vh);
  animation: background 3s infinite;
  padding: 5px 0;
 overflow-x: hidden;
}
.gametitle{
    margin:20px ;
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-bottom: 2px solid #f00;
}
.gametitle2{
    margin:20px ;
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.container{
display: flex;
justify-content: center;
border: 1px solid #000;
background-color: #000;
cursor: pointer;
overflow: hidden;
}
.container:hover{
  transform: rotateY(360deg);
  transition: 1s;
}
.button{
    margin-top: 5vh;
    width: 50vw;
    cursor: pointer;
    border:2px solid #fff;
    background-color: transparent;
    color: #fff;
    outline: none;
    border-bottom: 2px solid #f00;
    font-size: 5vh;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.button:hover{
    background-image: linear-gradient(#000,red);
 color: #fff;
}.raptoChan{
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right,#000,#f00);
  left: 0;
  
  width: 100%;
 
  max-width: 100vw;
  z-index: 10000;
}
.section{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 50%;
  background-color:transparent;
  animation: gameInfo 2s forwards;
}
.section img{
  height: 600px;
  width: 600px;
}
.sectionTitle{
  color: #fff;
  border-bottom: 2px solid #f00;
  margin-bottom: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size:7vh;
}
.sectionBody{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: xx-large;
  color: #fff;
}
i{
  position: absolute;
  z-index: 100000000;
  transform: rotate(180deg);
  font-size: 80px;
 cursor: pointer;
 color: #fff;
 left: 0;
 top: 0;
}
i:hover{
  filter: drop-shadow(0vh 0vh 3vh #fff);
}
@keyframes gameInfo{
  0%{
    opacity:0;
    transform: translateY(100px);  
  }100%{
    opacity:2;
    transform: translateY(0px);  
  }
}
@keyframes background{
0%{
background-color: #000;
}
50%{
  background-color: #f00;
}
100%{
  background-color: #000;
}
}

@media (max-width: 1200px) {
 .raptoChan{
  flex-direction:column-reverse;
  bottom: -60vh;
 }
 .section img{
  height: 360px;
  width: 360px;
  
}

.section{
  min-height: 65vh;
}
.sectionTitle{
  text-align: center;
  font-size:5vh;
}
.sectionBody{
  text-align: center;
  font-size: x-large;
  color: #fff;
}
.wrapperGames{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px; /*The space between grid containers*/
  grid-auto-rows:minmax(50vh,50vh);
  animation: background 3s infinite;
  padding:   5px 0px;
  max-width: 100vw;

}

}


@media (max-width: 533px) {
 .raptoChan{
  flex-direction:column-reverse;
  bottom: -30vh;
 }
 .section img{
  height: 360px;
  width: 360px;
  
}
.section{
  min-height: 50vh;
  overflow-x: hidden;
}
.sectionTitle{
  text-align: center;
font-size:5vh;
}
.sectionBody{
  text-align: center;
font-size: x-large;
color: #fff;
}
.wrapperGames{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px; /*The space between grid containers*/
  grid-auto-rows:minmax(50vh,50vh);
  animation: background 3s infinite;
  padding:   5px 0px;
  max-width: 100vw;
 max-height: 100vh;
}
}
@media (max-width: 447px) {
 .raptoChan{
  flex-direction:column-reverse;
  bottom: -70vh;
  text-align: center;
 }
 .section img{
  height: 360px;
  width: 360px;
  
}
.section{
  min-height: 70vh;
}
}
@media (max-width: 400px) {
 .raptoChan{
  flex-direction:column-reverse;
  bottom: -70vh;
 }
 .section img{
  height: 360px;
  width: 360px;
  
}
.section{
  min-height: 70vh;
}
}

@media (max-width: 394px) {
 .raptoChan{
  flex-direction:column-reverse;
  bottom: -70vh;
 }
 .section img{
  height: 360px;
  width: 360px;
  
}
.section{
  min-height: 71vh;
}
}
@media (max-width: 376px) {
 .raptoChan{
  flex-direction:column-reverse;
  bottom: -70vh;
 }
 .section img{
  height: 360px;
  width: 360px;
  
}
.section{
  min-height: 70vh;
}

}
@media (max-width: 349px) {
 .raptoChan{
  flex-direction:column-reverse;
  bottom: -70vh;
 }
 .section img{
  height: 360px;
  width: 360px;
  
}
.section{
  min-height: 70vh;
}

}
</style>