export const addUser = (user) => {
  console.log(user);
    return {
     
      type: "ADD_USER",
      payload: user,
    };
  };
  export const addToken = (token) => {
    console.log(token);
      return {
       
        type: "ADD_TOKEN",
        payload:token,
      };
    };
    
  export const removeUser = () => {
    return {
      type: "REMOVE_USER",
    };
  };
  