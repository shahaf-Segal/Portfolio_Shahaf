import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [IsDark, setIsDark] = useState(true);
  const toggleDark = () => {
    setIsDark(!IsDark);
  };

  return (
    <ThemeContext.Provider value={{ IsDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
