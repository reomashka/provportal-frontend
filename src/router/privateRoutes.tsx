import { lazy, Suspense } from 'react';
import { AdminNavigationGridPage } from '@pages/AdminPanelPages/AdminNavigationGridPage';

const DataGridTransportPage = lazy(() => import('@pages/AdminPanelPages/DataGridTransportPage'));

export const PrivateRoutes = [
	{
		path: '/adm',
		element: <AdminNavigationGridPage />,
		children: [
			{
				index: true,
				element: <AdminNavigationGridPage />,
			},
			{
				path: 'transport',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<DataGridTransportPage />
					</Suspense>
				),
			},
		],
	},
];
