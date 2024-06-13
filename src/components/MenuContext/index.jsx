import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menuButton, setMenuButton] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <MenuContext.Provider
      value={{ menuButton, setMenuButton, theme, setTheme }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
