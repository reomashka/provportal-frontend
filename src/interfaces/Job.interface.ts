export interface Job {
	id: number;
	name: string;
	lvl: number;
	about: string;
	description: string;
	salaries: {
		id: number;
		jobId: number;
		city: City;
		amount: number;
		time: number;
		exp: number;
		stops: number | null;
	}[];
}

export enum City {
	PRIVOLZHSK = 'PRIVOLZHSK',
	NEVSKY = 'NEVSKY',
	MIRNY = 'MIRNY',
	VOLCHANSK = 'VOLCHANSK',
	ZHUKOVSKIY = 'ZHUKOVSKIY',
}
