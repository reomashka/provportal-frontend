import { Routes, Route } from 'react-router-dom';
import { TransportListPage } from './pages/TransportListPage';
import { HomePage } from './pages/HomePage';
import { TransportLand } from './pages/TransportLand';
import { NotFoundPage } from './pages/NotFoundPage';
import { TransportInfoPage } from './pages/TransportInfoPage';
import { JobsListPage } from './pages/JobsListPage';

import { JobsCRUD } from './pages/AdmPanelPages/JobsCRUD';
import { JobInfoPage } from './pages/JobInfo';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomePage />} />

      <Route path='/transport' element={<TransportLand />} />
      <Route path='/transport/moto' element={<TransportListPage transportType='moto' />} />
      <Route
        path='/transport/passenger'
        element={<TransportListPage transportType='passenger' />}
      />
      <Route path='/transport/cargo' element={<TransportListPage transportType='cargo' />} />
      <Route path='/transport/public' element={<TransportListPage transportType='public' />} />
      <Route
        path='/transport/container'
        element={<TransportListPage transportType='container' />}
      />
      <Route
        path='/transport/exclusive'
        element={<TransportListPage transportType='exclusive' />}
      />
      <Route path='/transport/:id' element={<TransportInfoPage />} />

      <Route path='/jobs' element={<JobsListPage />} />
      <Route path='/jobs/:id' element={<JobInfoPage />} />

      {/* adm */}
      <Route path='/adm/jobs' element={<JobsCRUD />} />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
