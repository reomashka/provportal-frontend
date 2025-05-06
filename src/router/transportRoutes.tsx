import { Route } from 'react-router-dom';
import { TransportListPage } from '../pages/TransportListPage';
import { TransportInfoPage } from '../pages/TransportInfoPage';

type TransportType = 'moto' | 'passenger' | 'cargo' | 'public' | 'container' | 'exclusive';

const transportTypes: TransportType[] = [
  'moto',
  'passenger',
  'cargo',
  'public',
  'container',
  'exclusive',
];

export const TransportRoutes = (
  <Route path='/transport'>
    {transportTypes.map((type) => (
      <Route key={type} path={type} element={<TransportListPage transportType={type} />} />
    ))}
    <Route path=':id' element={<TransportInfoPage />} />
  </Route>
);
