import { useQuery } from '@tanstack/react-query';
import styles from './NewsSection.module.scss';
import { getAnnouncements } from '@/api/announcement/getAnnouncements';
import { Announcement } from '@/interfaces/Announcement.interface';

import placeholder from '@/assets/placeholder.svg';

export const NewsSection = () => {
	const { data, isLoading } = useQuery<Announcement[]>({
		queryKey: ['announcement'],
		queryFn: getAnnouncements,
	});

	if (isLoading) return <div>Загрузка...</div>;

	return (
		<section className={styles.newsSection}>
			<div className={styles.newsSection_cardBlock}>
				{data?.map((item: Announcement) => (
					<div className={styles.newsSection_cardBlock_card}>
						<div className={styles.cardImage}>
							<img
								src={`/uploads/news/${item.id}.jpg`}
								alt="Объявление"
								onError={(e) => {
									(e.currentTarget as HTMLImageElement).src = placeholder;
								}}
							/>

							<div className={styles.cardAbs}>
								<p className={styles.cardTitle}>
									{item.type === 'NEWS' ? 'Новости' : 'Обновление'}
								</p>
								<p className={styles.cardSubtitle}>
									{new Intl.DateTimeFormat('ru-RU', {
										day: 'numeric',
										month: 'numeric',
										year: 'numeric',
									}).format(new Date(item.date))}
								</p>
							</div>
						</div>
						<div className={styles.cardFooter}>
							<p>
								<b>{item.title}</b>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
