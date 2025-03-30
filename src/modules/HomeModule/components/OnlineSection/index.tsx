import axios from 'axios';
import { motion } from 'framer-motion';

import styles from './Servers.module.scss';
import vkLogo from '@assets/homePage/section-gms-img/Vk-game.png';

import s1 from '@assets/homePage/section-gms-img/s1.png';
import s2 from '@assets/homePage/section-gms-img/s2.png';
import s3 from '@assets/homePage/section-gms-img/s3.png';
import s4 from '@assets/homePage/section-gms-img/s4.png';
import s5 from '@assets/homePage/section-gms-img/s5.png';
import s6 from '@assets/homePage/section-gms-img/s6.png';
import s7 from '@assets/homePage/section-gms-img/s7.png';
import { useEffect, useState } from 'react';
import OnlineSkeleton from '../OnlineSkeleton';

export const OnlineSection = () => {
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

  const [onlineData, setOnlineData] = useState<{ server: number; online: number; slots: number }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/online`);
        setOnlineData(data);
      } catch (error) {
        console.error('Ошибка загрузки данных по онлайну серверов:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.gameServices}>
      <p className={styles.gameServices_title}>Игровые серверы</p>

      <div className={styles.gameServices_block_card}>
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => <OnlineSkeleton key={index} />)
          : onlineData.map((server) => {
              const vkLink = serverVkLinks.find((s) => s.id === server.server)?.link;

              return (
                <motion.div
                  className={styles.transportCard}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: server.server * 0.1 }}
                >
                  <div className={styles.gameServices_card} key={server.server}>
                    <img
                      className={styles.gameServices_card_img}
                      src={serverLogos[server.server]}
                      alt='Server Image'
                    />
                    <div className={styles.gameServices_card_text_block}>
                      <p>{server.server} сервер</p>
                      <span>
                        Онлайн: {server.online} / {server.slots}
                      </span>
                    </div>
                    {vkLink && (
                      <a
                        href={`https://vk.com/${vkLink}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img src={vkLogo} width={40} height={40} alt='#' />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
      </div>
    </section>
  );
};
