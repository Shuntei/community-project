import { useAuth } from '@/contexts/auth-context'
import React from 'react'
import Feelings from '@/components/johnny/modal-post-options/emotion'
const JWT_KEY = 'kjdgdk3453JYUGUYG57438'

const data = {
  id: 26,
  account: 'Shinder',
}

export default function Test2() {
  const { login, logout, signup, auth, googleLogin, update, setUpdate } =
    useAuth()

  console.log(auth)

  return (
    <ul className="text-white">
      <li>{auth.id}</li>
      <li>{auth.username}</li>
      <li>{auth.token}</li>
      {/* <li>{login}</li>
      <li>{logout}</li>
      <li>{signup}</li>
      <li>{auth}</li>
      <li>{googleLogin}</li>
      <li>{update}</li>
      <li>{setUpdate}</li> */}
      <div className="flex justify-center mt-[200px] text-black">
        <Feelings />
      </div>
    </ul>
  )
}
