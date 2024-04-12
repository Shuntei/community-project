import BoardsContextProvider from '@/contexts/use-boards'
import TogglesContextProvider from '@/contexts/use-toggles'

import { AuthContextProvider } from '@/contexts/auth-context'
import { ProfileContextProvider } from '@/contexts/profile-context'

import '@/styles/globals.css'
import { CartProvider } from '@/hooks/use-cart'

import { createRoot } from 'react-dom/client'
// import { Canvas } from '@react-three/fiber'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ProfileContextProvider>
      <AuthContextProvider>
        <CartProvider>
          <BoardsContextProvider>
            <TogglesContextProvider>
              {getLayout(<Component {...pageProps} />)}/
            </TogglesContextProvider>
          </BoardsContextProvider>
        </CartProvider>
      </AuthContextProvider>
    </ProfileContextProvider>
  )
}

// createRoot(document.getElementById('root')).render(<App />)
