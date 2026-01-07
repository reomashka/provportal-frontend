import Transport from '@/interfaces/Transport.interface';

import styles from './TransportTuning.module.scss';

interface Props {
	transportData: Transport | null;
}

export const TransportTuning = ({ transportData }: Props) => {
	const paint = transportData?.customization.paint;
	const accessories = transportData?.customization.accessories;

	return (
		<div className={styles.textCenter}>
			<h2 className={styles.title}>Внешний тюнинг</h2>

			<div className={styles.card}>
				<table className={`${styles.table} ${styles.tableHover}`}>
					<thead>
						<tr>
							<th className={styles.colName}>Название элемента</th>
							<th>Доступность</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td colSpan={2} className={styles.sectionTitle}>
								Стайлинг
							</td>
						</tr>

						<tr>
							<td className={styles.colName}>Первый цвет</td>
							<td>{paint?.primary ?? 'Недоступно'}</td>
						</tr>

						<tr>
							<td className={styles.colName}>Второй цвет</td>
							<td>{paint?.secondary ?? 'Недоступно'}</td>
						</tr>

						<tr>
							<td className={styles.colName}>Третий цвет</td>
							<td>{paint?.tertiary ?? 'Недоступно'}</td>
						</tr>

						<tr>
							<td className={styles.colName}>Покраска салона</td>
							<td>{paint?.interior ?? 'Недоступно'}</td>
						</tr>

						<tr>
							<td className={styles.colName}>Антихром</td>
							<td>{paint?.antichrome ? 'Доступно' : 'Недоступно'}</td>
						</tr>

						<tr>
							<td colSpan={2} className={styles.sectionTitle}>
								Колёса
							</td>
						</tr>

						<tr>
							<td className={styles.colName}>Доступные диски</td>
							<td>{transportData?.customization.rims ?? '—'}</td>
						</tr>

						<tr>
							<td colSpan={2} className={styles.sectionTitle}>
								Разное
							</td>
						</tr>

						<tr>
							<td className={styles.colName}>Аксессуары</td>
							<td>
								{accessories?.length
									? accessories.map((acc) => (
											<div key={acc.name}>
												{acc.name} — {acc.price.toLocaleString('ru-RU')} ₽
											</div>
										))
									: '—'}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
