import { Route } from 'react-router-dom';
import { JobsListPage } from '../pages/JobsListPage';
import { JobInfoPage } from '../pages/JobInfoPage';

export const JobRoutes = (
  <Route path='/jobs'>
    <Route index element={<JobsListPage />} />
    <Route path=':id' element={<JobInfoPage />} />
  </Route>
);
