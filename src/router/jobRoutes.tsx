import { JobsListPage } from '../pages/JobsListPage';
import { JobInfoPage } from '../pages/JobInfoPage';

export const JobRoutes = [
	{
		path: '/jobs',
		children: [
			{
				index: true, // это будет /jobs
				element: <JobsListPage />,
			},
			{
				path: ':id', // это будет /jobs/:id
				element: <JobInfoPage />,
			},
		],
	},
];
