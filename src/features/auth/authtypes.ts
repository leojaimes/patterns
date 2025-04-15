export interface User {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface AuthState {
  user: User | null;
}

export type AuthAction = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };
