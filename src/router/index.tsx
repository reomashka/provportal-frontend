import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';

import { NotFoundPage } from '../pages/not-found';
import { JobRoutes } from './jobRoutes';
import { PrivateRoutes } from './privateRoutes';
import { PublicRoutes } from './publicRoutes';
import { TransportRoutes } from './transportRoutes';

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
