import styles from './AnnouncementPreview.module.scss';
import placeholder from '@/assets/placeholder.svg';
import { TYPE_LABELS } from '../../constants/announcement';

type AnnouncementType = keyof typeof TYPE_LABELS;

interface AnnouncementFields {
	type: AnnouncementType;
	title?: string;
	description?: string;
}

interface AnnouncementPreviewProps {
	watchedFields: AnnouncementFields;
	formattedDate: string;
	imagePreview?: string | null;
}

export const AnnouncementPreview = ({
	watchedFields,
	formattedDate,
	imagePreview,
}: AnnouncementPreviewProps) => {
	return (
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
	);
};
