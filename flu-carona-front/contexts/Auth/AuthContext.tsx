import { createContext, useContext } from "react";

export type AuthContextState = {
  token: string 
}

type AuthContextData = {
  userAuth: AuthContextState;
  setUserAuth: React.Dispatch<React.SetStateAction<AuthContextState>>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  return context;
}

export { AuthContext };