import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate, userLogOut, userRegister } from "@services/AuthService";

export interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  token?: string;
  user?: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (user: User, password: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {

  const localUser: string | null = localStorage.getItem('user');
  const localToken: string | null = localStorage.getItem('auth');

  const [user, setUser] = useState<User | undefined>(localUser ? JSON.parse(localUser) : undefined);
  const [token, setToken] = useState<string | undefined>(localToken || undefined);

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    authenticate(email, password)
      .then((response: {token: string, user: User}) => {
        setUser(response.user);
        setToken(response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('auth', response.token);

        navigate('/Home');
        return;
      })
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  const logout = () => {
    userLogOut()
      .then(() => {
        setUser(undefined);
        setToken(undefined);
        // localStorage.removeItem('auth');
        // localStorage.removeItem('user');
        localStorage.clear();
    
        navigate('/Login');
        return;
      })
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  const register = (user: User, password: string) => {
    userRegister(user, password)
      .then(() => {
        alert('Successful!');
        navigate('/Login');
        return;
      })
      .catch((error: Error) => console.error(`[ERROR] : ${error.message}`));
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );

};
