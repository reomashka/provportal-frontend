import styles from './JobsList.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { JobCard } from '../JobCard';
import Transport from '@interfaces/Transport.interface';
import CardSkeleton from '@components/CardSkeleton';

export const JobsList = () => {
  const [transportData, setTransportData] = useState<Transport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const { data } = await axios.get(`http://localhost:4444/api/transport/get-all`);
        setTransportData(data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.jobsGrid}>
      {isLoading || hasError ? (
        Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
      ) : (
        <JobCard transportData={transportData} />
      )}
    </div>
  );
};
