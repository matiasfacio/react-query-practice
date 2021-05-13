import React, { createContext, useState } from "react";

export const StyleContext = createContext();

function StyleContextProvider(props) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <StyleContext.Provider
      value={{ darkMode, setDarkMode }}
    >
      {props.children}
    </StyleContext.Provider>
  );
}

export default StyleContextProvider;
