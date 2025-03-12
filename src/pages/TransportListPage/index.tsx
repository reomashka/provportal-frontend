import React from 'react';
import { Header } from '@components/Header';
import { Banner } from '@components/Banner';
import { SortButtons } from '@components/SortButtons';
import { TransportList } from '../../modules/TransportList/components/TransportList';
import { ScrollToTop } from '@components/ScrollToTop';
import { Footer } from '@components/Footer';
import TransportTypeProps from '@interfaces/TransportTypeProps.interface';

import { TransportListPageMetadata } from './TransportListPage.metadata';

const transportTypeMap: Record<TransportTypeProps['transportType'], string> = {
  moto: 'Мотоциклы',
  passenger: 'Легковой транспорт',
  cargo: 'Грузовой транспорт',
  public: 'Общественный транспорт',
  container: 'Транспорт из контейнеров',
  exclusive: 'Экслюзивный транспорт',
  fraction: 'Фракционный транспорт',
};

export const TransportListPage: React.FC<TransportTypeProps> = ({ transportType }) => {
  return (
    <>
      <TransportListPageMetadata />
      <Header />
      <main>
        <div className='container'>
          <Banner
            path={`/assets/images/other/${transportType}.webp`}
            title={transportTypeMap[transportType]}
          />
          <SortButtons />
          {/* <SearchContainer /> */}
          <TransportList transportType={transportType} />
          <ScrollToTop />
        </div>
      </main>

      <Footer />
    </>
  );
};
