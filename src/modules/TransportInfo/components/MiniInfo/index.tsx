import React from 'react';
import styles from './MiniInfo.module.scss';

import Transport from '@interfaces/Transport.interface';
interface MiniInfoProps {
  transportData: Transport | null;
}

export const MiniInfo: React.FC<MiniInfoProps> = ({ transportData }) => {
  const tableData = [
    {
      label: 'Автосалон:',
      value: `${transportData?.showroom || '-'} (${transportData?.city || '-'})`,
    },
    {
      label: 'Стоимость в автосалоне:',
      value: new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
        transportData?.price ?? 0
      ),
    },
    {
      label: 'Актуальная гос цена:',
      value: new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
        (transportData?.price ?? 0) * 0.9
      ),
    },
    { label: 'Старая гос цена:', value: 'Временно отсутствует' },
    { label: 'Тип кузова:', value: transportData?.typeBody || '-' },
    { label: 'Доступно к погрузке:', value: 'INT ед. груза' },
    { label: 'Страна-производитель:', value: '-' },
  ];

  return (
    <div className={styles.cardMiniInfo}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2 className={`${styles.textCenter} ${styles.title}`}>
            {transportData?.nameAuto || 'Название автомобиля'}
          </h2>
          <h5 className={styles.textCenter}>Описание автомобиля</h5>

          <table className={styles.table}>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className={styles.textLeft}>
                    <b>{row.label}</b>
                  </td>
                  <td className={styles.textLeft}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
