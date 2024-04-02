import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider() {
    const defaultAuth = {
        id:0,
        name:'',
        token:''
    }

    const login = ()=>{
        
    }

    const logout = ()=> {

    }
  return (
    <AuthContext.Provider value={{ login, logout, auth }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = ()=>{
    useContext(AuthContext)
}

export default AuthContext()
