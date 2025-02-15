// Сторонние либы
import { useState, useEffect } from 'react';
import axios from 'axios';

// Интерфейсы, стили
import Transport from '@interfaces/Transport.interface';
import styles from './TransportList.module.scss';

// Компоненты
import { TransportCard } from '../TransportCard';
import CardSkeleton from '@components/CardSkeleton';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from '@redux/store';

interface TransportTypeProps {
  transportType: 'moto' | 'passenger' | 'cargo' | 'public';
}

export const TransportList: React.FC<TransportTypeProps> = ({ transportType }) => {
  const [transportData, setTransportData] = useState<Transport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterData = useSelector((state: RootState) => state.filter.value);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:4444/api/transport/get-all?order=${filterData}&class=${transportType}`
        );
        setTransportData(data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filterData, transportType]);

  return (
    <div className={styles.transportGrid}>
      {isLoading ? (
        Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
      ) : (
        <TransportCard transportData={transportData} transportType={transportType} />
      )}
    </div>
  );
};
