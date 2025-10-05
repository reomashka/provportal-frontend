import { lazy, Suspense } from 'react';
import { AdminNavigationGridPage } from '@pages/AdminPanelPages/AdminNavigationGridPage';
import { AddUpdatePage } from '@pages/AdminPanelPages/NewsFormPage';

const DataGridTransportPage = lazy(() => import('@pages/AdminPanelPages/DataGridTransportPage'));

export const PrivateRoutes = [
	{
		path: 'adm',
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<AdminNavigationGridPage />
			</Suspense>
		),
	},
	{
		path: 'adm/transport',
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<DataGridTransportPage />
			</Suspense>
		),
	},
	{
		path: 'adm/update',
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<AddUpdatePage />
			</Suspense>
		),
	},
];
