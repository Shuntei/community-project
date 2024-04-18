import { createContext, useContext, useEffect, useState } from 'react'
import { MB_PROFILE_INFO } from '@/components/config/api-path'
import { useAuth } from './auth-context'
import Router, { useRouter } from 'next/router'

const ProfileContext = createContext()

const defaultProfile = {
  profileId: 0,
  userId: 0,
  profileUrl: '',
  coverUrl: '',
  aboutMe: '',
  showContactInfo: false,
  ytLink: '',
  fbLink: '',
  igLink: '',
  gmailLink: '',
}

export function ProfileContextProvider({ children }) {
  const router = useRouter()
  const [profile, setProfile] = useState(defaultProfile)
  const {auth} = useAuth()

  useEffect(() => {
    if(!auth.id) {
      setProfile(defaultProfile)
    } else{
      const fetchProfileData = async (id) => {
        try {
          const r = await fetch(`${MB_PROFILE_INFO}/${id}`)
          const result = await r.json()
    
          if(result.success){
            setProfile(result.data)
          } else {
            console.log("Error fetching data:", data.error);
          }
        } catch (ex) {
          console.log(ex);
        }
      }
  
      const str = localStorage.getItem('ruins-auth')
      try {
        const data = JSON.parse(str)
        const { id } = data
        fetchProfileData(id)
      } catch (ex) {}
    }
  
  }, [auth, router])

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext)

export default ProfileContext
