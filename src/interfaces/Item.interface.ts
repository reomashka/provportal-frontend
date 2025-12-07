export interface Item {
	itemId: number;
	itemName: string;
	itemCategory: AccessoryCategory;
	itemSubtype: AccessorySubtype;
	itemPrice: number;
	itemCurrency: Currency;
	eventId: number;
	eventName: string;
	eventStart: string;
	eventEnd: string;
}

export enum AccessoryCategory {
	HEADWEAR = 'HEADWEAR',
	ACCESSORY = 'ACCESSORY',
	BAG = 'BAG',
	CAR_ACCESSORY = 'CAR_ACCESSORY',
}
export enum AccessorySubtype {
	// Headwear
	CAP = 'CAP',
	HAT = 'HAT',
	HELMET = 'HELMET',
	BUCKET_HAT = 'BUCKET_HAT',
	BEANIE = 'BEANIE',

	// Accessories
	GLASSES = 'GLASSES',
	MASK = 'MASK',
	UMBRELLA = 'UMBRELLA',
	BACK_ACCESSORY = 'BACK_ACCESSORY',
	TENT = 'TENT',
	SPEAKER = 'SPEAKER',
	HEADPHONES = 'HEADPHONES',
	GUITAR = 'GUITAR',

	// Bags
	BACKPACK = 'BACKPACK',
	WAIST_BAG = 'WAIST_BAG',
	GUITAR_CASE = 'GUITAR_CASE',
	CLUTCH = 'CLUTCH',
	BRIEFCASE = 'BRIEFCASE',
	TRAVEL_BAG = 'TRAVEL_BAG',
	BAG = 'BAG',

	// Car Accessories
	VINYL = 'VINYL',
	RIMS = 'RIMS',
	LICENSE_PLATE_FRAME = 'LICENSE_PLATE_FRAME',
}

export enum Currency {
	PUMPKINS = 'PUMPKINS',
	BP_LEVEL = 'BP_LEVEL',
	CASE = 'CASE',
	FLOWERS = 'FLOWERS',
	VIRTS = 'VIRTS',
	MANDARINS = 'MANDARINS',
}
