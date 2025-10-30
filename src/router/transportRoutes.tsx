import { TransportListPage } from '../pages/TransportListPage';
import { TransportInfoPage } from '../pages/TransportInfoPage';
import { TransportClass } from '@interfaces/Transport.interface';

type TransportType = TransportClass;

const transportTypes: TransportType[] = Object.values(TransportClass);

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
