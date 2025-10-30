import { useMutation } from '@tanstack/react-query';
import { CreateAnnouncementPayload } from '../types/CreateAnnouncementPayload.interface';
import { CreateAnnouncementResponse } from '../types/CreateAnnouncementResponse.interface';

import { createAnnouncement as createAnnouncementApi } from '@/api/announcement/createAnouncement';
import { uploadFile as uploadFileApi } from '@/api/common/upload';

import { toast } from 'react-toastify';

export const useAnouncementMutation = () => {
	const createAnnouncementMutation = useMutation<
		CreateAnnouncementResponse,
		Error,
		CreateAnnouncementPayload
	>({
		mutationFn: async (payload) => {
			return await createAnnouncementApi(payload);
		},
		onSuccess: () => {
			toast.success('Объявление успешно создано');
		},
		onError: (error) => {
			toast.error('Ошибка при создании объявления');
			console.error('Create announcement error:', error);
		},
	});

	const uploadImageMutation = useMutation<void, Error, { file: File; announcementId: string }>({
		mutationFn: async ({ file, announcementId }) => {
			await uploadFileApi(file, announcementId);
		},
		onError: (error) => {
			toast.error('Ошибка при загрузке изображения');
			console.error('Upload image error:', error);
		},
	});

	return { createAnnouncementMutation, uploadImageMutation };
};
