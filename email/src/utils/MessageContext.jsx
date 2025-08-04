// src/utils/useMessageOpener.js
import { createContext, useState } from "react";

// Naming context properly
export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <MessageContext.Provider value={{ open, setOpen }}>
      {children}
    </MessageContext.Provider>
  );
};
