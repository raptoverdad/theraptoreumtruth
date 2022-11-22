<template>
<div class="chatDiv">
  <div class="chatBox">
   <div class="chatMessage" v-for="item in messages"><img class="chatProfilePicture" v-bind:src="item.profilepicture" alt=""><h1 class="chatUser">{{item.user + ':'}}</h1> <p class="chatUserMessage">{{item.mensaje}}</p></div>
  </div>
   <div class="chatOptions">
     <input class="messageInput" type="text">
     <input type="button" class="sendButton" value="send">
   </div>
</div>
</template>
<script>
import {io} from 'socket.io-client'
const socket=io('http://localhost:4000/',{
  withCredentials:false,
  extraHeaders:{
    "Access-Control-Allow-Origin":null
  }
})
export default {
  name: 'chat',
  data(){
return{
  messages:[]
}
  },
  components: {
}, mounted(){

socket.on('connect',()=>{
socket.emit('chatVisitor')
})
socket.on('chatMessages',(datos)=>{
this.messages=datos
console.log('messages:',this.messages)
})
}
,
methods:{

}
}
  </script>
  <style scoped>
   .chatDiv{
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 90vh;
width: 100%;
max-height: 90vh;

background-color: brown;
}
.chatBox{
background: #000;
width: 70vw;
height: 70vh;
overflow: scroll;
}
.div{
  color: #f00;
}
.messageInput{
  width: 61vw;
  height: 4vh;
}
.chatProfilePicture{
height: 6vh;
width: 6vh;
}
.chatUser{
  color: #f00;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left:2vh ;
}
.chatMessage{
  display: flex;
  align-items: center;
}
.sendButton{
width: 8vw;
height: 6vh;
background-color: #000;
color: #f00;
border: 3px solid #f00;
font-weight: bold;
font-size: x-large;
}
.chatOptions{
  display: flex;
  justify-content: center;
  align-items: center;
}
.chatUserMessage{
  color: #fff;
  font-size: x-large;
  margin: 2vh;
}
  </style>