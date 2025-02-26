import React from 'react';
import styles from './MiniInfo.module.scss';

import Transport from '@interfaces/Transport.interface';
interface MiniInfoProps {
  transportData: Transport | null;
}

export const MiniInfo: React.FC<MiniInfoProps> = ({ transportData }) => {
  return (
    <div className={styles.cardMiniInfo}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2 className={`${styles.textCenter} ${styles.title}`}>{transportData?.nameAuto}</h2>
          <h5 className={styles.textCenter}>Описание автомобиля</h5>

          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.textLeft}>
                  <b>Автосалон:</b>
                </td>
                <td className={styles.textLeft}>{transportData?.showroom}</td>
              </tr>

              <tr>
                <td className={styles.textLeft}>
                  <b>Стоимость в автосалоне:</b>
                </td>
                <td className={styles.textLeft}>
                  {new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
                    transportData?.price ?? 0
                  )}{' '}
                  рублей
                </td>
              </tr>

              <tr>
                <td className={styles.textLeft}>
                  <b>Актуальная гос цена:</b>
                </td>
                <td className={styles.textLeft}>
                  {new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
                    (transportData?.price ?? 0) * 0.9
                  )}{' '}
                  рублей
                </td>
              </tr>

              <tr>
                <td className={styles.textLeft}>
                  <b>Старая гос цена:</b>
                </td>
                <td className={styles.textLeft}> Временно отсутствует </td>
              </tr>

              <tr>
                <td className={styles.textLeft}>
                  <b>Тип кузова:</b>
                </td>
                <td className={styles.textLeft}>{transportData?.typeBody}</td>
              </tr>

              <tr>
                <td className={styles.textLeft}>
                  <b>Доступно к погрузке:</b>
                </td>
                <td className={styles.textLeft}>INT ед. груза</td>
              </tr>

              <tr>
                <td className={styles.textLeft}>
                  <b>Страна-производитель</b>
                </td>
                <td className={styles.textLeft}>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
