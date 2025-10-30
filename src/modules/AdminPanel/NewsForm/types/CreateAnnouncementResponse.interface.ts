import { AnnouncementType } from '@interfaces/Announcement.interface';

export interface CreateAnnouncementResponse {
	id: string;
	type: AnnouncementType;
	title: string;
	description: string;
	date: string;
}
