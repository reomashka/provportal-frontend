import { JobsListPage } from '../pages/JobsListPage';
import { JobInfoPage } from '../pages/JobInfoPage';

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
				element: <JobInfoPage />,
			},
		],
	},
];
