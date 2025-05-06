import { Footer } from '@components/Footer';
import { AdminNavigationGrid } from 'src/modules/AdminPanel/AdminNavigationGrid/components/AdminNavigationGrid';
import { Header } from '@components/Header';
import { Banner } from '@components/Banner';

export const AdminListPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <main>
          <Banner path='assets/images/other/bank.jpg' title='Админка' />
          <AdminNavigationGrid />
        </main>
      </div>
      <Footer />
    </>
  );
};
