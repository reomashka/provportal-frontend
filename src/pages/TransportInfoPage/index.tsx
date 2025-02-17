import { TransportInfoPageMetadata } from './TransportInfoPage.metadata';
import { Header } from '@components/Header';
import { TransportInfo } from '../../modules/TransportInfo';
import { Footer } from '@components/Footer';

export const TransportInfoPage = () => {
  return (
    <div className='container'>
      <TransportInfoPageMetadata />
      <Header />
      <main>
        <TransportInfo />
      </main>
      <Footer />
    </div>
  );
};
