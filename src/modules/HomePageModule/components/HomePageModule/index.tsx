import { HeaderHome } from '../HeaderHome';
import { MainSection } from '../MainSection';
import { ServersSection } from '../ServersSection';

import { NewsSection } from '../NewsSection';

export const HomePageModule = () => {
  return (
    <>
      <HeaderHome />
      <main>
        <MainSection />
        <ServersSection />
        <NewsSection />
      </main>
    </>
  );
};
