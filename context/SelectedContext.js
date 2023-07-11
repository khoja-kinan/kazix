import { createContext, useState } from "react";

export const SelectedContext = createContext();

const SelectedContextProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  return (
    <SelectedContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};
export default SelectedContextProvider;
