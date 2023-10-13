// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.authenticated) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ authenticated }));
  }, [authenticated]);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
