import { ReactNode, MouseEvent } from 'react';
import styles from './YourStyles.module.css';

interface SortButtonProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	isActive: boolean;
	children: ReactNode;
}

export const DefaultButton = ({ onClick, isActive, children }: SortButtonProps) => {
	return (
		<button className={`${styles.sortButton} ${isActive ? styles.active : ''}`} onClick={onClick}>
			{children}
		</button>
	);
};
