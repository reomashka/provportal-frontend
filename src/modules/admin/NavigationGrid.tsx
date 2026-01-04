import { RefreshCw } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavigationGrid.module.scss';

interface NavigationItemProps {
	icon: React.ReactNode;
	title: string;
	url: string;
}

const NavigationItem = ({ icon, title, url }: NavigationItemProps) => {
	return (
		<Link to={url}>
			<div className={styles.navigationItem}>
				<div className={styles.iconContainer}>{icon}</div>
				<div className={styles.title}>{title}</div>
			</div>
		</Link>
	);
};

export const NavigationGrid = () => {
	const navigationItems = [
		{
			icon: <RefreshCw className={styles.icon} />,
			title: 'Добавить обновление',
			url: '/adm/update',
		},
	];

	return (
		<div className={styles.navigationGrid}>
			{navigationItems.map((item, index) => (
				<NavigationItem key={index} icon={item.icon} title={item.title} url={item.url} />
			))}
		</div>
	);
};
