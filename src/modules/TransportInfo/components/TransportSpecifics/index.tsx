import styles from './TransportSpecifics.module.scss';

export const TransportSpecific = () => {
  return (
    <div className={styles.cardSpecifics}>
      <div className={styles.textCenter}>
        <h2 className={styles.title}>Характеристики</h2>
        <div className={styles.card}>
          <div>
            <div>
              <div className={styles.row}>
                <table className={`${styles.table} ${styles.tableHover}`}>
                  <thead>
                    <td className={styles.textLeft}>
                      <b>Характеристика</b>
                    </td>

                    <td className={styles.textRight}>
                      <b>Значение</b>
                    </td>
                  </thead>

                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <b className={styles.title}>Динамика автомобиля</b>
                      </td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Максимальная скорость</b>
                      </td>
                      <td className={styles.textRight}>INT км/час</td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Разгон до 100</b>
                      </td>
                      <td className={styles.textRight}>INT сек.</td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Разгон до MAX</b>
                      </td>
                      <td className={styles.textRight}>INT сек.</td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Привод</b>
                      </td>
                      <td className={styles.textRight}>Временно отсутствует</td>
                    </tr>

                    <tr>
                      <td colSpan={2}>
                        <b className={styles.title}>Кузов и салон</b>
                      </td>
                    </tr>

                    {/* TODO */}
                    <tr>
                      <td className={styles.textLeft}>
                        <b>Доступно к погрузке</b>
                      </td>
                      <td className={styles.textRight}>INT ед. груза</td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Кол-во мест</b>
                      </td>
                      <td className={styles.textRight}>INT места</td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Вместимость багажника</b>
                      </td>
                      <td className={styles.textRight}> INT сл.</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <b className={styles.title}>Топливные характеристики</b>
                      </td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Емкость топливного бака</b>
                      </td>
                      <td className={styles.textRight}>INT л.</td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Стоимость 1 литра топлива</b>
                      </td>
                      <td className={styles.textRight}>
                        <a>INT рублей/литр</a>
                      </td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Стоимость полного бака</b>
                      </td>
                      <td className={styles.textRight}>
                        <a>INT руб.</a>
                      </td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>Тип топлива</b>
                      </td>
                      <td className={styles.textRight}>
                        <a>INT</a>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={2}>
                        <b className={styles.title}>Особенности</b>
                      </td>
                    </tr>

                    <tr>
                      <td className={styles.textLeft}>
                        <b>ЕПП</b>
                      </td>
                      <td className={styles.textRight}>
                        <a>Boolean</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
