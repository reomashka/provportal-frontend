import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { AdmJobsCRUD } from 'src/modules/AdmJobsCRUD';

export const JobsCRUD = () => {
  return (
    <>
      <Header />
      <AdmJobsCRUD />
      <Footer />
    </>
  );
};
