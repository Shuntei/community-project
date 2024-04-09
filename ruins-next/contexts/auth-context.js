import React, { createContext, useContext, useEffect, useState } from 'react'
import { MB_SIGNUP, MB_LOGIN } from '@/components/config/api-path'

const AuthContext = createContext()

const defaultAuth = {
  id: 0,
  username: '',
  token: '',
}
const storageKey = 'ruins-auth'

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(defaultAuth)

  const signup = async (formData) => {
    try {
      const r = await fetch(MB_SIGNUP, {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await r.json()
      console.log(result)
      if (result.success) {
        localStorage.setItem(storageKey, JSON.stringify(result.data))
        setAuth(result.data)
      }
      return result
    } catch (ex) {
      console.log(ex)
    }
  }

  const login = async (account, password) => {
    const r = await fetch(MB_LOGIN, {
      method: 'post',
      body: JSON.stringify({ account, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await r.json()
    if (result.success) {
      localStorage.setItem(storageKey, JSON.stringify(result.data))
      setAuth(result.data)
      // because the function is promise, it has to return a promise
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem(storageKey)
    setAuth(defaultAuth)
  }

  useEffect(() => {
    const str = localStorage.getItem(storageKey)
    try {
      const data = JSON.parse(str)
      if (data) {
        setAuth(data)
      }
    } catch (ex) {}
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, signup, auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
