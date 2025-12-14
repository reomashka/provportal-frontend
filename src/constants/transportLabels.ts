import {
	DriveType,
	FuelType,
	TransportType,
	Showroom,
	CountryOrigin,
	City,
} from '@/interfaces/Transport.interface';

export const DriveTypeLabels: Record<DriveType, string> = {
	[DriveType.ALL]: 'Полный',
	[DriveType.FRONT]: 'Передний',
	[DriveType.REAR]: 'Задний',
};

export const FuelPrice: Record<FuelType, number> = {
	[FuelType.AI92]: 52,
	[FuelType.AI95]: 56,
	[FuelType.AI98]: 60,
	[FuelType.AI100]: 60,
	[FuelType.DT]: 60,
	[FuelType.ELECTRIC]: 60,
};

export const FuelTypeLabels: Record<FuelType, string> = {
	[FuelType.AI92]: 'АИ-92',
	[FuelType.AI95]: 'АИ-95',
	[FuelType.AI98]: 'АИ-98',
	[FuelType.AI100]: 'АИ-100',
	[FuelType.DT]: 'Дизель',
	[FuelType.ELECTRIC]: 'Электричество',
};

export const TransportTypeLabels: Record<TransportType, string> = {
	[TransportType.HATCHBACK]: 'Хэтчбек',
	[TransportType.SEDAN]: 'Седан',
	[TransportType.COUPE]: 'Купе',
	[TransportType.LIFTBACK]: 'Лифтбек',
	[TransportType.UNIVERSAL]: 'Универсал',
	[TransportType.CROSSOVER]: 'Кроссовер',
	[TransportType.VAN]: 'Фургон',
	[TransportType.VNEDOROZNIK]: 'Внедорожник',
	[TransportType.MINIBUS]: 'Микроавтобус',
	[TransportType.BUS]: 'Автобус',
	[TransportType.TYAGACH]: 'Тягач',
	[TransportType.TRUCK]: 'Грузовик',
	[TransportType.PICKUP]: 'Пикап',
	[TransportType.CABRIOLET]: 'Кабриолет',
	[TransportType.MOTOCYCLE]: 'Мотоцикл',
};

export const ShowroomLabels: Record<Showroom, string> = {
	[Showroom.AVTOMAKS]: 'АвтоМакс',
	[Showroom.MERCURY_AUTO]: 'Mercury-Auto',
	[Showroom.ROFL]: 'РОФЛ',
	[Showroom.WORLD_OF_AUTO]: 'World of Auto',
	[Showroom.OGONEK]: 'Тихий Огонёк',
};

export const CountryOriginLabels: Record<CountryOrigin, string> = {
	[CountryOrigin.USSR_RUSSIA]: 'СССР/Россия',
	[CountryOrigin.USA]: 'США',
	[CountryOrigin.GERMANY]: 'Германия',
	[CountryOrigin.FRANCE]: 'Франция',
	[CountryOrigin.ITALY]: 'Италия',
	[CountryOrigin.SWEDEN]: 'Швеция',
	[CountryOrigin.UK]: 'Англия',
	[CountryOrigin.JAPAN]: 'Япония',
	[CountryOrigin.CZECH_REPUBLIC]: 'Чехия',
	[CountryOrigin.UKRAINE]: 'Украина',
	[CountryOrigin.BELARUS]: 'Беларусь',
	[CountryOrigin.AUSTRIA]: 'Австрия',
	[CountryOrigin.SOUTH_KOREA]: 'Южная Корея',
	[CountryOrigin.USSR_HUNGARY]: 'СССР/Венгрия',
	[CountryOrigin.USSR_UKRAINE]: 'СССР/Украина',
	[CountryOrigin.CHINA]: 'Китай',
};

export const CityLabels: Record<City, string> = {
	[City.PRIVOLZHSK]: 'Приволжск',
	[City.NEVSKY]: 'Невский',
	[City.MIRNY]: 'Мирный',
};
