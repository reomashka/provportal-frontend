import { useEffect, useState } from 'react';

import styles from './ScrollToTop.module.scss';

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={`${styles.scroll_to_top} ${isVisible ? styles.visible : ''}`}
			onClick={scrollToTop}
			aria-label="Наверх">
			↑
		</div>
	);
};
