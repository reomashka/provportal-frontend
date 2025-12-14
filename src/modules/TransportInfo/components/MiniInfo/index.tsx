import styles from './MiniInfo.module.scss';

import Transport from '@/interfaces/Transport.interface';
import {
	CityLabels,
	CountryOriginLabels,
	DriveTypeLabels,
	ShowroomLabels,
	TransportTypeLabels,
} from '@/constants/transportLabels';

interface MiniInfoProps {
	transportData: Transport | null;
}

export const MiniInfo = ({ transportData }: MiniInfoProps) => {
	const tableData = [
		{
			label: 'Автосалон:',
			value: `${transportData?.showroom ? ShowroomLabels[transportData.showroom] : '-'} (${transportData?.city ? CityLabels[transportData.city] : '-'})`,
		},
		{
			label: 'Стоимость в автосалоне:',
			value:
				new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(transportData?.price ?? 0) +
				' ₽',
		},
		{
			label: 'Актуальная гос цена:',
			value:
				new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
					(transportData?.price ?? 0) * 0.9,
				) + ' ₽',
		},
		{
			label: 'Старая гос цена:',
			value:
				transportData?.gosCostOld
					?.map((n) => new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(n))
					.join(', ') ?? '-',
			showIf: (transportData?.gosCostOld?.length ?? 0) >= 1,
		},
		{
			label: 'Тип кузова:',
			value: transportData?.typeBody ? TransportTypeLabels[transportData.typeBody] : '-',
		},
		{
			label: 'Доступно к погрузке:',
			value: 'INT ед. груза',
			showIf: transportData?.class === 'CARGO',
		},
		{
			label: 'Страна-производитель:',
			value: transportData?.country ? CountryOriginLabels[transportData.country] : '-',
		},
		{
			label: 'Привод:',
			value: transportData?.driveType ? DriveTypeLabels[transportData.driveType] : '-',
		},
	];

	return (
		<div className={styles.cardMiniInfo}>
			<div className={styles.row}>
				<div className={styles.col}>
					<h2 className={`${styles.textCenter} ${styles.title}`}>
						{transportData?.nameAuto || 'Название автомобиля'}
					</h2>
					<h5 className={styles.textCenter}>Описание автомобиля</h5>

					<table className={styles.table}>
						<tbody>
							{tableData
								.filter((item) => item.showIf !== false)
								.map((row, index) => (
									<tr key={index}>
										<td className={styles.textLeft}>
											<b>{row.label}</b>
										</td>
										<td className={styles.textLeft}>{row.value}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
