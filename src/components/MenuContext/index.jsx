import React, { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menuButton, setMenuButton] = useState(false);

  return (
    <MenuContext.Provider value={{ menuButton, setMenuButton }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };