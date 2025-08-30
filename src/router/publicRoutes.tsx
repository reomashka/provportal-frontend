import { HomePage } from '../pages/HomePage';
import { TransportNavigationGridPage } from '../pages/TransportNavigationGridPage';

export const PublicRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/home', element: <HomePage /> },
	{ path: '/transport', element: <TransportNavigationGridPage /> },
];
