import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';

import { getAnnouncements } from '@/api/announcement/getAnnouncements';
import placeholder from '@/assets/placeholder.svg';
import MarkdownWrapper from '@/components/markdown-wrapper/MarkDownWrapper';
import { Announcement } from '@/interfaces/Announcement.interface';

import styles from './NewsSection.module.scss';

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
					<div className={styles.newsSection_cardBlock_card} key={item.id}>
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
									{item.date
										? new Intl.DateTimeFormat('ru-RU', {
												day: 'numeric',
												month: 'numeric',
												year: 'numeric',
											}).format(new Date(item.date))
										: '—'}
								</p>
							</div>
						</div>
						<div className={styles.cardFooter}>
							<b>{item.title}</b>
							<MarkdownWrapper>
								<ReactMarkdown>{item.description}</ReactMarkdown>
							</MarkdownWrapper>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
