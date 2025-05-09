import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();
 

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(null);

  const value = {navigate, user, setUser, admin, setAdmin, showUserLogin, setShowUserLogin};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


const useAppContext = () => useContext(AppContext);


export { AppContextProvider, useAppContext };
