import React from 'react';
import { HomePageMetadata } from './HomePage.metadata';
import { HomeModule } from '../../modules/HomeModule';
import { Footer } from '@components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <HomePageMetadata />
      <HomeModule />
      <Footer />
    </div>
  );
};
