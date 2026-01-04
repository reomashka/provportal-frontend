import { FilterState, SortOption } from '../interfaces/FilterSort.interface';

export const SORT_OPTIONS: SortOption[] = [
	{ value: 'priceDesc', label: 'По цене (Убывание)' },
	{ value: 'priceAsc', label: 'По цене (Возрастание)' },
];

export const INITIAL_FILTERS: FilterState = {
	countryOrigin: [],
	fuelType: [],
	epp: false,
	bodyType: [],
	seats: [],
	driveType: [],
	slots: [],
	showroom: [],
};
