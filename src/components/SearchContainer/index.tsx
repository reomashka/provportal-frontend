import React from 'react';
import { Search } from 'lucide-react';

import styles from './SearchContainer.module.scss';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchContainer: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type='text'
        placeholder='Поиск по транспорту'
        className={styles.searchInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className={styles.searchIcon} size={20} aria-label='Search' />
    </div>
  );
};
