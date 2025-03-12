import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Info, CircleFadingArrowUp, MapPin } from 'lucide-react';
import styles from './TransportCard.module.scss';
import Transport from '@interfaces/Transport.interface';

interface TransportCardProps {
  transportData: Transport[];
}

export const JobCard: React.FC<TransportCardProps> = ({ transportData }) => {
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
          onClick={handleCardClick}
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
              src={`https://provportal.ru/assets/images/jobs/tram.webp`}
              alt={transport.nameAuto}
              className={styles.transportImage}
              loading='lazy'
            />

            <div className={styles.headerCard}>
              <h2>Водитель трамвая</h2>
            </div>

            <div className={styles.details}>
              <div className={styles.leftColumn}>
                <div className={styles.detailItem}>
                  <CircleFadingArrowUp className={styles.icon} color='#ffffff' />
                  <span>5 уровень</span>
                </div>

                <div className={styles.detailItem}>
                  <MapPin className={styles.icon} color='#ffffff' strokeWidth={1.5} />
                  <span>г. Приволжск, Мирный, Невский</span>
                </div>

                <div className={styles.detailItem}>
                  <Info className={styles.icon} color='#ffffff' strokeWidth={1.5} />
                  <span>Городские маршруты по перевозке пассажиров</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};
