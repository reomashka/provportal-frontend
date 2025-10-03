import { Link } from 'react-router-dom';

import styles from './TransportNavigationGridPage.module.scss';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Banner } from '@components/Banner';

import passenger from '@assets/transportNavigationGridPage/passenger.webp';
import cargo from '@assets/transportNavigationGridPage/cargo.webp';
import bus from '@assets/transportNavigationGridPage/bus.webp';
import moto from '@assets/transportNavigationGridPage/moto.webp';
import bank from '@assets/banners/bank.jpg';

export const TransportNavigationGridPage = () => {
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
		<>
			<Header />
			<main>
				<div className="container">
					<Banner path={bank} title="Автомобили" />

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
				</div>
			</main>

			<Footer />
		</>
	);
};
