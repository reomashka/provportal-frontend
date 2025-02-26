import styles from './TransportInsurance.module.scss';

export const TransportInsurance = () => {
  return (
    <div className={styles.textCenter}>
      <h2 className={styles.title}>Страхование</h2>

      <div className={styles.card}>
        <div>
          <div>
            <ul className={styles.listUnstyled}>
              <table className={`${styles.table} ${styles.tableHover} ${styles.insuranceTable}`}>
                <thead>
                  <tr>
                    <th className='td1'>
                      <b>Вид страхования</b>
                    </th>
                    <th className='td2'>
                      <b>Стоимость пакета</b>
                    </th>
                    <th className='td3'>
                      <b>Стоимость ремонта (сток)</b>
                    </th>
                    <th className='td4'>
                      <b>Бонусы</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='td1' data-label='Вид страхования'>
                      Без страхования
                    </td>
                    <td className='td2' data-label='Стоимость пакета'>
                      -
                    </td>
                    <td className='td3' data-label='Стоимость ремонта (сток)'>
                      {/* <?php
                                  if ($autoData["noRepair"] == NULL) {
                                      echo "-";
                                  } else {
                                      echo number_format($autoData["noRepair"], 0, ' ', ' ') . " рублей";
                                  }
                              ?> */}
                    </td>
                    <td className='td4' data-label='Бонусы'>
                      Скидка не предоставляется
                    </td>
                  </tr>
                  <tr>
                    <td className='td1' data-label='Вид страхования'>
                      Лайт
                    </td>
                    <td className='td2' data-label='Стоимость пакета'>
                      {/* <?php
                                  if ($autoData["liteInsurance"] == NULL) {
                                      echo "-";
                                  } else {
                                      echo number_format($autoData["liteInsurance"], 0, ' ', ' ') . " рублей";
                                  }
                              ?> */}
                    </td>
                    <td className='td3' data-label='Стоимость ремонта (сток)'>
                      {/* <?php
                                  if ($autoData["liteRepair"] == NULL) {
                                      echo "-";
                                  } else {
                                      echo number_format($autoData["liteRepair"], 0, ' ', ' ') . " рублей";
                                  }
                              ?> */}
                    </td>
                    <td className='td4' data-label='Бонусы'>
                      Скидка 30% на любой ремонт <br />1 бесплатный полный ремонт
                    </td>
                  </tr>

                  <tr>
                    <td className='td1' data-label='Вид страхования'>
                      Стандарт
                    </td>
                    <td className='td2' data-label='Стоимость пакета'>
                      INT Рублей
                    </td>
                    <td className='td3' data-label='Стоимость ремонта (сток)'>
                      INT Рублей
                    </td>
                    <td className='td4' data-label='Бонусы'>
                      Скидка 45% на любой ремонт
                      <br />1 бесплатный полный ремонт
                      <br />7 бесплатных ремонтов до 15%
                    </td>
                  </tr>

                  <tr>
                    <td className='td1' data-label='Вид страхования'>
                      Эксклюзив
                    </td>
                    <td className='td2' data-label='Стоимость пакета'>
                      INT Рублей
                    </td>
                    <td className='td3' data-label='Стоимость ремонта (сток)'>
                      INT Рублей
                    </td>
                    <td className='td4' data-label='Бонусы'>
                      Скидка 65% на любой ремонт
                      <br />7 бесплатных полных ремонтов
                      <br />
                      12 бесплатных ремонтов до 30%
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
