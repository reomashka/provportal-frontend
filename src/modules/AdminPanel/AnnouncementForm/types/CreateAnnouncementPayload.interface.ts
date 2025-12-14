import { AnnouncementType } from '@/interfaces/Announcement.interface';

export interface CreateAnnouncementPayload {
	type: AnnouncementType;
	title: string;
	description: string;
	date: string;
}
