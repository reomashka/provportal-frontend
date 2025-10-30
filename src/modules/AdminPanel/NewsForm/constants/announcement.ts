import { AnnouncementType } from '@interfaces/Announcement.interface';

export const TYPE_LABELS: Record<AnnouncementType, string> = {
	[AnnouncementType.NEWS]: 'Новости',
	[AnnouncementType.UPDATE]: 'Обновление',
} as const;
