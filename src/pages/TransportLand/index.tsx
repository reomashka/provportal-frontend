import { Link } from 'react-router-dom';

import styles from './TransportLand.module.scss';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Banner } from '@components/Banner';

export function TransportLand() {
  const categories = [
    {
      title: 'Легковой транспорт',
      img: 'https://provportal.ru/assets/images/transport/mainPage/passenger.webp',
      to: '/transport/passenger',
    },
    {
      title: 'Грузовой транспорт',
      img: 'https://provportal.ru/assets/images/transport/mainPage/cargo.webp',
      to: '/transport/cargo',
    },
    {
      title: 'Общественный транспорт',
      img: 'https://provportal.ru/assets/images/transport/mainPage/bus.webp',
      to: '/transport/public',
    },
    {
      title: 'Мотоциклы',
      img: 'https://provportal.ru/assets/images/transport/mainPage/moto.webp',
      to: '/transport/moto',
    },
  ];

  return (
    <div className='container'>
      <Header />
      <main>
        <Banner path='assets/images/other/house.png' title='Автомобили' />

        <div className={styles.transportGrid}>
          {categories.map((category) => (
            <Link to={category.to} key={category.title} className={styles.categoryCard}>
              <div className={styles.imgWrapper}>
                <img
                  src={category.img || '/placeholder.svg'}
                  alt={category.title}
                  className={styles.image}
                />
              </div>
              <h2>{category.title}</h2>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
