import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Opcional: Puedes mostrar un indicador de carga aquí
  }

  return (
    <Route
      {...rest}
      element={user ? Element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
