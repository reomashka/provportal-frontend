import styles from './TransportInfo.module.scss';

import { useParams } from 'react-router-dom';

import { PhotosOfTransport } from '../PhotosOfTransport';
import { MiniInfo } from '../MiniInfo';
import { TransportSpecific } from '../TransportSpecifics';
import { TransportInsurance } from '../TransportInsurance';
import { TransportStages } from '../TransportStages';
import { TransportTuning } from '../TransportTuning';
import { useQuery } from '@tanstack/react-query';
import { fetchTransportInfoData } from '@modules/TransportInfo/api/fetchTransportInfoData';

export const TransportInfo = () => {
	const { id } = useParams();

	const { data, isLoading, error } = useQuery({
		queryKey: ['transportInfo', id],
		queryFn: () => fetchTransportInfoData(Number(id)),
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
