import React from "react";
import { createContext, useState } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [contextPosts,setContextPosts] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser,contextPosts,setContextPosts }}>
      {children}
    </AuthContext.Provider>
  );
};
