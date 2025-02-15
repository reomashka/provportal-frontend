import styles from './Servers.module.scss';
import vkLogo from '@assets/homePage/section-gms-img/Vk-game.png';

import s1 from '@assets/homePage/section-gms-img/s1.png';
import s2 from '@assets/homePage/section-gms-img/s2.png';
import s3 from '@assets/homePage/section-gms-img/s3.png';
import s4 from '@assets/homePage/section-gms-img/s4.png';
import s5 from '@assets/homePage/section-gms-img/s5.png';
import s6 from '@assets/homePage/section-gms-img/s6.png';
import s7 from '@assets/homePage/section-gms-img/s7.png';

export const ServersSection = () => {
  const serverLogos: { [key: number]: string } = {
    1: s1,
    2: s2,
    3: s3,
    4: s4,
    5: s5,
    6: s6,
    7: s7,
  };

  const serverVkLinks = [
    { id: 1, link: 'province_one' },
    { id: 2, link: '2province' },
    { id: 3, link: 'provinceserver3' },
    { id: 4, link: 'provincefour' },
    { id: 5, link: 'province_rp5' },
    { id: 6, link: 'province6server' },
    { id: 7, link: 'provinceseven' },
  ];

  return (
    <section className={styles.gameServices}>
      <p className={styles.gameServices_title}>Игровые серверы</p>

      <div className={styles.gameServices_block_card}>
        {serverVkLinks.map((server) => (
          <div className={styles.gameServices_card} key={server.id}>
            <img
              className={styles.gameServices_card_img}
              src={serverLogos[server.id]}
              alt='Server Image'
            />
            <div className={styles.gameServices_card_text_block}>
              <p>{server.id} сервер</p>
              <span>Онлайн: 000 / 000</span>
            </div>
            <a href={`https://vk.com/${server.link}`} target='_blank'>
              <img src={vkLogo} width={40} height={40} alt='#' />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
