import { HeaderHome } from '../HeaderHome';
import { MainSection } from '../MainSection';
import { OnlineSection } from '../OnlineSection';

import { NewsSection } from '../NewsSection';

export const HomeModule = () => {
  return (
    <>
      <HeaderHome />
      <main>
        <MainSection />
        <OnlineSection />
        <NewsSection />
      </main>
    </>
  );
};
