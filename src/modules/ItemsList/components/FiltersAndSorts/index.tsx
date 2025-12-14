import styles from './index.module.scss';
import {
	CountryOriginLabels,
	DriveTypeLabels,
	FuelTypeLabels,
	ShowroomLabels,
	TransportTypeLabels,
} from '@/constants/transportLabels';
import { FilterState } from '@/modules/TransportList/interfaces/FilterSort.interface';
// import { SORT_OPTIONS } from '@/modules/TransportList/constants/FilterSort';
import { transportStore } from '@/store/transportFilterSortStore';
import { observer } from 'mobx-react-lite';
import {
	CountryOrigin,
	DriveType,
	FuelType,
	Showroom,
	TransportType,
} from '@/interfaces/Transport.interface';
import { AccessoryCategoryLabels, AccessorySubtypeLabels } from '@/constants/ItemLabels';
import { AccessoryCategory, AccessorySubtype } from '@/interfaces/Item.interface';

export const FiltersAndSorts = observer(() => {
	const store = transportStore;

	const getFilterLabel = (value: string | number): string => {
		return (
			DriveTypeLabels[value as DriveType] ||
			FuelTypeLabels[value as FuelType] ||
			CountryOriginLabels[value as CountryOrigin] ||
			TransportTypeLabels[value as TransportType] ||
			ShowroomLabels[value as Showroom] ||
			String(value)
		);
	};

	const getCategoryLabel = (category: keyof FilterState): string => {
		const labels: Record<string, string> = {
			countryOrigin: 'Страна',
			epp: 'ЕПП',
			bodyType: 'Кузов',
			seats: 'Мест',
			driveType: 'Привод',
			slots: 'Слотов',
			showroom: 'Салон',
			fuelType: 'Топливо',
		};
		return labels[category] || category;
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<button className={styles.toggleButton} onClick={() => store.setIsOpen()}>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path
							d="M2.5 5.83333H7.5M7.5 5.83333C7.5 7.214 8.61929 8.33333 10 8.33333C11.3807 8.33333 12.5 7.214 12.5 5.83333M7.5 5.83333C7.5 4.45262 8.61929 3.33333 10 3.33333C11.3807 3.33333 12.5 4.45262 12.5 5.83333M12.5 5.83333H17.5M2.5 14.1667H7.5M7.5 14.1667C7.5 15.5474 8.61929 16.6667 10 16.6667C11.3807 16.6667 12.5 15.5474 12.5 14.1667M7.5 14.1667C7.5 12.786 8.61929 11.6667 10 11.6667C11.3807 11.6667 12.5 12.786 12.5 14.1667M12.5 14.1667H17.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
					Фильтры
					{store.activeFiltersCount > 0 && (
						<span className={styles.badge}>{store.activeFiltersCount}</span>
					)}
				</button>
				{/* 
				<div className={styles.sortContainer}>
					<label htmlFor="sort">Сортировка:</label>
					<select
						id="sort"
						value={store.sortBy}
						onChange={(e) => store.setSortBy(e.target.value)}
						className={styles.sortSelect}>
						{SORT_OPTIONS.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div> */}
			</div>

			{store.isOpen && (
				<div className={styles.filtersPanel}>
					<div className={styles.filtersGrid}>
						{/* Привод */}
						<div className={styles.filterGroup}>
							<h3>Подтип</h3>
							<div className={styles.checkboxGroup}>
								{Object.entries(AccessorySubtypeLabels).map(([key, label]) => (
									<label key={key} className={styles.checkbox}>
										<input
											type="checkbox"
											checked={store.filters.driveType.includes(key as AccessorySubtype)}
											onChange={() => store.toggleFilter('driveType', key as AccessorySubtype)}
										/>
										<span>{label}</span>
									</label>
								))}
							</div>
						</div>

						{/* Страна производитель */}
						<div className={styles.filterGroup}>
							<h3>Категория</h3>
							<div className={styles.checkboxGroup}>
								{Object.entries(AccessoryCategoryLabels).map(([key, label]) => (
									<label key={key} className={styles.checkbox}>
										<input
											type="checkbox"
											checked={store.filters.countryOrigin.includes(key as AccessoryCategory)}
											onChange={() => store.toggleFilter('countryOrigin', key as AccessoryCategory)}
										/>
										<span>{label}</span>
									</label>
								))}
							</div>
						</div>

						{/* Привод */}
						<div className={styles.filterGroup}>
							<h3>Ивент</h3>
							<div className={styles.checkboxGroup}>
								{Object.entries(DriveTypeLabels).map(([key, label]) => (
									<label key={key} className={styles.checkbox}>
										<input
											type="checkbox"
											checked={store.filters.driveType.includes(key as DriveType)}
											onChange={() => store.toggleFilter('driveType', key as DriveType)}
										/>
										<span>{label}</span>
									</label>
								))}
							</div>
						</div>
					</div>

					{store.activeFiltersCount > 0 && (
						<div className={styles.activeFilters}>
							<div className={styles.activeFiltersLabel}>Активные фильтры:</div>

							<div className={styles.filterTags}>
								{Object.entries(store.filters).map(([key, value]) => {
									if (Array.isArray(value)) {
										return value.map((v) => (
											<div key={`${key}-${v}`} className={styles.filterTag}>
												{key !== 'epp' && (
													<span className={styles.filterTagCategory}>
														{getCategoryLabel(key as keyof FilterState)}:
													</span>
												)}
												<span className={styles.filterTagValue}>{getFilterLabel(v)}</span>
												<button
													className={styles.filterTagRemove}
													onClick={() => store.removeFilter(key as keyof FilterState, v)}
													aria-label="Удалить фильтр">
													<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
														<path
															d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
															stroke="currentColor"
															strokeWidth="1.5"
															strokeLinecap="round"
														/>
													</svg>
												</button>
											</div>
										));
									}

									// Логика для булевых фильтров
									if (key === 'epp' && value) {
										return (
											<div key={key} className={styles.filterTag}>
												<span className={styles.filterTagValue}>Только ЕПП</span>
												<button
													className={styles.filterTagRemove}
													onClick={() => store.removeFilter('epp')}
													aria-label="Удалить фильтр">
													<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
														<path
															d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
															stroke="currentColor"
															strokeWidth="1.5"
															strokeLinecap="round"
														/>
													</svg>
												</button>
											</div>
										);
									}

									return null;
								})}
							</div>

							<button className={styles.clearAllButton} onClick={() => store.resetFilters()}>
								Очистить все
							</button>
						</div>
					)}

					<div className={styles.actions}>
						<button className={styles.resetButton} onClick={() => store.resetFilters()}>
							Сбросить фильтры
						</button>
						<button className={styles.applyButton} onClick={() => store.setIsOpen()}>
							Закрыть
						</button>
					</div>
				</div>
			)}
		</div>
	);
});
