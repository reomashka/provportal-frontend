import { Link } from 'react-router-dom';

import iconCar from '@assets/homePage/main-section-img/mc-car.svg';
import iconCard from '@assets/homePage/main-section-img/mc-card.svg';
import iconFraction from '@assets/homePage/main-section-img/mc-fraction.svg';
import iconHome from '@assets/homePage/main-section-img/mc-home.svg';
import iconServer from '@assets/homePage/main-section-img/mc-server.svg';
import iconWork from '@assets/homePage/main-section-img/mc-work.svg';

import styles from './MainSection.module.scss';

export const MainSection = () => {
  const icons: { [key: string]: string } = {
    iconCar,
    iconCard,
    iconFraction,
    iconHome,
    iconServer,
    iconWork,
  };

  const mainSectionCards = [
    { id: 1, name: 'Автомобили', link: '/transport', color: 'blue', icon: 'iconCar' },
    { id: 2, name: 'Организации', link: '/systems/org', color: 'purp', icon: 'iconHome' },
    { id: 3, name: 'Работы', link: '/jobs', color: 'red', icon: 'iconFraction' },
    { id: 4, name: 'Игровые системы', link: '/systems', color: 'green', icon: 'iconServer' },
    { id: 5, name: 'Банковская система', link: '/systems/bank', color: 'yel', icon: 'iconCard' },
    { id: 6, name: 'Фракции', link: '/fractions', color: 'oran', icon: 'iconWork' },
  ];

  return (
    <section className={styles.mainSection}>
      <p className={styles.mainSectionTitle}>Основные разделы</p>
      <div className={styles.mainSectionCardBlock}>
        {mainSectionCards.map((card) => (
          <Link to={card.link} key={card.id}>
            <div className={`${styles.mainSectionCard} ${styles[card.color]}`}>
              <p>{card.name}</p>
              <img src={icons[card.icon]} alt='#' />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
