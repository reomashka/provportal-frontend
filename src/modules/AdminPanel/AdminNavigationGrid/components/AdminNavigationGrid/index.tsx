import type React from 'react';
import { BriefcaseBusiness, Car, RefreshCw, Users } from 'lucide-react';
import styles from './AdminNavigationGrid.module.scss';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ icon, title, url }) => {
  return (
    <Link to={url}>
      <div className={styles.navigationItem}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
};

export const AdminNavigationGrid: React.FC = () => {
  const navigationItems = [
    {
      icon: <Car className={styles.icon} />,
      title: 'БД Транспорт',
      url: '/adm/transport',
    },
    {
      icon: <BriefcaseBusiness className={styles.icon} />,
      title: 'БД Работы',
      url: '/adm/jobs',
    },
    {
      icon: <Users className={styles.icon} />,
      title: 'БД Пользователи',
      url: '/adm/users',
    },
    {
      icon: <RefreshCw className={styles.icon} />,
      title: 'Добавить обновление',
      url: '/adm/update',
    },
  ];

  return (
    <div className={styles.navigationGrid}>
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} icon={item.icon} title={item.title} url={item.url} />
      ))}
    </div>
  );
};
