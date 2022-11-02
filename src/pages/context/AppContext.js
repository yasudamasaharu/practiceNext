import { createContext, useContext, useState } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [text, setText] = useState();

  return (
    <AppContext.Provider value={[text, setText]}>
      {children}
    </AppContext.Provider>
  )
}


const useAppContext = () => useContext(AppContext);

export {AppProvider, useAppContext}