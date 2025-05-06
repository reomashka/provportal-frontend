import { Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './publicRoutes';
import { PrivateRoutes } from './privateRoutes';
import { TransportRoutes } from './transportRoutes';
import { JobRoutes } from './jobRoutes';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoutes}
      {TransportRoutes}
      {JobRoutes}
      {PrivateRoutes}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
