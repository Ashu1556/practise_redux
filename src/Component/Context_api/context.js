import React, { createContext, useState } from "react";

export const Authorization = createContext();

const CustomProvider = ({ children }) => {
  const [state, setState] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Authorization.Provider
      value={{ state, setIsLoggedIn, isLoggedIn, setState }}
    >
      {children}
    </Authorization.Provider>
  );
};

export default CustomProvider;
