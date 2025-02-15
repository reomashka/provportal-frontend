import React from 'react';
import styles from './SortButtons.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@redux/store';
import { setAscOrder, setDescOrder } from '@redux/slices/filterSlice';

export const SortButtons: React.FC = () => {
  const filterData = useSelector((state: RootState) => state.filter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.sortButtons}>
      <button
        className={`${styles.sortButton} + ${filterData === 'asc' ? `${styles.active}` : ''}`}
        onClick={() => dispatch(setAscOrder())}
      >
        По возрастанию
      </button>
      <button
        className={`${styles.sortButton} + ${filterData === 'desc' ? `${styles.active}` : ''}`}
        onClick={() => dispatch(setDescOrder())}
      >
        По убыванию
      </button>
    </div>
  );
};
