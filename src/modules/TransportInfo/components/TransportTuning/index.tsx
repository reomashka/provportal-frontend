import Transport from '@interfaces/Transport.interface';
import styles from './TransportTuning.module.scss';

interface Props {
	transportData: Transport | null;
}

export const TransportTuning = ({ transportData }: Props) => {
	return (
		<div className={styles.textCenter}>
			<h2 className={styles.title}>Внешний тюнинг</h2>

			<div className={styles.card}>
				<div>
					<div>
						<ul className={styles.listUnstyled}>
							<table className={`${styles.table} ${styles.tableHover}`}>
								<thead>
									<td className="td1">
										<b>Название элемента</b>
									</td>

									<td>
										<b>Доступность</b>
									</td>
								</thead>

								<tbody>
									<tr>
										<td colSpan={2}>
											<b className={styles.title}>Стайлинг</b>
										</td>
									</tr>

									<tr>
										<td className="td1">
											<b>Первый цвет</b>
										</td>
										<td>{transportData?.paintFirst ? 'Есть' : 'Нет'}</td>
									</tr>

									<tr>
										<td className="td1">
											<b>Второй цвет</b>
										</td>

										<td>{transportData?.paintSecond ? 'Есть' : 'Нет'}</td>
									</tr>

									<tr>
										<td className="td1">
											<b>Третий цвет</b>
										</td>
										<td>{transportData?.paintThird ? 'Есть' : 'Нет'}</td>
									</tr>

									<tr>
										<td colSpan={2}>
											<b className={styles.title}> -</b>
										</td>
									</tr>

									<tr>
										<td className="td1">
											<b>Покраска салона</b>
										</td>

										<td>{transportData?.paintInter}</td>
									</tr>

									<tr>
										<td className="td1">
											<b>Антихром</b>
										</td>

										<td>{transportData?.antichrome ? 'Да' : 'Нет'}</td>
									</tr>

									<tr>
										<td colSpan={2}>
											<b className={styles.title}>Колеса</b>
										</td>
									</tr>

									<tr>
										<td className="td1">
											<b>Доступные диски</b>
										</td>

										<td>{transportData?.rims}</td>
									</tr>

									<tr>
										<td colSpan={2}>
											<b className={styles.title}>Разное</b>
										</td>
									</tr>

									<tr>
										<td className="td1">
											<b>Аксессуары</b>
										</td>

										<td>{transportData?.accessories}</td>
									</tr>
								</tbody>
							</table>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
