export interface Announcement {
	id: number;
	title: string;
	description: string;
	type: AnnouncementType;
	date: string;
}

// TransportClass
export enum AnnouncementType {
	NEWS = 'NEWS',
	UPDATE = 'UPDATE',
}
