import { createContext, useContext, useState } from 'react'

const ProfileContext = createContext()

const defaultProfile = {
  profile_id: 0,
  user_id: 0,
  profileUrl: '',
  coverUrl: '',
  aboutMe: '',
  showContactInfo: false,
  ytLink: '',
  fbLink: '',
  igLink: '',
  gmailLink: '',
}

export function ProfileContextProvider({children}){
    const [profile, setProfile] = useState(defaultProfile)

    return (<ProfileContext.Provider value={{profile, setProfile}} >
        {children}
    </ProfileContext.Provider>)
}

export const useProfile = () => useContext(ProfileContext)

export default ProfileContext