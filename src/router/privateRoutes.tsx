import { Suspense } from 'react';

import { AnnouncementFormPage } from '@/pages/admin/announcement-form';
import { AdminNavigationGridPage } from '@/pages/admin/navigation';

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
		path: 'adm/update',
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<AnnouncementFormPage />
			</Suspense>
		),
	},
];
