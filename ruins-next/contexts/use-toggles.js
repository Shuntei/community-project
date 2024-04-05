import { createContext, useContext, useState } from "react";
import React from "react";

const TogglesContext = createContext();

export default function TogglesContextProvider({ children }) {
  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [toggles, setToggles] = useState({
    follows: false,
    notification: false,
    mainContent: true,
  });

  return (
    <TogglesContext.Provider
      value={{
        postModal,
        setPostModal,
        toggles,
        setToggles,
        commentModal,
        setCommentModal,
      }}
    >
      {children}
    </TogglesContext.Provider>
  );
}

export const useToggles = () => useContext(TogglesContext);
