import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../features/auth/useAuth';

function RequiredAuth({ children }: { children: ReactNode }) {
  const { state } = useAuth();
  const location = useLocation();
  if (!state.user) {
    <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequiredAuth;
