import { useState, useEffect } from 'react';

// scss & interfaces
import Transport from '@interfaces/Transport.interface';
import TransportTypeProps from '@interfaces/TransportTypeProps.interface';
import styles from './TransportList.module.scss';

// components
import { TransportCard } from '../TransportCard';
import CardSkeleton from '@components/CardSkeleton';
import { SearchInput } from '@components/SearchInput';

// redux
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@redux/store';
import { setScrollY } from '@redux/slices/scrollSlice';

// fetch api
import { fetchAllTransport } from '../../api/fetchAllTransport';

export const TransportList: React.FC<TransportTypeProps> = ({ transportType }) => {
  const [transportData, setTransportData] = useState<Transport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const filterData = useSelector((state: RootState) => state.filter.value);

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
      const { data, error } = await fetchAllTransport(filterData, transportType);
      if (error) {
        setHasError(true);
      } else {
        setTransportData(data);
      }
      setIsLoading(false);
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

  const searchFilterTransportData = transportData.filter((item) =>
    item.nameAuto.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder='Поиск транспорта...'
      />

      <div className={styles.transportGrid}>
        {isLoading || hasError ? (
          Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
        ) : (
          <TransportCard transportData={searchFilterTransportData} transportType={transportType} />
        )}
      </div>
    </>
  );
};
