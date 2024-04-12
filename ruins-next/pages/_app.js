import BoardsContextProvider from '@/contexts/use-boards'
import TogglesContextProvider from '@/contexts/use-toggles'

import { AuthContextProvider } from '@/contexts/auth-context'

import '@/styles/globals.css'
import { CartProvider } from '@/hooks/use-cart'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <AuthContextProvider>
      <CartProvider>
        <BoardsContextProvider>
          <TogglesContextProvider>
            {getLayout(<Component {...pageProps} />)}/
          </TogglesContextProvider>
        </BoardsContextProvider>
      </CartProvider>
    </AuthContextProvider>
  )
}
