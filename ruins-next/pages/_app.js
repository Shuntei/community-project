import BoardsContextProvider from '@/contexts/use-boards'
import TogglesContextProvider from '@/contexts/use-toggles'

import { AuthContextProvider } from '@/contexts/auth-context'

import '@/styles/globals.css'
import { CartProvider } from '@/hooks/use-cart'

import { createRoot } from 'react-dom/client'
// import { Canvas } from '@react-three/fiber'

import { PointContextProvider } from '@/contexts/use-points'
import { AnimateContextProvider } from '@/contexts/use-animate'
import { ViewToggleContextProvider } from '@/contexts/use-toggle-show'
import { GiftContextProvider } from '@/contexts/use-gift'
import { EffectContextProvider } from '@/contexts/use-effect'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <AuthContextProvider>
      <CartProvider>
        <BoardsContextProvider>
          <TogglesContextProvider>
            <ViewToggleContextProvider>
              <PointContextProvider>
                <AnimateContextProvider>
                  <GiftContextProvider>
                    <EffectContextProvider>
                      {getLayout(<Component {...pageProps} />)}
                    </EffectContextProvider>
                  </GiftContextProvider>
                </AnimateContextProvider>
              </PointContextProvider>
            </ViewToggleContextProvider>
          </TogglesContextProvider>
        </BoardsContextProvider>
      </CartProvider>
    </AuthContextProvider>
  )
}

// createRoot(document.getElementById('root')).render(<App />)
