import React from 'react';
import { HomePageMetadata } from './HomePage.metadata';
import { HomeModule } from '../../modules/HomeModule';
import { Footer } from '@components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <HomePageMetadata />
      {/* Yandex.RTB R-A-14786500-1 */}
      <div id='yandex_rtb_R-A-14786500-1'></div>
      <script>
        {`
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              "blockId": "R-A-14786500-1",
              "renderTo": "yandex_rtb_R-A-14786500-1"
            })
          })
        `}
      </script>
      <HomeModule />
      <Footer />
    </div>
  );
};
