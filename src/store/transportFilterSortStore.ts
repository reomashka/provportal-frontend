import { makeAutoObservable } from 'mobx';
import { INITIAL_FILTERS } from '@/modules/TransportList/constants/FilterSort';
import { FilterState } from '@/modules/TransportList/interfaces/FilterSort.interface';

class TransportFilterSortStore {
	isOpen = false;
	sortBy = 'priceAsc';
	filters: FilterState = INITIAL_FILTERS;

	constructor() {
		makeAutoObservable(this);
	}

	setIsOpen() {
		this.isOpen = !this.isOpen;
	}

	setSortBy(value: string) {
		this.sortBy = value;
	}

	toggleEPP() {
		this.filters.epp = !this.filters.epp;
	}

	toggleFilter(category: keyof FilterState, value: string | number) {
		const current = this.filters[category];
		if (Array.isArray(current)) {
			const exists = current.includes(value as never);
			this.filters = {
				...this.filters,
				[category]: exists ? current.filter((item) => item !== value) : [...current, value],
			};
		}
	}

	removeFilter(category: keyof FilterState, value?: string | number) {
		if (category === 'epp') {
			this.filters.epp = false;
		} else {
			const current = this.filters[category];
			if (Array.isArray(current)) {
				this.filters = {
					...this.filters,
					[category]: current.filter((item) => item !== value),
				};
			}
		}
	}

	resetFilters() {
		this.filters = { ...INITIAL_FILTERS };
	}

	get activeFiltersCount() {
		const { filters } = this;
		return (
			filters.countryOrigin.length +
			filters.fuelType.length +
			(filters.epp ? 1 : 0) +
			filters.bodyType.length +
			filters.seats.length +
			filters.driveType.length +
			filters.slots.length +
			filters.showroom.length
		);
	}
}

export const transportStore = new TransportFilterSortStore();
