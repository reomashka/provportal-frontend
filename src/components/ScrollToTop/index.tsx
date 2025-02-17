import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.scss';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для плавного скролла до верха страницы
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    localStorage.setItem('scrollY', '0');
  };
  // Отслеживаем скролл страницы, чтобы показывать или скрывать кнопку
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`${styles.scroll_to_top} ${isVisible ? styles.visible : ''}`} // Используем styles.visible
      onClick={scrollToTop}
    >
      ↑
    </div>
  );
};
