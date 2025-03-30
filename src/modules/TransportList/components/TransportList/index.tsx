import { useState, useEffect } from 'react';
import axios from 'axios';
import Transport from '@interfaces/Transport.interface';
import TransportTypeProps from '@interfaces/TransportTypeProps.interface';
import styles from './TransportList.module.scss';
import { TransportCard } from '../TransportCard';
import CardSkeleton from '@components/CardSkeleton';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@redux/store';
import { setScrollY } from '@redux/slices/scrollSlice';

export const TransportList: React.FC<TransportTypeProps> = ({ transportType }) => {
  const [transportData, setTransportData] = useState<Transport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();
  const filterData = useSelector((state: RootState) => state.filter.value);
  // const scrollY = useSelector((state: RootState) => state.scroll.scrollY);

  // Сохранение позиции прокрутки перед переходом
  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrollY(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  // Загрузка данных
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const { data } = await axios.get(
          `/api/transport/get-all?order=${filterData}&class=${transportType}`
        );
        setTransportData(data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filterData, transportType]);

  // Очистка прокрутки, если прошло больше 10 минут
  useEffect(() => {
    const savedScrollY = localStorage.getItem('scrollY');
    const timestamp = localStorage.getItem('scrollYTimestamp');

    if (savedScrollY && timestamp) {
      const currentTime = Date.now();
      const timePassed = currentTime - parseInt(timestamp, 10);

      if (timePassed < 10 * 60 * 1000) {
        // 10 минут в миллисекундах
        window.scrollTo(0, parseInt(savedScrollY, 10));
      } else {
        localStorage.removeItem('scrollY');
        localStorage.removeItem('scrollYTimestamp');
      }
    }
  }, [isLoading]);

  // Сохранение прокрутки и времени при изменении
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('scrollY', String(window.scrollY));
      localStorage.setItem('scrollYTimestamp', String(Date.now()));
    }
  }, [isLoading]);

  // Очистка позиции прокрутки при размонтировании
  useEffect(() => {
    return () => {
      dispatch(setScrollY(0));
    };
  }, [dispatch]);

  return (
    <div className={styles.transportGrid}>
      {isLoading || hasError ? (
        Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
      ) : (
        <TransportCard transportData={transportData} transportType={transportType} />
      )}
    </div>
  );
};
