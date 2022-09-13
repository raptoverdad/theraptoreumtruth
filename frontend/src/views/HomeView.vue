<template>
  <div class="home">

    <div class="wrapper">
     <div class="container">One</div>
     <div class="container">Two</div>
     <div class="container">Three</div>
     <div class="container">Four</div>
     <div class="container">Five</div>
     <div class="container">Six</div>
    </div>
  </div>

  <div class="footer">
    <div class="time">powered by Rapto Verdad</div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'homeView',
  components: {

  },
  methods:{

  }
}
</script>
<style>



  .home{
    height: min-content;
    width: 100vw;

  
  }
.wrapper{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px; /*The space between grid containers*/
  grid-auto-rows:minmax(50vh,50vh);
  animation: background 3s infinite;
  padding: 0.5% 0;
  max-width: 100vw;
 
}
.container{
  border: 1px solid #000;
background-color: #111;
cursor: pointer;
}
.footer{
  position:sticky;
  bottom: 0;
  width:100vw ;
  height: 5vh;
  background-color: #000;
  background: rgba(0, 0,0, 1);
}
  .time{
    display: flex;
    justify-content:center ;
    align-items: center;
    max-width:100%;
    height: 100%;
    color: #fff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
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
</style>