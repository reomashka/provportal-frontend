import { JobsListPage } from '@/pages/jobs';
import { JobDetailsPage } from '@/pages/jobs/[id]';

export const JobRoutes = [
	{
		path: '/jobs',
		children: [
			{
				index: true,
				element: <JobsListPage />,
			},
			{
				path: ':id/:city',
				element: <JobDetailsPage />,
			},
		],
	},
];
