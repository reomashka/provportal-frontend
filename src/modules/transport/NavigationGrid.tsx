import { Link } from 'react-router-dom';

import bus from '@/assets/transportNavigationGridPage/bus.webp';
import cargo from '@/assets/transportNavigationGridPage/cargo.webp';
import moto from '@/assets/transportNavigationGridPage/moto.webp';
import passenger from '@/assets/transportNavigationGridPage/passenger.webp';

import styles from './NavigationGrid.module.scss';

export const NavigationGrid = () => {
	const categories = [
		{
			title: 'Легковой транспорт',
			img: passenger,
			to: '/transport/passenger',
		},
		{
			title: 'Грузовой транспорт',
			img: cargo,
			to: '/transport/cargo',
		},
		{
			title: 'Общественный транспорт',
			img: bus,
			to: '/transport/public',
		},
		{
			title: 'Мотоциклы',
			img: moto,
			to: '/transport/moto',
		},
		{
			title: 'Контейнерный транспорт',
			img: moto,
			to: '/transport/container',
		},
		{
			title: 'Экслюзивный транспорт',
			img: moto,
			to: '/transport/exclusive',
		},
	];
	return (
		<div className={styles.transportGrid}>
			{categories.map((category) => (
				<Link to={category.to} key={category.title} className={styles.categoryCard}>
					<div className={styles.imgWrapper}>
						<img
							src={category.img || '/placeholder.svg'}
							alt={category.title}
							className={styles.image}
						/>
					</div>
					<h2>{category.title}</h2>
				</Link>
			))}
		</div>
	);
};
