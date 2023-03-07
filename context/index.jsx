import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

const initialUser = {
  name: "Jorge",
  email: "jorge.alberto.rojas.solorzano@gmail.com",
};

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAppContext = () => useContext(DataContext);

export default ContextProvider;
