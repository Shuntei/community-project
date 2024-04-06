import "@/styles/globals.css";
import { CartProvider } from "@/hooks/use-cart";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    )
}
