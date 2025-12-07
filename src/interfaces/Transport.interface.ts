export default interface Transport {
	id: number;
	nameAuto: string;
	price?: number | null;
	fullSpeed?: number | null;
	speed100Time?: number | null;
	speedMaxTime?: number | null;
	volumeTank?: number | null;
	fuelType?: FuelType | null;
	slots?: number | null;
	seats?: number | null;
	liteInsurance?: number | null;
	repairWithoutInsurance?: number | null;
	hasStandIns?: boolean | null;
	hasExcIns?: boolean | null;
	uniqueName: string;
	typeBody: TransportType;
	showroom?: Showroom | null;
	driveType?: DriveType | null;
	epp?: boolean | null;
	city?: City | null;
	country?: CountryOrigin | null;
	stageCounter?: number | null;
	paintInter?: string | null;
	paintFirst?: string | null;
	paintSecond?: string | null;
	paintThird?: string | null;
	antichrome?: boolean | null;
	accessories?: string | null;
	rims?: string | null;
	gosCostOld?: number[];
	class?: TransportClass | null;
	units?: number | null;
}

// TransportClass
export enum TransportClass {
	PASSENGER = 'PASSENGER', // Легковые
	CARGO = 'CARGO', // Грузовые
	MOTO = 'MOTO', // Мото
	PUBLIC = 'PUBLIC', // Общественные
	CONTAINER = 'CONTAINER', // Контейнерные
	EXCLUSIVE = 'EXCLUSIVE', // Эксклюзив
	FRACTION = 'FRACTION', // Фракционные
}

// Showroom
export enum Showroom {
	AVTOMAKS = 'AVTOMAKS',
	MERCURY_AUTO = 'MERCURY_AUTO',
	ROFL = 'ROFL',
	WORLD_OF_AUTO = 'WORLD_OF_AUTO',
	OGONEK = 'OGONEK',
}

// FuelType
export enum FuelType {
	AI92 = 'AI92',
	AI95 = 'AI95',
	AI98 = 'AI98',
	AI100 = 'AI100',
	DT = 'DT',
	ELECTRIC = 'ELECTRIC',
}

// CountryOrigin
export enum CountryOrigin {
	USSR_RUSSIA = 'USSR_RUSSIA',
	USA = 'USA',
	GERMANY = 'GERMANY',
	FRANCE = 'FRANCE',
	ITALY = 'ITALY',
	SWEDEN = 'SWEDEN',
	UK = 'UK',
	JAPAN = 'JAPAN',
	CZECH_REPUBLIC = 'CZECH_REPUBLIC',
	UKRAINE = 'UKRAINE',
	BELARUS = 'BELARUS',
	AUSTRIA = 'AUSTRIA',
	SOUTH_KOREA = 'SOUTH_KOREA',
	USSR_HUNGARY = 'USSR_HUNGARY',
	USSR_UKRAINE = 'USSR_UKRAINE',
	CHINA = 'CHINA',
}

// City
export enum City {
	PRIVOLZHSK = 'PRIVOLZHSK',
	NEVSKY = 'NEVSKY',
	MIRNY = 'MIRNY',
}

// CarType
export enum TransportType {
	HATCHBACK = 'HATCHBACK',
	SEDAN = 'SEDAN',
	COUPE = 'COUPE',
	LIFTBACK = 'LIFTBACK',
	UNIVERSAL = 'UNIVERSAL',
	CROSSOVER = 'CROSSOVER',
	VAN = 'VAN',
	VNEDOROZNIK = 'VNEDOROZNIK',
	MINIBUS = 'MINIBUS',
	BUS = 'BUS',
	TYAGACH = 'TYAGACH',
	TRUCK = 'TRUCK',
	PICKUP = 'PICKUP',
	CABRIOLET = 'CABRIOLET',
	MOTOCYCLE = 'MOTOCYCLE',
}

// DriveType
export enum DriveType {
	FRONT = 'FRONT',
	REAR = 'REAR',
	ALL = 'ALL',
}

export const PHOTO_CATEGORIES = [
	'front',
	'back',
	'1rowAuto',
	'2rowAuto',
	'backRight',
	'frontLeft',
	'side',
	'trunk',
	'underhood',
] as const;

export type PhotoCategory = (typeof PHOTO_CATEGORIES)[number];
