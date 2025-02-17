import { useState, useEffect } from 'react';
import './style.css';

import { useParams } from 'react-router-dom';

import Transport from '@interfaces/Transport.interface';

export const TransportInfo = () => {
  const [selectedSlide, setSelectedSlide] = useState('frontLeft');
  const [transportData, setTransportData] = useState<Transport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      setIsLoading(true);
      try {
        const transportDataResponse = await fetch(
          `http://localhost:4444/api/transport/get-one/${id}`
        );
        if (!transportDataResponse.ok) {
          throw new Error('Ошибка сервера: ' + transportDataResponse.status);
        }

        const transportData = await transportDataResponse.json();
        setTransportData(transportData);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const images: Record<string, string> = {
    frontLeft: `https:/provportal.ru/assets/images/transport/frontLeft/${transportData?.uniqueName}.png`,
    backRight: `https:/provportal.ru/assets/images/transport/backRight/${transportData?.uniqueName}.png`,
    side: `https:/provportal.ru/assets/images/transport/side/${transportData?.uniqueName}.png`,
    front: `https:/provportal.ru/assets/images/transport/front/${transportData?.uniqueName}.png`,
    back: `https:/provportal.ru/assets/images/transport/back/${transportData?.uniqueName}.png`,
    '1rowAuto': `https:/provportal.ru/assets/images/transport/1rowAuto/${transportData?.uniqueName}.png`,
    '2rowAuto': `https:/provportal.ru/assets/images/transport/2rowAuto/${transportData?.uniqueName}.png`,
    underhood: `https:/provportal.ru/assets/images/transport/underhood/${transportData?.uniqueName}.png`,
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <ul className='carousel__thumbnails'>
              {Object.keys(images).map((key) => (
                <label key={key} style={{ marginBottom: '10px', cursor: 'pointer' }}>
                  <img src={images[key]} alt={key} onClick={() => setSelectedSlide(key)} />
                </label>
              ))}
            </ul>
          </div>

          <div className='col'>
            <div className='carousel1'>
              <ul className='carousel__slides'>
                {Object.keys(images).map((key) => (
                  <li
                    key={key}
                    className={`carousel__slide ${selectedSlide === key ? 'active' : ''}`}
                  >
                    <figure>
                      <img src={images[key]} alt={key} />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-center names'>{transportData?.nameAuto}</h2>
                <h5 className='text-center'>Описание автомобиля</h5>

                <table className='table'>
                  <tbody>
                    <tr>
                      <td align='left'>
                        <b>Автосалон:</b>
                      </td>
                      <td align='left'>{transportData?.showroom}</td>
                    </tr>

                    <tr>
                      <td align='left'>
                        <b>Стоимость в автосалоне:</b>
                      </td>
                      <td align='left'>
                        {new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
                          transportData?.price ?? 0
                        )}{' '}
                        рублей
                      </td>
                    </tr>

                    <tr>
                      <td className='left'>
                        <b>Актуальная гос цена:</b>
                      </td>
                      <td align='left'>
                        {new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(
                          (transportData?.price ?? 0) * 0.9
                        )}{' '}
                        рублей
                      </td>
                    </tr>

                    <tr>
                      <td className='left'>
                        <b>Старая гос цена:</b>
                      </td>
                      <td align='left'> Временно отсутствует </td>
                    </tr>

                    <tr>
                      <td align='left'>
                        <b>Тип кузова:</b>
                      </td>
                      <td align='left'>{transportData?.typeBody}</td>
                    </tr>

                    <tr>
                      <td align='left'>
                        <b>Доступно к погрузке:</b>
                      </td>
                      <td align='left'>INT ед. груза</td>
                    </tr>

                    <tr>
                      <td align='left'>
                        <b>Страна-производитель</b>
                      </td>
                      <td align='left'>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4'>
              <div className='text-center'>
                <h2 className='names'>Характеристики</h2>
                <div className='card'>
                  <div>
                    <div className='contacts-menu'>
                      <div className='row'>
                        <table className='table table-hover'>
                          <thead>
                            <td className='td11' align='left'>
                              <b>Характеристика</b>
                            </td>

                            <td align='right'>
                              <b>Значение</b>
                            </td>
                          </thead>

                          <tbody>
                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>Динамика автомобиля</b>
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Максимальная скорость</b>
                              </td>
                              <td align='right'>INT км/час</td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Разгон до 100</b>
                              </td>
                              <td className='td1' align='right'>
                                INT сек.
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Разгон до MAX</b>
                              </td>
                              <td width='75%' align='right'>
                                INT сек.
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Привод</b>
                              </td>
                              <td width='75%' align='right'>
                                Временно отсутствует
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>Кузов и салон</b>
                              </td>
                            </tr>

                            {/* TODO */}
                            <tr>
                              <td className='td11' align='left'>
                                <b>Доступно к погрузке</b>
                              </td>
                              <td width='75%' align='right'>
                                INT ед. груза
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Кол-во мест</b>
                              </td>
                              <td width='75%' align='right'>
                                INT места
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Вместимость багажника</b>
                              </td>
                              <td width='75%' align='right'>
                                {' '}
                                INT сл.
                              </td>
                            </tr>
                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>Топливные характеристики</b>
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Емкость топливного бака</b>
                              </td>
                              <td width='75%' align='right'>
                                INT л.
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Стоимость 1 литра топлива</b>
                              </td>
                              <td width='75%' align='right'>
                                <a>INT рублей/литр</a>
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Стоимость полного бака</b>
                              </td>
                              <td width='75%' align='right'>
                                <a>INT руб.</a>
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>Тип топлива</b>
                              </td>
                              <td width='75%' align='right'>
                                <a>INT</a>
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>Особенности</b>
                              </td>
                            </tr>

                            <tr>
                              <td className='td11' align='left'>
                                <b>ЕПП</b>
                              </td>
                              <td width='75%' align='right'>
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

            <div className='col-lg-8'>
              <div className='text-center'>
                <h2 className='names'>Страхование</h2>

                <div className='card'>
                  <div>
                    <div className='contacts-menu'>
                      <ul className='list-unstyled'>
                        <table className='insurance-table table table-hover'>
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

              <div className='text-center'>
                <h2 className='names'>Стоимость пакетов тюнинга</h2>
                <div className='card dark-card-admin'>
                  <div>
                    <div className='contacts-menu'>
                      <ul className='list-unstyled'>
                        <table className='table table-hover'>
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
                            ";
                            <tr>
                              <td className='td11'>
                                <b className='names'>Общая сумма пакетов тюнинга:</b>
                              </td>

                              <td>
                                <b className='names'>INT рублей</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <h2 className='names'>Внешний тюнинг</h2>

                <div className='card dark-card-admin'>
                  <div>
                    <div className='contacts-menu'>
                      <ul className='list-unstyled'>
                        <table className='table table-hover'>
                          <thead>
                            <td className='td1'>
                              <b>Название элемента</b>
                            </td>

                            <td>
                              <b>Доступность</b>
                            </td>
                          </thead>

                          <tbody>
                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>Стайлинг</b>
                              </td>
                            </tr>

                            <tr>
                              <td className='td1'>
                                <b>Первый цвет</b>
                              </td>
                              <td></td>
                            </tr>

                            <tr>
                              <td className='td1'>
                                <b>Второй цвет</b>
                              </td>

                              <td>INT</td>
                            </tr>

                            <tr>
                              <td className='td1'>
                                <b>Третий цвет</b>
                              </td>
                              <td>INT</td>
                            </tr>

                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>⠀⠀⠀⠀</b>
                              </td>
                            </tr>

                            <tr>
                              <td className='td1'>
                                <b>Покраска салона</b>
                              </td>

                              <td>INT</td>
                            </tr>

                            <tr>
                              <td className='td1'>
                                <b>Антихром</b>
                              </td>

                              <td>INT</td>
                            </tr>

                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>Колеса</b>
                              </td>
                            </tr>

                            <tr>
                              <td className='td1'>
                                <b>Доступные диски</b>
                              </td>

                              <td>INT</td>
                            </tr>

                            <tr>
                              <td className='td11' align='center'>
                                <b className='names'>Разное</b>
                              </td>
                            </tr>

                            <tr>
                              <td className='td1'>
                                <b>Аксессуары</b>
                              </td>

                              <td>INT</td>
                            </tr>
                          </tbody>
                        </table>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
