import React, { ReactNode, MouseEvent } from 'react';
import styles from './YourStyles.module.css'; // Убедитесь, что путь к стилям правильный

interface SortButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void; // Тип для функции onClick
  isActive: boolean; // Тип для isActive
  children: ReactNode; // Тип для children (может быть строкой, элементом и т.д.)
}

export const DefaultButton: React.FC<SortButtonProps> = ({ onClick, isActive, children }) => {
  return (
    <button className={`${styles.sortButton} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};
