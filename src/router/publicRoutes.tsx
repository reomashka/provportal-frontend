import { ItemsListPage } from '@/pages/ItemsPage';
import { HomePage } from '../pages/HomePage';
import { TransportNavigationGridPage } from '../pages/TransportNavigationGridPage';
import { AboutUsPage } from '@/pages/AboutUsPage';

export const PublicRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/home', element: <HomePage /> },
	{ path: '/transport', element: <TransportNavigationGridPage /> },
	{ path: '/items', element: <ItemsListPage /> },
	{ path: '/about', element: <AboutUsPage /> },
];
