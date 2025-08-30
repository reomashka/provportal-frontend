import React from 'react';
import styles from './TransportSpecifics.module.scss';
import Transport from '@interfaces/Transport.interface';

interface TransportSpecificProps {
	transportData: Transport | null;
}

const typeTank = {
	'АИ-92': 52,
	'АИ-95': 56,
	'АИ-98': 60,
};

export const TransportSpecific = ({ transportData }: TransportSpecificProps) => {
	const tableData = [
		{
			title: 'Динамика автомобиля',
			rows: [
				{ label: 'Максимальная скорость', value: `${transportData?.fullSpeed ?? 'INT'} км/час` },
				{ label: 'Разгон до 100', value: `${transportData?.speed100Time ?? 'INT'} сек.` },
				{ label: 'Разгон до MAX', value: `${transportData?.speedMaxTime ?? 'INT'} сек.` },
				{ label: 'Привод', value: 'Временно отсутствует' },
			],
		},
		{
			title: 'Кузов и салон',
			rows: [
				{
					label: 'Доступно к погрузке',
					value:
						transportData?.class === 'cargo'
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
					value: `${typeTank[transportData?.typeTank as keyof typeof typeTank] ?? 'INT'} руб.`,
				},
				{
					label: 'Стоимость полного бака',
					value:
						transportData?.volumeTank && transportData?.typeTank
							? `${
									typeTank[transportData.typeTank as keyof typeof typeTank] *
									transportData.volumeTank
								} руб.`
							: 'INT руб.',
				},
				{ label: 'Тип топлива', value: transportData?.typeTank ?? 'INT' },
			],
		},
		{
			title: 'Особенности',
			rows: [{ label: 'ЕПП', value: transportData?.EPP ? 'Да' : 'Нет' }],
		},
	];

	return (
		<div className={styles.cardSpecifics}>
			<div className={styles.textCenter}>
				<h2 className={styles.title}>Характеристики</h2>
				<div className={styles.card}>
					<div className={styles.row}>
						<table className={`${styles.table} ${styles.tableHover}`}>
							<thead>
								<tr>
									<td className={styles.textLeft}>
										<b>Характеристика</b>
									</td>
									<td className={styles.textRight}>
										<b>Значение</b>
									</td>
								</tr>
							</thead>
							<tbody>
								{tableData.map((section, index) => (
									<React.Fragment key={`section-${index}`}>
										<tr>
											<td colSpan={2}>
												<b className={styles.title}>{section.title}</b>
											</td>
										</tr>
										{section.rows.map((row, rowIndex) => (
											<tr key={`row-${rowIndex}`}>
												<td className={styles.textLeft}>
													<b>{row.label}</b>
												</td>
												<td className={styles.textRight}>{row.value}</td>
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
