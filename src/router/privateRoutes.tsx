import { Route } from 'react-router-dom';
// import { JobsCRUD } from '../pages/AdminPanelPages/JobsCRUD';
import { DataGridTransportPage } from '../pages/AdminPanelPages/DataGridTransportPage';
import { AdminNavigationGridPage } from '@pages/AdminPanelPages/AdminNavigationGridPage';

export const PrivateRoutes = (
  <Route path='/adm'>
    <Route index element={<AdminNavigationGridPage />} />
    <Route path='transport' element={<DataGridTransportPage />} />
    {/* <Route path='jobs' element={<JobsCRUD />} /> */}
  </Route>
);
