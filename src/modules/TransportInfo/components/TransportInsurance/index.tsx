import Transport from '@interfaces/Transport.interface';
import styles from './TransportInsurance.module.scss';
import { calculateInsurance } from '../../utils/calculateInsurance';
import React from 'react';

interface Props {
	transportData: Transport | null;
}

const insuranceRows = [
	{
		key: 'noInsurance',
		label: 'Без страхования',
		bonus: 'Скидка не предоставляется',
		repairKey: 'repairWithoutInsurance',
		insuranceKey: null,
	},
	{
		key: 'liteInsurance',
		label: 'Лайт',
		bonus: 'Скидка 30% на любой ремонт \n1 бесплатный полный ремонт',
		repairKey: 'repairLiteInsurance',
		insuranceKey: 'liteInsurance',
	},
	{
		key: 'standInsurance',
		label: 'Стандарт',
		bonus: 'Скидка 45% на любой ремонт\n1 бесплатный полный ремонт\n7 бесплатных ремонтов до 15%',
		repairKey: 'repairStandInsurance',
		insuranceKey: 'standInsurance',
	},
	{
		key: 'excInsurance',
		label: 'Эксклюзив',
		bonus:
			'Скидка 65% на любой ремонт\n7 бесплатных полных ремонтов\n12 бесплатных ремонтов до 30%',
		repairKey: 'repairExcInsurance',
		insuranceKey: 'excInsurance',
	},
];

export const TransportInsurance = ({ transportData }: Props) => {
	const input = {
		liteInsurance: transportData?.liteInsurance ?? null,
		repairWithoutInsurance: transportData?.repairWithoutInsurance ?? 0,
		hasStand: transportData?.hasStandIns ?? undefined,
		hasExc: transportData?.hasExcIns ?? undefined,
	};
	const result = calculateInsurance(input);

	const renderRow = (row: (typeof insuranceRows)[0]) => {
		const cost = row.insuranceKey ? result[row.insuranceKey as keyof typeof result] : null;
		const amount = result[row.repairKey as keyof typeof result];

		if (amount == null) return null;

		return (
			<tr key={row.key}>
				<td className="td1" data-label="Вид страхования">
					{row.label}
				</td>
				<td className="td2" data-label="Стоимость пакета">
					{cost != null ? (cost as number).toLocaleString('ru-RU') + ' ₽' : ''}
				</td>
				<td className="td3" data-label="Стоимость ремонта (сток)">
					{(amount as number).toLocaleString('ru-RU')} ₽
				</td>
				<td className="td4" data-label="Бонусы">
					{row.bonus.split('\n').map((line, i) => (
						<React.Fragment key={i}>
							{line}
							<br />
						</React.Fragment>
					))}
				</td>
			</tr>
		);
	};

	return (
		<div className={styles.textCenter}>
			<h2 className={styles.title}>Страхование</h2>
			<div className={styles.card}>
				<table className={`${styles.table} ${styles.tableHover} ${styles.insuranceTable}`}>
					<thead>
						<tr>
							<th className="td1">
								<b>Вид страхования</b>
							</th>
							<th className="td2">
								<b>Стоимость пакета</b>
							</th>
							<th className="td3">
								<b>Стоимость ремонта (сток)</b>
							</th>
							<th className="td4">
								<b>Бонусы</b>
							</th>
						</tr>
					</thead>
					<tbody>{insuranceRows.map(renderRow)}</tbody>
				</table>
			</div>
		</div>
	);
};
