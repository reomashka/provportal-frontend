import React from 'react';
import { Header } from '@components/Header';
import { Banner } from '@components/Banner';
import { SortButtons } from '@components/SortButtons';
import { TransportList } from '../../modules/TransportList/components/TransportList';
import { Footer } from '@components/Footer';

import { TransportListPageMetadata } from './TransportListPage.metadata';

interface TransportTypeProps {
  transportType: 'moto' | 'passenger' | 'cargo' | 'public';
}

export const TransportListPage: React.FC<TransportTypeProps> = ({ transportType }) => {
  return (
    <div className='container'>
      <TransportListPageMetadata />
      <Header />
      <Banner path={`/assets/images/other/${transportType}.webp`} />
      <SortButtons />
      {/* <SearchContainer /> */}
      <TransportList transportType={transportType} />
      <Footer />
    </div>
  );
};
