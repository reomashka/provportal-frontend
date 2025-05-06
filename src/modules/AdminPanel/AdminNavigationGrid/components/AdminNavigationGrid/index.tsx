import type React from 'react';
import { Car } from 'lucide-react';
import './AdminNavigationGrid.scss';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ icon, title, url }) => {
  return (
    <div className='navigation-item'>
      <Link to={url} className='navigation-link'>
        <div className='icon-container'>{icon}</div>
        <div className='title'>{title}</div>
      </Link>
    </div>
  );
};

export const AdminNavigationGrid: React.FC = () => {
  const navigationItems = [
    {
      icon: <Car className='icon' />,
      title: 'БД Транспорт',
      url: '/adm/transport',
    },
  ];

  return (
    <div className='navigation-grid'>
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} icon={item.icon} title={item.title} url={item.url} />
      ))}
    </div>
  );
};
