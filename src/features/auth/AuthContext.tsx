import { createContext, ReactNode, useMemo, useReducer } from 'react';
import { AuthState, User } from './authtypes';
import { authInitialState, authReducer } from './authReducer';

interface AuthContextProps {
  state: AuthState;
}
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const login = (user: User) => dispatch({ type: 'LOGIN', payload: user });
  const logout = () => dispatch({ type: 'LOGOUT' });
  const value = useMemo(() => ({ state, login, logout }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
