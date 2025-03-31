import { Header } from '@components/Header';
import { JobInfo } from '../../modules/JobInfo';
import { Footer } from '@components/Footer';

export const JobInfoPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <JobInfo />
        </div>
      </main>
      <Footer />
    </>
  );
};
