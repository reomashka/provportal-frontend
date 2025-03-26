import styles from './JobsList.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { JobCard } from '../JobCard';
import { Job } from '@interfaces/Job.interface';
import CardSkeleton from '@components/CardSkeleton';
import { Link } from 'react-router-dom';

export const JobsList = () => {
  const [data, setData] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const { data } = await axios.get(`http://localhost:3000/api/jobs`);
        setData(data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const role = 'admin';

  return (
    <>
      {role === 'admin' && (
        <Link className={`${styles.sortButton}`} to='/adm/jobs'>
          Добавить работу
        </Link>
      )}

      <div className={styles.jobsGrid}>
        {isLoading || hasError ? (
          Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
        ) : data ? (
          <JobCard jobData={data} />
        ) : null}
      </div>
    </>
  );
};
