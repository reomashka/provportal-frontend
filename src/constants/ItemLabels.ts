import { AccessoryCategory, AccessorySubtype, Currency } from '@/interfaces/Item.interface';

// Категории
export const AccessoryCategoryLabels: Record<AccessoryCategory, string> = {
	[AccessoryCategory.HEADWEAR]: 'Головные уборы',
	[AccessoryCategory.ACCESSORY]: 'Аксессуары',
	[AccessoryCategory.BAG]: 'Сумки',
	[AccessoryCategory.CAR_ACCESSORY]: 'Аксессуары для авто',
};

// Подтипы
export const AccessorySubtypeLabels: Record<AccessorySubtype, string> = {
	// Headwear
	[AccessorySubtype.CAP]: 'Кепка',
	[AccessorySubtype.HAT]: 'Шляпа',
	[AccessorySubtype.HELMET]: 'Шлем',
	[AccessorySubtype.BUCKET_HAT]: 'Панама',
	[AccessorySubtype.BEANIE]: 'Шапка',

	// Accessories
	[AccessorySubtype.GLASSES]: 'Очки',
	[AccessorySubtype.MASK]: 'Маска',
	[AccessorySubtype.UMBRELLA]: 'Зонт',
	[AccessorySubtype.BACK_ACCESSORY]: 'Наспинный аксессуар',
	[AccessorySubtype.TENT]: 'Палатка',
	[AccessorySubtype.SPEAKER]: 'Колонка',
	[AccessorySubtype.HEADPHONES]: 'Наушники',
	[AccessorySubtype.GUITAR]: 'Гитара',

	// Bags
	[AccessorySubtype.BACKPACK]: 'Рюкзак',
	[AccessorySubtype.WAIST_BAG]: 'Барсетка',
	[AccessorySubtype.GUITAR_CASE]: 'Футляр для гитары',
	[AccessorySubtype.CLUTCH]: 'Клатч',
	[AccessorySubtype.BRIEFCASE]: 'Портфель',
	[AccessorySubtype.TRAVEL_BAG]: 'Дорожная сумка',
	[AccessorySubtype.BAG]: 'Сумка',

	// Car Accessories
	[AccessorySubtype.VINYL]: 'Винил',
	[AccessorySubtype.RIMS]: 'Диски',
	[AccessorySubtype.LICENSE_PLATE_FRAME]: 'Номерная рамка',
};

// Валюта
export const CurrencyLabels: Record<Currency, string> = {
	[Currency.PUMPKINS]: 'Тыквы',
	[Currency.BP_LEVEL]: 'Уровень БП',
	[Currency.CASE]: 'Кейс',
	[Currency.FLOWERS]: 'Цветики',
	[Currency.VIRTS]: 'Вирты',
	[Currency.MANDARINS]: 'Мандарины',
};
