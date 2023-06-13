export const process = (encrypt, text, cypher) => {
  return {
    type: "PROCESS",
    payload: {
      encrypt,
      text,
      cypher,
    },
  };
};

export const updateUser = (user) => { 
  return{
    type: "USER",
    user
  }
}

export const updateResetUser = (user) => { 
  return{
    type: "NULL_RESET_USER",
    user
  }
}
export const removeResetUser = () => { 
  return{
    type: "REMOVE_RESET_USER"
    
  }
}


export const updateCurrentRoom = (roomname) => {
  return {
    type: "CURRENT_ROOM",
    roomname
  }
}

export const updateRoomUser = (users) => {
  return {
    type: "UPDATE_ROOM_USER",
    users
  }
}

export const updateToken =  (token) => {
  return{
    type: 'UPDATE_TOKEN',
    token
  }
}

export const logOut = () => {
  return{
    type: "LOGOUT"
  }
}

export const setConnected = () => {
  return {
    type: "CONNECTED"
  }
}

export const setFromChat = () => {
  return {
    type: "SET_FROM_CHAT"
  }
}

export const unsetFromChat = () => {
  return {
    type: "UNSET_FROM_CHAT"
  }
}

export const setReload = () => {
  return {
    type: "SET_RELOAD"
  }
}