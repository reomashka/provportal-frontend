import { useState, useEffect } from 'react';
import styles from './TransportInfo.module.scss';

import { useParams } from 'react-router-dom';

import Transport from '@interfaces/Transport.interface';

import { PhotosOfTransport } from '../PhotosOfTransport';
import { MiniInfo } from '../MiniInfo';
import { TransportSpecific } from '../TransportSpecifics';
import { TransportInsurance } from '../TransportInsurance';
import { TransportStages } from '../TransportStages';
import { TransportTuning } from '../TransportTuning';

export const TransportInfo = () => {
  const [transportData, setTransportData] = useState<Transport | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      // setIsLoading(true);
      try {
        const transportDataResponse = await fetch(
          `http://localhost:3000/api/transport/get-one/${id}`
        );
        if (!transportDataResponse.ok) {
          throw new Error('Ошибка сервера: ' + transportDataResponse.status);
        }

        const transportData = await transportDataResponse.json();
        setTransportData(transportData);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className='wrapper'>
      <div className={styles.row}>
        <PhotosOfTransport transportData={transportData} />
        <MiniInfo transportData={transportData} />

        <div className={styles.row}>
          <TransportSpecific transportData={transportData} />
          <div className={styles.selectionOfInfo}>
            <TransportInsurance />
            <TransportStages />
            <TransportTuning />
          </div>
        </div>
      </div>
    </div>
  );
};
