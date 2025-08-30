import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './global.css';
import { AppRoutes } from './router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<HelmetProvider>
					<AppRoutes />
				</HelmetProvider>
			</Provider>
		</QueryClientProvider>
	</StrictMode>,
);
