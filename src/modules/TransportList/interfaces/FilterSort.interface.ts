export interface FilterState {
	countryOrigin: string[];
	fuelType: string[];
	epp: boolean;
	bodyType: string[];
	seats: number[];
	driveType: string[];
	slots: number[];
	showroom: string[];
}

export interface SortOption {
	value: string;
	label: string;
}
