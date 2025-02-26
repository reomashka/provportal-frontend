import styles from './TransportStages.module.scss';

export const TransportStages = () => {
  return (
    <div className={styles.textCenter}>
      <h2 className={styles.title}>Стоимость пакетов тюнинга</h2>
      <div className={styles.card}>
        <div>
          <div>
            <ul className={styles.listUnstyled}>
              <table className={`${styles.table} ${styles.tableHover}`}>
                <thead>
                  <td>
                    <b>Название пакета</b>
                  </td>

                  <td>
                    <b>Стоимость пакета</b>
                  </td>
                </thead>

                <tbody>
                  <tr>
                    <td>Пакет тюнинга 1 (Базовый)</td>
                    <td>INT рублей</td>
                  </tr>
                  <tr>
                    <td>Пакет тюнинга 2 (скорость, баланс, управление)</td>
                    <td>INT рублей</td>
                  </tr>
                  <tr>
                    <td>Пакет тюнинга 3 (скорость, баланс, управление)</td>
                    <td>INT рублей</td>
                  </tr>
                  <tr>
                    <td>Пакет тюнинга 4 (скорость, баланс, управление)</td>
                    <td>INT рублей</td>
                  </tr>
                  <tr>
                    <td className='td11'>
                      <b className={styles.title}>Общая сумма пакетов тюнинга:</b>
                    </td>

                    <td>
                      <b className={styles.title}>INT рублей</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
