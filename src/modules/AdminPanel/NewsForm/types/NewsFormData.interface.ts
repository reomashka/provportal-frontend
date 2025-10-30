import { AnnouncementType } from '@interfaces/Announcement.interface';

export interface NewsFormData {
	type: AnnouncementType;
	title: string;
	description: string;
	date: string;
	image: File | null;
}
