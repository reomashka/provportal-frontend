import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import './global.css';
import { AppRoutes } from './router';
import Snowfall from 'react-snowfall';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Snowfall style={{ position: 'fixed', width: '100vw', height: '100vh' }} snowflakeCount={200} />
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<ToastContainer />
				<AppRoutes />
			</HelmetProvider>
		</QueryClientProvider>
	</StrictMode>,
);
