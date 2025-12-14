import { useMutation } from '@tanstack/react-query';
import { CreateAnnouncementPayload } from '../types/CreateAnnouncementPayload.interface';
import { CreateAnnouncementResponse } from '../types/CreateAnnouncementResponse.interface';

import { createAnnouncement as createAnnouncementApi } from '@/api/announcement/createAnnouncement';
import { uploadFile as uploadFileApi } from '@/api/common/upload';

import { toast } from 'react-toastify';

export const useAnnouncementMutation = () => {
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

	const uploadImageMutation = useMutation<void, Error, { file: File; title: string }>({
		mutationFn: async ({ file, title }) => {
			await uploadFileApi(file, title);
		},
		onError: (error) => {
			toast.error('Ошибка при загрузке изображения');
			console.error('Upload image error:', error);
		},
	});

	return { createAnnouncementMutation, uploadImageMutation };
};
