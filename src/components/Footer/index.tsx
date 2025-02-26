import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLinks}>
          <Link to='https://vk.com/provportal' className={`${styles.footerLink} + ${styles.vk}`}>
            Группа портала
          </Link>
          <Link
            to='https://t.me/prov_portal'
            className={`${styles.footerLink} + ${styles.telegram}`}
          >
            Телеграм канал
          </Link>
          <Link
            to='https://t.me/provportal_bot'
            className={`${styles.footerLink} + ${styles.team}`}
          >
            Тех поддержка
          </Link>
          <Link to='/about' className={`${styles.footerLink} + ${styles.vk}`}>
            О нас
          </Link>
        </div>
        <div className={styles.footerLogo}>
          <span>ProvPortal</span>
        </div>
      </div>
    </footer>
  );
};
