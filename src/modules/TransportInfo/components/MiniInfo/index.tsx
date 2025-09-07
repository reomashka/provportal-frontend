import styles from './MiniInfo.module.scss';

import Transport, { TransportType } from '@interfaces/Transport.interface';
interface MiniInfoProps {
	transportData: Transport | null;
}

export const CarTypeLabels: Record<TransportType, string> = {
	[TransportType.HATCHBACK]: 'Хэтчбек',
	[TransportType.SEDAN]: 'Седан',
	[TransportType.COUPE]: 'Купе',
	[TransportType.LIFTBACK]: 'Лифтбек',
	[TransportType.UNIVERSAL]: 'Универсал',
	[TransportType.CROSSOVER]: 'Кроссовер',
	[TransportType.VAN]: 'Фургон',
	[TransportType.VNEDOROZNIK]: 'Внедорожник',
	[TransportType.MINIBUS]: 'Микроавтобус',
	[TransportType.BUS]: 'Автобус',
	[TransportType.TYAGACH]: 'Тягач',
	[TransportType.TRUCK]: 'Грузовик',
	[TransportType.PICKUP]: 'Пикап',
	[TransportType.CABRIOLET]: 'Кабриолет',
	[TransportType.MOTOCYCLE]: 'Мотоцикл',
};

export const MiniInfo = ({ transportData }: MiniInfoProps) => {
	const tableData = [
		{
			label: 'Автосалон:',
			value: `${transportData?.showroom || '-'} (${transportData?.city || '-'})`,
		},
		{
			label: 'Стоимость в автосалоне:',
			value: new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
				transportData?.price ?? 0,
			),
		},
		{
			label: 'Актуальная гос цена:',
			value: new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
				(transportData?.price ?? 0) * 0.9,
			),
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
			value: transportData?.typeBody ? CarTypeLabels[transportData.typeBody] : '-',
		},
		{
			label: 'Доступно к погрузке:',
			value: 'INT ед. груза',
			showIf: transportData?.class === 'CARGO',
		},
		{
			label: 'Страна-производитель:',
			value: '-',
			showIf: false,
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
