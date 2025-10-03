import styles from './TransportInfo.module.scss';

import { useParams } from 'react-router-dom';

import { PhotosOfTransport } from './components/PhotosOfTransport';
import { MiniInfo } from './components/MiniInfo';
import { TransportSpecific } from './components/TransportSpecifics';
import { TransportInsurance } from './components/TransportInsurance';
import { TransportStages } from './components/TransportStages';
import { TransportTuning } from './components/TransportTuning';

import { useQuery } from '@tanstack/react-query';
import { getTransportById } from '@/api/transport/getTransportById';

export const TransportInfo = () => {
	const { id } = useParams();

	const { data, isLoading, error } = useQuery({
		queryKey: ['transportInfo', id],
		queryFn: () => getTransportById(Number(id)),
	});

	if (isLoading) {
		return <p>Загрузка...</p>;
	}
	if (error) {
		return <p>Ошибка загрузки данных</p>;
	}

	return (
		<div className="wrapper">
			<div className={styles.row}>
				<PhotosOfTransport transportData={data} />
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
