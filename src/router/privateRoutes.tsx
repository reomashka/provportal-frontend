import { Route } from 'react-router-dom';
// import { JobsCRUD } from '../pages/AdminPanelPages/JobsCRUD';
import { DataGridTransportPage } from '../pages/AdminPanelPages/DataGridTransportPage';
import { AdminListPage } from 'src/pages/AdminPanelPages/AdminListPage';

export const PrivateRoutes = (
  <Route path='/adm'>
    <Route index element={<AdminListPage />} />
    <Route path='transport' element={<DataGridTransportPage />} />
    {/* <Route path='jobs' element={<JobsCRUD />} /> */}
  </Route>
);
