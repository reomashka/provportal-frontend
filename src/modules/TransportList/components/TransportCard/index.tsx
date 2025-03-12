import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Timer, Gauge, Warehouse, Fuel, ClockAlert, Users, Grid2x2 } from 'lucide-react';
import styles from './TransportCard.module.scss';
import Transport from '@interfaces/Transport.interface';

interface TransportCardProps {
  transportData: Transport[];
  transportType: string;
}

export const TransportCard: React.FC<TransportCardProps> = ({ transportData, transportType }) => {
  // Сохранение позиции прокрутки перед переходом
  const handleCardClick = () => {
    localStorage.setItem('scrollY', window.scrollY.toString());
  };

  return (
    <>
      {transportData.map((transport) => (
        <Link
          key={transport.id}
          to={'/transport/' + transport.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
          onClick={handleCardClick} // Сохраняем позицию прокрутки перед переходом
        >
          <motion.div
            className={styles.transportCard}
            key={transport.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.07 } }}
          >
            <img
              src={`https://provportal.ru/assets/images/transport/${transport.uniqueName}.webp`}
              alt={transport.nameAuto}
              className={styles.transportImage}
              loading='lazy'
            />

            <div className={styles.headerCard}>
              <h2>{transport.nameAuto}</h2>
            </div>

            <div className={styles.details}>
              <div className={styles.leftColumn}>
                <div className={styles.detailItem}>
                  <Gauge className={styles.icon} color='#ffffff' />
                  <span>{transport.fullSpeed} км/ч</span>
                </div>

                <div className={styles.detailItem}>
                  <Timer className={styles.icon} color='#ffffff' strokeWidth={1.5} />
                  <span>0-100 {transport.speed100Time} с.</span>
                </div>

                <div className={styles.detailItem}>
                  <ClockAlert className={styles.icon} color='#ffffff' strokeWidth={1.5} />
                  <span>0-MAX {transport.speedMaxTime} с.</span>
                </div>
              </div>

              <div className={styles.rightColumn}>
                <div className={styles.detailItem}>
                  <Fuel className={styles.icon} color='#ffffff' />
                  <span> {transport.volumeTank} л.</span>
                </div>

                <div className={styles.detailItem}>
                  <Warehouse className={styles.icon} color='#ffffff' strokeWidth={1.5} />
                  <span>{transport.showroom}</span>
                </div>

                {transportType === 'public' ? (
                  <div className={styles.detailItem}>
                    <Users className={styles.icon} color='#ffffff' strokeWidth={1.5} />
                    <span> {transport.seats}</span>
                  </div>
                ) : (
                  <div className={styles.detailItem}>
                    <Grid2x2 className={styles.icon} color='#ffffff' strokeWidth={1.5} />
                    <span> {transport.slots} сл.</span>
                  </div>
                )}
              </div>
            </div>

            {transportType !== 'container' ? (
              <div className={styles.price}>
                <span>
                  {new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
                    transport.price ?? 0
                  )}{' '}
                  ₽
                  <span className={styles.tooltip}>
                    Актуальная гос. цена:{' '}
                    {new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
                      (transport.price ?? 0) * 0.9
                    )}{' '}
                    ₽
                  </span>{' '}
                </span>
              </div>
            ) : (
              <div className={styles.price}>
                <span>Контейнер</span>
              </div>
            )}
          </motion.div>
        </Link>
      ))}
    </>
  );
};
