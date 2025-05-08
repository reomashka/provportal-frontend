import { Footer } from '@components/Footer';
import { AdminNavigationGrid } from 'src/modules/AdminPanel/AdminNavigationGrid/components/index';
import { Header } from '@components/Header';
import { Banner } from '@components/Banner';

export const AdminNavigationGridPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Banner path='assets/images/other/bank.jpg' title='Админка' />
          <AdminNavigationGrid />
        </div>
      </main>

      <Footer />
    </>
  );
};
