import Transport from '@/interfaces/Transport.interface';
import styles from './TransportStages.module.scss';

interface Props {
	transportData: Transport | null;
}
export const TransportStages = ({ transportData }: Props) => {
	const price = transportData?.price ?? 0;
	return (
		<>
			{transportData?.stageCounter !== 0 && (
				<div className={styles.textCenter}>
					<h2 className={styles.title}>Стоимость пакетов тюнинга</h2>
					<div className={styles.card}>
						<div>
							<div>
								<ul className={styles.listUnstyled}>
									<table className={`${styles.table} ${styles.tableHover}`}>
										<thead>
											<td>
												<b>Название пакета</b>
											</td>

											<td>
												<b>Стоимость пакета</b>
											</td>
										</thead>

										<tbody>
											{[
												{ label: 'Пакет тюнинга 1 (Базовый)', percent: 10 },
												{ label: 'Пакет тюнинга 2 (скорость, баланс, управление)', percent: 25 },
												{ label: 'Пакет тюнинга 3 (скорость, баланс, управление)', percent: 45 },
												{ label: 'Пакет тюнинга 4 (скорость, баланс, управление)', percent: 70 },
											]
												.slice(0, transportData?.stageCounter ?? 0)
												.map((stage, index) => (
													<tr key={index}>
														<td>{stage.label}</td>
														<td>
															{((price * stage.percent) / 100).toLocaleString('ru-RU')} рублей
														</td>
													</tr>
												))}

											<tr>
												<td className="td11">
													<b className={styles.title}>Общая сумма пакетов тюнинга:</b>
												</td>
												<td>
													<b className={styles.title}>
														{[{ percent: 10 }, { percent: 25 }, { percent: 45 }, { percent: 70 }]
															.slice(0, transportData?.stageCounter ?? 0)
															.reduce((sum, stage) => sum + (price * stage.percent) / 100, 0)
															.toLocaleString('ru-RU')}{' '}
														рублей
													</b>
												</td>
											</tr>
										</tbody>
									</table>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
