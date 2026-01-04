import { TransportClass } from '@/interfaces/Transport.interface';
import { TransportListPage } from '@/pages/transport';
import { TransportDetailsPage } from '@/pages/transport/[id]';

type TransportType = TransportClass;

const transportTypes: TransportType[] = Object.values(TransportClass);

export const TransportRoutes = [
	{
		path: '/transport',
		children: [
			...transportTypes.map((type) => ({
				path: type,
				element: <TransportListPage transportType={type} />,
			})),
			{
				path: ':id',
				element: <TransportDetailsPage />,
			},
		],
	},
];
