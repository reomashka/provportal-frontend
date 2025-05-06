import { Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TransportLand } from '../pages/TransportLand';

export const PublicRoutes = (
  <>
    <Route path='/' element={<HomePage />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='/transport' element={<TransportLand />} />
  </>
);
