import { TransportListPage } from '../pages/TransportListPage';
import { TransportInfoPage } from '../pages/TransportInfoPage';

type TransportType = 'moto' | 'passenger' | 'cargo' | 'public' | 'container' | 'exclusive';

const transportTypes: TransportType[] = [
	'moto',
	'passenger',
	'cargo',
	'public',
	'container',
	'exclusive',
];

export const TransportRoutes = [
	{
		path: '/transport',
		children: [
			...transportTypes.map((type) => ({
				path: type, // /transport/moto, /transport/passenger и т.д.
				element: <TransportListPage transportType={type} />,
			})),
			{
				path: ':id', // /transport/:id
				element: <TransportInfoPage />,
			},
		],
	},
];
