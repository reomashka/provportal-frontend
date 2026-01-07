import React from 'react';

import { DriveTypeLabels, FuelPrice, FuelTypeLabels } from '@/constants/transportLabels';
import Transport from '@/interfaces/Transport.interface';

import styles from './TransportSpecifics.module.scss';

interface TransportSpecificProps {
	transportData: Transport | null;
}

export const TransportSpecific = ({ transportData }: TransportSpecificProps) => {
	const tableData = [
		{
			title: 'Динамика автомобиля',
			rows: [
				{
					label: 'Максимальная скорость',
					value: `${transportData?.fullSpeed ?? 'Нет информации'} км/час`,
				},
				{
					label: 'Разгон до 100',
					value: `${transportData?.speed100Time ?? 'Нет информации'} сек.`,
				},
				{
					label: 'Разгон до MAX',
					value: `${transportData?.speedMaxTime ?? 'Нет информации'} сек.`,
				},
				{
					label: 'Привод',
					value: transportData?.driveType
						? (DriveTypeLabels[transportData?.driveType] ?? '-')
						: 'Нет информации',
				},
			],
		},
		{
			title: 'Кузов и салон',
			rows: [
				{
					label: 'Доступно к погрузке',
					value:
						transportData?.class === 'CARGO'
							? `${transportData?.units} ед.`
							: 'Не грузовой транспорт',
				},
				{ label: 'Кол-во мест', value: `${transportData?.seats ?? 'INT'} места` },
				{ label: 'Вместимость багажника', value: `${transportData?.slots ?? 'INT'} сл.` },
			],
		},
		{
			title: 'Топливные характеристики',
			rows: [
				{ label: 'Емкость топливного бака', value: `${transportData?.volumeTank ?? 'INT'} л.` },
				{
					label: 'Стоимость 1 литра топлива',
					value: transportData?.fuelType ? `${FuelPrice[transportData.fuelType]} руб.` : 'INT руб.',
				},
				{
					label: 'Стоимость полного бака',
					value:
						transportData?.volumeTank && transportData?.fuelType
							? `${FuelPrice[transportData.fuelType] * transportData.volumeTank} руб.`
							: 'INT руб.',
				},

				{
					label: 'Тип топлива',
					value: transportData?.fuelType
						? (FuelTypeLabels[transportData.fuelType] ?? 'INT')
						: 'INT',
				},
			],
		},
		{
			title: 'Особенности',
			rows: [{ label: 'ЕПП', value: transportData?.epp ? 'Да' : 'Нет' }],
		},
	];

	return (
		<div className={styles.cardSpecifics}>
			<div className={styles['text-align--center']}>
				<h2 className={styles.title}>Характеристики</h2>
				<div className={styles.card}>
					<div className={styles.row}>
						<table className={`${styles.table} ${styles['table-hover']}`}>
							<thead>
								<tr>
									<th className={styles['text-align--left']}>Характеристика</th>
									<th className={styles['text-align--right']}>Значение</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((section, i) => (
									<React.Fragment key={i}>
										<tr>
											<td colSpan={2} className={styles.title}>
												{section.title}
											</td>
										</tr>
										{section.rows.map((row, j) => (
											<tr key={j}>
												<td className={styles['text-align--left']}>{row.label}</td>
												<td className={styles['text-align--right']}>{row.value}</td>
											</tr>
										))}
									</React.Fragment>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
