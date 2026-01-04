import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getCurrentTransport } from '@/api/transport/transport.api';
import Transport from '@/interfaces/Transport.interface';

import { MiniInfo } from './components/MiniInfo';
import { TransportInsurance } from './components/TransportInsurance';
import { TransportPhotos } from './components/TransportPhotos';
import { TransportSpecific } from './components/TransportSpecifics';
import { TransportStages } from './components/TransportStages';
import { TransportTuning } from './components/TransportTuning';
import styles from './TransportDetails.module.scss';

export const TransportDetails = () => {
	const { id } = useParams();

	const { data, isLoading, error } = useQuery<Transport>({
		queryKey: ['transportInfo', id],
		queryFn: () => getCurrentTransport(Number(id)),
		enabled: !!id,
	});

	if (isLoading) {
		return <p>Загрузка...</p>;
	}
	if (error) {
		return <p>Ошибка загрузки данных</p>;
	}

	if (!data) {
		return <p>Ошибка загрузки данных</p>;
	}

	return (
		<div className="wrapper">
			<div className={styles.row}>
				<TransportPhotos transportData={data} />
				<MiniInfo transportData={data} />

				<div className={styles.row}>
					<TransportSpecific transportData={data} />
					<div className={styles.selectionOfInfo}>
						<TransportInsurance transportData={data} />
						<TransportStages transportData={data} />
						<TransportTuning transportData={data} />
					</div>
				</div>
			</div>
		</div>
	);
};
