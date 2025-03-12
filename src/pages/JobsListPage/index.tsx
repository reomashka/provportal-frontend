import { Header } from '@components/Header';
import { Banner } from '@components/Banner';
import { JobsList } from 'src/modules/JobsList';
import { ScrollToTop } from '@components/ScrollToTop';
import { Footer } from '@components/Footer';

export const JobsListPage = () => {
  return (
    <>
      <Header />

      <main>
        <div className='container'>
          <Banner path={`assets/images/other/bank.jpg`} title='Работы' />
          <JobsList />
          {/* <SearchContainer /> */}
          <ScrollToTop />
        </div>
      </main>

      <Footer />
    </>
  );
};
