import { AboutPage } from '@/pages/about';
import { CheckEmailPage } from '@/pages/auth/check-email';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';
import { HomePage } from '@/pages/home';
import { ItemsListPage } from '@/pages/items';
import { TransportNavigationGrid } from '@/pages/transport/navigation';

export const PublicRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/home', element: <HomePage /> },
	{ path: '/transport', element: <TransportNavigationGrid /> },
	{ path: '/items', element: <ItemsListPage /> },
	{ path: '/about', element: <AboutPage /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
	{ path: '/check-email', element: <CheckEmailPage /> },
];
