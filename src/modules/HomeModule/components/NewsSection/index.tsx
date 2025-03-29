import styles from './NewsSection.module.scss';

export const NewsSection = () => {
  return (
    <section className={styles.newsSection}>
      <p className={styles.newsSection_title}>Последние новости и обновления</p>
      <div className={styles.newsSection_cardBlock}>
        <div className={styles.newsSection_cardBlock_card}>
          <div className={styles.cardImage}>
            <img src='https://provportal.ru/assets/images/updates/13.webp' alt='Обновление' />
            <div className={styles.cardAbs}>
              <p className={styles.cardTitle}>Новости</p>
              <p className={styles.cardSubtitle}>03.02.2025</p>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>
              <b>Telegram-канал Провинции преодолел отметку в 20.000 подписчиков! 🚀</b>
              <br />
              <br />
              Спасибо, что вы с нами, читаете, комментируете и поддерживаете. Ценим каждого из вас!
            </p>
          </div>
        </div>

        <div className={styles.newsSection_cardBlock_card}>
          <div className={styles.cardImage}>
            <img src='https://provportal.ru/assets/images/updates/13.webp' alt='Обновление' />
            <div className={styles.cardAbs}>
              <p className={styles.cardTitle}>Новости</p>
              <p className={styles.cardSubtitle}>03.02.2025</p>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>
              <b>Telegram-канал Провинции преодолел отметку в 20.000 подписчиков! 🚀</b>
              <br />
              <br />
              Спасибо, что вы с нами, читаете, комментируете и поддерживаете. Ценим каждого из вас!
            </p>
          </div>
        </div>

        <div className={styles.newsSection_cardBlock_card}>
          <div className={styles.cardImage}>
            <img src='https://provportal.ru/assets/images/updates/13.webp' alt='Обновление' />
            <div className={styles.cardAbs}>
              <p className={styles.cardTitle}>Новости</p>
              <p className={styles.cardSubtitle}>03.02.2025</p>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>
              <b>Telegram-канал Провинции преодолел отметку в 20.000 подписчиков! 🚀</b>
              <br />
              <br />
              Спасибо, что вы с нами, читаете, комментируете и поддерживаете. Ценим каждого из вас!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
