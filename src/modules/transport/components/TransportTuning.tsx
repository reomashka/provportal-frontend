import { Check, X } from 'lucide-react';
import styles from './TransportTuning.module.scss';

interface Transport {
	customization: {
		paint?: {
			primary?: boolean;
			secondary?: boolean;
			tertiary?: boolean;
			interior?: boolean;
			antichrome?: boolean;
		};
		rims?: string;
		accessories?: Array<{ name: string; price: number }>;
	};
}

interface Props {
	transportData: Transport | null;
}

function AvailabilityIcon({ available }: { available: boolean | undefined }) {
	if (available) {
		return <Check className={styles.iconAvailable} />;
	}
	return <X className={styles.iconUnavailable} />;
}

export function TransportTuning({ transportData }: Props) {
	const paint = transportData?.customization.paint;
	const accessories = transportData?.customization.accessories;

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Внешний тюнинг</h2>

			<div className={styles.card}>
				<table className={styles.table}>
					<thead className={styles.tableHead}>
						<tr>
							<th className={styles.tableHeadCell}>Название элемента</th>
							<th className={`${styles.tableHeadCell} ${styles.statusCol}`}>Доступность</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td colSpan={2} className={styles.sectionTitle}>
								Стайлинг
							</td>
						</tr>

						<tr className={styles.row}>
							<td className={styles.cellName}>Первый цвет</td>
							<td className={styles.cellValue}>
								<AvailabilityIcon available={paint?.primary} />
							</td>
						</tr>

						<tr className={styles.row}>
							<td className={styles.cellName}>Второй цвет</td>
							<td className={styles.cellValue}>
								<AvailabilityIcon available={paint?.secondary} />
							</td>
						</tr>

						<tr className={styles.row}>
							<td className={styles.cellName}>Третий цвет</td>
							<td className={styles.cellValue}>
								<AvailabilityIcon available={paint?.tertiary} />
							</td>
						</tr>

						<tr className={styles.row}>
							<td className={styles.cellName}>Покраска салона</td>
							<td className={styles.cellValue}>
								<AvailabilityIcon available={paint?.interior} />
							</td>
						</tr>

						<tr className={styles.row}>
							<td className={styles.cellName}>Антихром</td>
							<td className={styles.cellValue}>
								<AvailabilityIcon available={paint?.antichrome} />
							</td>
						</tr>

						<tr>
							<td colSpan={2} className={styles.sectionTitle}>
								Доступные диски
							</td>
						</tr>

						<tr className={styles.row}>
							<td className={styles.cellValue} colSpan={2}>
								{transportData?.customization.rims ?? <span className={styles.emptyValue}>—</span>}
							</td>
						</tr>

						<tr>
							<td colSpan={2} className={styles.sectionTitle}>
								Аксессуары
							</td>
						</tr>

						{accessories?.length ? (
							accessories.map((acc) => (
								<tr key={acc.name} className={styles.accessoryRow}>
									<td className={styles.accessoryName}>{acc.name}</td>
									<td className={styles.accessoryPrice}>{acc.price.toLocaleString('ru-RU')} ₽</td>
								</tr>
							))
						) : (
							<tr className={styles.row}>
								<td className={styles.cellName} colSpan={2}>
									<span className={styles.emptyValue}>Нет доступных аксессуаров</span>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
