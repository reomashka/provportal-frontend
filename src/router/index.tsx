import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import { PublicRoutes } from './publicRoutes';
import { PrivateRoutes } from './privateRoutes';
import { TransportRoutes } from './transportRoutes';
import { JobRoutes } from './jobRoutes';
import { NotFoundPage } from '../pages/NotFoundPage';

const routes = [
	{
		element: (
			<>
				<ScrollRestoration />
				<Outlet />
			</>
		),
		children: [
			...PublicRoutes,
			...TransportRoutes,
			...JobRoutes,
			...PrivateRoutes,
			{ path: '*', element: <NotFoundPage /> },
		],
	},
];

const router = createBrowserRouter(routes);

export const AppRoutes = () => {
	return <RouterProvider router={router} />;
};
