import { AuthState, AuthAction } from './authtypes';

export const authInitialState: AuthState = {
  user: null,
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}
