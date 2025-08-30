import styles from './Banner.module.scss';

interface BannerProps {
	path: string;
	title: string;
}

export const Banner = ({ path, title }: BannerProps) => {
	return (
		<>
			<div className={styles.banner}>
				<img src={`https://provportal.ru/${path}`} alt="Banner" />
			</div>
			<div>
				<h1 className={styles.title}>{title}</h1>
			</div>
		</>
	);
};
