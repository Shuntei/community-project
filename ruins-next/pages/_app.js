import BoardsContextProvider from "@/contexts/use-boards";
import TogglesContextProvider from "@/contexts/use-toggles";
import "@/styles/globals.css";
import { CartProvider } from "@/hooks/use-cart";

import { createRoot } from 'react-dom/client'
// import { Canvas } from '@react-three/fiber'

export default function App({ Component, pageProps }) {
   const getLayout = Component.getLayout ?? ((page) => page);
  return (
      <CartProvider>
        <BoardsContextProvider>
          <TogglesContextProvider>
            {getLayout(<Component {...pageProps} />)}/
          </TogglesContextProvider>
        </BoardsContextProvider>
      </CartProvider>
  );
 
}

// createRoot(document.getElementById('root')).render(<App />)