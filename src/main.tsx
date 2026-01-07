import './global.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

import { AppRoutes } from './router';
import { AppInitializer } from './router/AppInitializer';
// import Snowfall from 'react-snowfall';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* <Snowfall style={{ position: 'fixed', width: '100vw', height: '100vh' }} snowflakeCount={200} /> */}
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<ToastContainer />
				<AppInitializer>
					<AppRoutes />
				</AppInitializer>
			</HelmetProvider>
		</QueryClientProvider>
	</StrictMode>,
);
