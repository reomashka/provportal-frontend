import { useCallback, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import styles from './index.module.scss';
import placeholder from '@/assets/placeholder.svg';
import { AnnouncementType } from '@interfaces/Announcement.interface';
import { TYPE_LABELS } from './constants/announcement';
import { NewsFormData } from './types/NewsFormData.interface';
import { formatDateForDisplay } from './utils/date';
import { useAnouncementMutation } from './hooks/useAnouncementMutation';

const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;

const getTodayDateString = (): string => {
	return new Date().toISOString().split('T')[0];
};
export const NewsForm = () => {
	const {
		control,
		handleSubmit,
		watch,
		setValue,
		reset,
		formState: { isSubmitting },
	} = useForm<NewsFormData>({
		defaultValues: {
			type: AnnouncementType.NEWS,
			title: '',
			description: '',
			date: getTodayDateString(),
			image: null,
		},
		mode: 'onChange',
	});

	// Наблюдаем за всеми полями для preview
	const watchedFields = watch();
	const imageFile = watchedFields.image;

	const { createAnnouncementMutation, uploadImageMutation } = useAnouncementMutation();

	// TODO: Можно вынести в хук useImagePreview(file)
	const imagePreview = useMemo(() => {
		if (!imageFile) return null;

		// Создаём URL для preview (очищается автоматически при размонтировании)
		return URL.createObjectURL(imageFile);
	}, [imageFile]);

	// ================================================================
	// FORMATTED DATE FOR PREVIEW
	// ================================================================
	const formattedDate = useMemo(() => {
		return formatDateForDisplay(watchedFields.date);
	}, [watchedFields.date]);

	// ================================================================
	// HANDLERS
	// ================================================================
	const handleImageChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0];
			if (file) {
				// Валидация типа файла
				if (!file.type.startsWith('image/')) {
					toast.error('Пожалуйста, выберите изображение');
					return;
				}

				// Опционально: валидация размера файла (например, макс 5MB)
				const maxSize = 5 * 1024 * 1024; // 5MB
				if (file.size > maxSize) {
					toast.error('Размер файла не должен превышать 5MB');
					return;
				}

				setValue('image', file, { shouldValidate: true });
			}
		},
		[setValue],
	);

	const handleRemoveImage = useCallback(() => {
		setValue('image', null, { shouldValidate: true });
	}, [setValue]);

	const onSubmit = useCallback(
		async (data: NewsFormData) => {
			try {
				// 1. Создаём объявление
				const announcement = await createAnnouncementMutation.mutateAsync({
					type: data.type,
					title: data.title,
					description: data.description,
					date: new Date(data.date).toISOString(),
				});

				// 2. Загружаем изображение, если есть
				if (data.image) {
					await uploadImageMutation.mutateAsync({
						file: data.image,
						announcementId: announcement.id,
					});
				}

				// 3. Сбрасываем форму после успешной отправки
				reset({
					type: data.type, // Сохраняем текущий тип
					title: '',
					description: '',
					date: getTodayDateString(),
					image: null,
				});
			} catch (error) {
				console.error('Form submission error:', error);
			}
		},
		[createAnnouncementMutation, uploadImageMutation, reset],
	);

	// ================================================================
	// RENDER
	// ================================================================
	return (
		<div className={styles.container}>
			{/* LEFT SIDE: FORM */}
			<div className={styles.formWrapper}>
				<h1 className={styles.title}>Добавить новость или обновление</h1>

				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					{/* Type Select */}
					<div className={styles.formGroup}>
						<label htmlFor="type" className={styles.label}>
							Тип контента
						</label>
						<Controller
							name="type"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<select {...field} id="type" className={styles.select} required>
									<option value={AnnouncementType.NEWS}>
										{TYPE_LABELS[AnnouncementType.NEWS]}
									</option>
									<option value={AnnouncementType.UPDATE}>
										{TYPE_LABELS[AnnouncementType.UPDATE]}
									</option>
								</select>
							)}
						/>
					</div>

					{/* Title Input */}
					<div className={styles.formGroup}>
						<label htmlFor="title" className={styles.label}>
							Заголовок
						</label>
						<Controller
							name="title"
							control={control}
							rules={{
								required: 'Заголовок обязателен',
								maxLength: {
									value: MAX_TITLE_LENGTH,
									message: `Максимум ${MAX_TITLE_LENGTH} символов`,
								},
							}}
							render={({ field }) => (
								<input
									{...field}
									type="text"
									id="title"
									className={styles.input}
									placeholder="Введите заголовок"
									maxLength={MAX_TITLE_LENGTH}
									required
								/>
							)}
						/>
					</div>

					{/* Date Input */}
					<div className={styles.formGroup}>
						<label htmlFor="date" className={styles.label}>
							Дата публикации
						</label>
						<Controller
							name="date"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input {...field} type="date" id="date" className={styles.input} required />
							)}
						/>
					</div>

					{/* Description Textarea */}
					<div className={styles.formGroup}>
						<label htmlFor="description" className={styles.label}>
							Описание
						</label>
						<Controller
							name="description"
							control={control}
							rules={{
								required: 'Описание обязательно',
								maxLength: {
									value: MAX_DESCRIPTION_LENGTH,
									message: `Максимум ${MAX_DESCRIPTION_LENGTH} символов`,
								},
							}}
							render={({ field }) => (
								<textarea
									{...field}
									id="description"
									className={styles.textarea}
									placeholder="Введите описание"
									rows={6}
									maxLength={MAX_DESCRIPTION_LENGTH}
									required
								/>
							)}
						/>
					</div>

					{/* Image Upload */}
					{/* TODO: Вынести в компонент ImageUploadField */}
					<div className={styles.formGroup}>
						<label htmlFor="image" className={styles.label}>
							Изображение
						</label>

						{!imagePreview ? (
							<div className={styles.uploadArea}>
								<input
									type="file"
									id="image"
									name="image"
									accept="image/*"
									onChange={handleImageChange}
									className={styles.fileInput}
								/>
								<label htmlFor="image" className={styles.uploadLabel}>
									<svg
										className={styles.uploadIcon}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 4v16m8-8H4"
										/>
									</svg>
									<span>Нажмите для загрузки изображения</span>
								</label>
							</div>
						) : (
							<div className={styles.previewContainer}>
								<img src={imagePreview} alt="Preview" className={styles.preview} />
								<button type="button" onClick={handleRemoveImage} className={styles.removeButton}>
									Удалить изображение
								</button>
							</div>
						)}
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className={styles.submitButton}
						disabled={isSubmitting || createAnnouncementMutation.isPending}>
						{isSubmitting || createAnnouncementMutation.isPending ? 'Отправка...' : 'Опубликовать'}
					</button>
				</form>
			</div>

			{/* RIGHT SIDE: PREVIEW */}
			{/* TODO: Вынести в компонент AnnouncementPreview */}
			<div className={styles.previewSection}>
				<h2 className={styles.previewTitle}>Предпросмотр</h2>
				<div className={styles.newsCard}>
					<div className={styles.cardImage}>
						<img src={imagePreview || placeholder} alt="Предпросмотр новости" />
						<div className={styles.cardBadge}>
							<p className={styles.badgeType}>{TYPE_LABELS[watchedFields.type]}</p>
							<p className={styles.badgeDate}>{formattedDate}</p>
						</div>
					</div>
					<div className={styles.cardContent}>
						<h3 className={styles.cardTitle}>{watchedFields.title || 'Заголовок новости'}</h3>
						<p className={styles.cardDescription}>
							{watchedFields.description ||
								'Здесь будет отображаться описание вашей новости или обновления'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

// ====================================================================
// АРХИТЕКТУРНЫЕ УЛУЧШЕНИЯ (TODO)
// ====================================================================
/*
1. HOOKS:
   - hooks/useAnnouncementMutations.ts - вынести логику создания и загрузки
   - hooks/useImagePreview.ts - логика работы с превью изображения
   - hooks/useNewsForm.ts - объединить всю логику формы

2. COMPONENTS:
   - components/NewsForm/ImageUploadField.tsx - поле загрузки изображения
   - components/NewsForm/AnnouncementPreview.tsx - превью новости
   - components/NewsForm/FormField.tsx - обёртка для полей с label

3. CONSTANTS:
   - constants/announcement.ts - TYPE_LABELS, limits
   - constants/validation.ts - правила валидации

4. UTILS:
   - utils/date.ts - форматирование дат
   - utils/file.ts - работа с файлами (валидация, preview)

5. TYPES:
   - types/forms.ts - типы форм
   - types/api.ts - типы API ответов

6. API LAYER:
   - api/announcement/mutations.ts - централизованные мутации
   - Рассмотреть использование React Query DevTools для дебага

7. VALIDATION:
   - Добавить Zod или Yup схему валидации для более строгой проверки
   - Интегрировать с React Hook Form через resolver

8. ERROR HANDLING:
   - Создать ErrorBoundary для компонента
   - Добавить retry логику для failed uploads
   - Улучшить UX при ошибках (показывать конкретные ошибки полей)

9. OPTIMIZATION:
   - Рассмотреть React.memo для preview секции
   - Добавить debounce для live preview при вводе текста
   - Lazy load для изображений

10. ACCESSIBILITY:
    - Добавить aria-labels
    - Улучшить keyboard navigation
    - Добавить loading states с aria-live

11. TESTING:
    - Unit тесты для utils функций
    - Integration тесты для формы
    - E2E тесты для полного flow создания объявления
*/
