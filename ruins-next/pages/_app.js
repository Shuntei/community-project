import BoardsContextProvider from "@/contexts/use-boards";
import TogglesContextProvider from "@/contexts/use-toggles";
import "@/styles/globals.css";
import { CartProvider } from "@/hooks/use-cart";

export default function App({ Component, pageProps }) {
  // return (
  //   <BoardsContextProvider>
  //     <TogglesContextProvider>
  //       <Component {...pageProps} />
  //     </TogglesContextProvider>
  //   </BoardsContextProvider>
  // );
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    )
}
