const chatModule={
    state:{
      count:0
    },
    //PARA RECIVIR PETICIONES SE USAN LETRAS MAYUSCULAS
    mutations:{
      SOCKET_increment(state,data){ //data son los datos que se reciven
      state.count=data
      },
      SOCKET_decrement(state,data){ //data son los datos que se reciven
        state.count=data
        }
      },
    //para enviar peticiones se usan minusculas
    actions:{
    socket_increment:({state,rootState})=>{
     rootState.io.emit('sayHi',{messagge:'hi!'})
    }
    }
    }
 
export default chatModule;