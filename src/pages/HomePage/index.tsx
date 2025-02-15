import React from 'react';
import { HomePageMetadata } from './HomePage.metadata';

import styles from './HomePage.module.scss';

import { HomePageModule } from '../../modules/HomePageModule';
import { Footer } from '@components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <HomePageMetadata />
      <HomePageModule />
      <Footer />
    </div>
  );
};
