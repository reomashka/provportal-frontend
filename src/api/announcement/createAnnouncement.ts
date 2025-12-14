import { AnnouncementType } from '@/interfaces/Announcement.interface';

export interface CreateAnnouncement {
	title: string;
	description: string;
	type: AnnouncementType;
	date: string;
}

export async function createAnnouncement(data: CreateAnnouncement) {
	const res = await fetch('/api/announcement/create', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});

	if (!res.ok) throw new Error('Ошибка при создании новости');
	return res.json();
}
