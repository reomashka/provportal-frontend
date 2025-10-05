import { useState, type ChangeEvent, type FormEvent } from 'react';
import styles from './index.module.scss';
import placeholder from '@/assets/placeholder.svg';
import { toast } from 'react-toastify';

type ContentType = 'update' | 'news';

const TypeValue: Record<ContentType, string> = {
	update: 'Обновление',
	news: 'Новости',
};

interface FormData {
	type: ContentType;
	title: string;
	description: string;
	date: string;
	image: File | null;
}

export default function NewsFormPage() {
	const [formData, setFormData] = useState<FormData>({
		type: 'news',
		title: '',
		description: '',
		date: new Date().toISOString().split('T')[0],
		image: null,
	});

	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFormData({ ...formData, type: e.target.value as ContentType });
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setFormData({ ...formData, image: file });

			// Create preview
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleRemoveImage = () => {
		setFormData({ ...formData, image: null });
		setImagePreview(null);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		try {
			console.log('Submitting form data:', formData);

			// Here you would typically send the data to your API
			// const formDataToSend = new FormData()
			// formDataToSend.append('type', formData.type)
			// formDataToSend.append('title', formData.title)
			// formDataToSend.append('description', formData.description)
			// formDataToSend.append('date', formData.date)
			// if (formData.image) {
			//   formDataToSend.append('image', formData.image)
			// }
			// await fetch('/api/news', { method: 'POST', body: formDataToSend })

			await new Promise((resolve) => setTimeout(resolve, 1000));

			toast.success('Успешно отправлено!');

			// Reset form
			setFormData({
				type: 'news',
				title: '',
				description: '',
				date: new Date().toISOString().split('T')[0],
				image: null,
			});
			setImagePreview(null);
		} catch (error) {
			console.error('Error submitting form:', error);
			toast.error('Ошибка при отправке');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.formWrapper}>
				<h1 className={styles.title}>Добавить новость или обновление</h1>

				<form onSubmit={handleSubmit} className={styles.form}>
					{/* Type Selection */}
					<div className={styles.formGroup}>
						<label htmlFor="type" className={styles.label}>
							Тип контента
						</label>
						<select
							id="type"
							name="type"
							value={formData.type}
							onChange={handleTypeChange}
							className={styles.select}
							required>
							<option value="news">Новости</option>
							<option value="update">Обновление</option>
						</select>
					</div>

					{/* Title Input */}
					<div className={styles.formGroup}>
						<label htmlFor="title" className={styles.label}>
							Заголовок
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={formData.title}
							onChange={handleInputChange}
							className={styles.input}
							placeholder="Введите заголовок"
							required
							maxLength={100}
						/>
					</div>

					{/* Date Input */}
					<div className={styles.formGroup}>
						<label htmlFor="date" className={styles.label}>
							Дата публикации
						</label>
						<input
							type="date"
							id="date"
							name="date"
							value={formData.date}
							onChange={handleInputChange}
							className={styles.input}
							required
						/>
					</div>

					{/* Description Input */}
					<div className={styles.formGroup}>
						<label htmlFor="description" className={styles.label}>
							Описание
						</label>
						<textarea
							id="description"
							name="description"
							value={formData.description}
							onChange={handleInputChange}
							className={styles.textarea}
							placeholder="Введите описание"
							required
							rows={6}
							maxLength={500}
						/>
					</div>

					{/* Image Upload */}
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
								<img
									src={imagePreview || '/placeholder.svg'}
									alt="Preview"
									className={styles.preview}
								/>
								<button type="button" onClick={handleRemoveImage} className={styles.removeButton}>
									Удалить изображение
								</button>
							</div>
						)}
					</div>

					{/* Submit Button */}
					<button type="submit" className={styles.submitButton} disabled={isSubmitting}>
						{isSubmitting ? 'Отправка...' : 'Опубликовать'}
					</button>
				</form>
			</div>

			<div className={styles.previewSection}>
				<h2 className={styles.previewTitle}>Предпросмотр</h2>
				<div className={styles.newsCard}>
					<div className={styles.cardImage}>
						<img src={imagePreview || placeholder} alt="Предпросмотр новости" />
						<div className={styles.cardBadge}>
							<p className={styles.badgeType}>{TypeValue[formData.type]}</p>
							<p className={styles.badgeDate}>
								{new Intl.DateTimeFormat('ru-RU', {
									day: 'numeric',
									month: 'numeric',
									year: 'numeric',
								}).format(new Date(formData.date))}
							</p>
						</div>
					</div>
					<div className={styles.cardContent}>
						<h3 className={styles.cardTitle}>{formData.title || 'Заголовок новости'}</h3>
						<p className={styles.cardDescription}>
							{formData.description ||
								'Здесь будет отображаться описание вашей новости или обновления'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
