import BoardsContextProvider from "@/contexts/use-boards";
import TogglesContextProvider from "@/contexts/use-toggles";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BoardsContextProvider>
      <TogglesContextProvider>
        <Component {...pageProps} />
      </TogglesContextProvider>
    </BoardsContextProvider>
  );
}
