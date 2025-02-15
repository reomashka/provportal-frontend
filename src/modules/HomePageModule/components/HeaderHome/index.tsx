import styles from './HeaderHome.module.scss';
import logoHome from '@assets/logos/Site-logo.svg';

export const HeaderHome = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.headerItem}>
          <div className={styles.headerItemLogo}>
            <a href='/home'>
              <img src={logoHome} alt='#' />
            </a>
          </div>
        </div>

        <div className={styles.headerItemM}>
          <a href='https://t.me/prov_portal' className={styles.vkButton} target='_blank'>
            <p>Примите участие в разработке новой версии сайта</p>
          </a>
        </div>
      </div>
    </header>
  );
};
