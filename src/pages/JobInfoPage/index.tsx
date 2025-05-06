import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Header } from '@components/Header';
import { Banner } from '@components/Banner';
import { ScrollToTop } from '@components/ScrollToTop';
import { Footer } from '@components/Footer';
import { Job } from '@interfaces/Job.interface';
import styles from './JobInfoPage.module.scss';
import {
  CircleFadingArrowUp,
  MapPin,
  Info,
  ArrowLeft,
  Award,
  Timer,
  Coins,
  BarChart,
  ChevronDown,
} from 'lucide-react';

export const JobInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedHours, setSelectedHours] = useState(1);
  const [jobStats, setJobStats] = useState({
    earnings: '',
    unitsExp: '',
  });

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const mockJob: Job = {
        id: Number(id) || 1,
        name: `Работа водителем трамвая #${id}`,
        lvl: 3,
        uniqueName: `job-${id}`,
        city: 'Приволжск, Невский',
        about: 'Работа в транспортной сфере с высокой заработной платой и гибким графиком',
        htmlDescriptionCode: `
        <p>Работа в транспортной компании предлагает разнообразные возможности для карьерного роста и развития. Наша компания является лидером в транспортной отрасли, обеспечивая надежные и комфортные перевозки для жителей города.</p>
        
        <h3>Обязанности:</h3>
        <ul>
          <li>Перевозка пассажиров по городским маршрутам</li>
          <li>Соблюдение графика движения и расписания</li>
          <li>Поддержание чистоты и порядка в транспортном средстве</li>
          <li>Контроль билетов и обслуживание пассажиров</li>
          <li>Ведение необходимой документации</li>
        </ul>
        
        <h3>Требования:</h3>
        <ul>
          <li>Образование не ниже среднего</li>
          <li>Опыт вождения от 1 года</li>
          <li>Знание правил дорожного движения</li>
          <li>Ответственность и пунктуальность</li>
          <li>Коммуникабельность и стрессоустойчивость</li>
        </ul>
        
        <h3>Преимущества:</h3>
        <ul>
          <li>Стабильный доход с возможностью роста</li>
          <li>Официальное трудоустройство</li>
          <li>Полный социальный пакет</li>
          <li>Гибкий график работы</li>
          <li>Возможность карьерного роста</li>
          <li>Корпоративное обучение и повышение квалификации</li>
        </ul>`,
        settings: 1,
        duration: '1 час',
        earnings: '11 260 ₽',
        unitsExp: '134/160',
      };

      setJob(mockJob);
      setSelectedLevel(1);
      setSelectedHours(1);
      setJobStats({
        earnings: mockJob.earnings || '0 ₽',
        unitsExp: mockJob.unitsExp || '0/0',
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (job) {
      // Calculate new values based on selected level and hours
      const baseEarnings = 11260; // Base value extracted from original job.earnings
      const baseUnits = 134; // Base value extracted from original job.unitsExp
      const baseExp = 160; // Base value extracted from original job.unitsExp

      // Increase earnings and exp based on level (multiplier increases with level)
      const earningsMultiplier = 1 + selectedLevel * 0.15;
      const unitsMultiplier = 1 + selectedLevel * 0.1;
      const expMultiplier = 1 + selectedLevel * 0.08;

      // Multiply by hours
      const hoursMultiplier = selectedHours;

      const newEarnings = Math.round(baseEarnings * earningsMultiplier * hoursMultiplier);
      const newUnits = Math.round(baseUnits * unitsMultiplier * hoursMultiplier);
      const newExp = Math.round(baseExp * expMultiplier * hoursMultiplier);

      setJobStats({
        earnings: `${newEarnings.toLocaleString('ru-RU')} ₽`,
        unitsExp: `${newUnits}/${newExp}`,
      });
    }
  }, [selectedLevel, selectedHours, job]);

  useEffect(() => {
    const savedScrollY = localStorage.getItem('scrollY');
    if (savedScrollY) {
      window.scrollTo(0, 0);
      localStorage.removeItem('scrollY');
    }
  }, []);

  // Generate arrays for levels 1-30 and hours 1-30
  const levels = Array.from({ length: 30 }, (_, i) => i + 1);
  const hours = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <>
      <Header />

      <main>
        <div className='container'>
          <Banner path={`/assets/images/other/bank.jpg`} title={job?.name || 'Просмотр работы'} />

          <div className={styles.jobInfoContainer}>
            <div className={styles.backLink}>
              <Link to='/jobs'>
                <ArrowLeft size={18} />
                <span>Вернуться к списку работ</span>
              </Link>
            </div>

            {isLoading ? (
              <div className={styles.loading}>
                <div className={styles.loadingIcon}></div>
                Загрузка информации о работе...
              </div>
            ) : job ? (
              <div className={styles.jobDetails}>
                <div className={styles.jobHeader}>
                  <h1 className={styles.jobTitle}>{job.name}</h1>
                  <div className={styles.jobLevel}>
                    <CircleFadingArrowUp className={styles.icon} />
                    <span>{job.lvl} уровень</span>
                  </div>
                </div>

                <div className={styles.jobMeta}>
                  <div className={styles.metaItem}>
                    <Info className={styles.icon} strokeWidth={1.5} />
                    <span>{job.about}</span>
                  </div>
                </div>

                <div className={styles.jobStats}>
                  <div className={styles.statItem}>
                    <MapPin className={styles.statIcon} />
                    <div className={styles.statContent}>
                      <div className={styles.statValue}>{job.city}</div>
                      <div className={styles.statLabel}>Город/ПГТ работы</div>
                    </div>
                  </div>

                  {/* <div className={styles.statItem}>
                    <Clock className={styles.statIcon} />
                    <div className={styles.statContent}>
                      <div className={styles.statValue}>5/2</div>
                      <div className={styles.statLabel}>График работы</div>
                    </div>
                  </div> */}

                  <div className={styles.statItem}>
                    <Award className={styles.statIcon} />
                    <div className={styles.statContent}>
                      <div className={styles.statValue}>{job.lvl}+ lvl</div>
                      <div className={styles.statLabel}>Уровень персонажа</div>
                    </div>
                  </div>

                  {/* <div className={styles.statItem}>
                    <PanelRightOpen className={styles.statIcon} />
                    <div className={styles.statContent}>
                      <div className={styles.statValue}>Полная</div>
                      <div className={styles.statLabel}>Занятость</div>
                    </div>
                  </div> */}
                </div>

                <div className={styles.jobImageContainer}>
                  <img
                    src={`https://provportal.ru/assets/images/jobs/tram.webp`}
                    alt={job.name}
                    className={styles.jobImage}
                  />
                </div>

                <div className={styles.jobDescription}>
                  <h2>Описание работы</h2>
                  <div
                    className={styles.descriptionContent}
                    dangerouslySetInnerHTML={{
                      __html: job.htmlDescriptionCode || '<p>Описание отсутствует</p>',
                    }}
                  />
                </div>

                <div className={styles.jobDetailsTable}>
                  <h2>Детали работы</h2>

                  <div className={styles.selectorsContainer}>
                    <div className={styles.levelSelector}>
                      <div className={styles.levelSelectorLabel}>
                        <CircleFadingArrowUp size={18} />
                        <span>Уровень:</span>
                      </div>
                      <div className={styles.selectWrapper}>
                        <select
                          value={selectedLevel}
                          onChange={(e) => setSelectedLevel(Number(e.target.value))}
                          className={styles.levelSelect}
                        >
                          {levels.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className={styles.selectArrow} />
                      </div>
                    </div>

                    <div className={styles.levelSelector}>
                      <div className={styles.levelSelectorLabel}>
                        <Timer size={18} />
                        <span>Часы:</span>
                      </div>
                      <div className={styles.selectWrapper}>
                        <select
                          value={selectedHours}
                          onChange={(e) => setSelectedHours(Number(e.target.value))}
                          className={styles.levelSelect}
                        >
                          {hours.map((hour) => (
                            <option key={hour} value={hour}>
                              {hour}{' '}
                              {hour === 1 ? 'час' : hour >= 2 && hour <= 4 ? 'часа' : 'часов'}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className={styles.selectArrow} />
                      </div>
                    </div>
                  </div>

                  <div className={styles.jobTable}>
                    <div className={styles.tableRow}>
                      <div className={styles.tableCell}>
                        <Timer size={20} className={styles.tableIcon} />
                        <span className={styles.tableName}>Длительность:</span>
                      </div>
                      <div className={styles.tableValue}>
                        {selectedHours}{' '}
                        {selectedHours === 1
                          ? 'час'
                          : selectedHours >= 2 && selectedHours <= 4
                          ? 'часа'
                          : 'часов'}
                      </div>
                    </div>
                    <div className={styles.tableRow}>
                      <div className={styles.tableCell}>
                        <Coins size={20} className={styles.tableIcon} />
                        <span className={styles.tableName}>Заработок:</span>
                      </div>
                      <div className={styles.tableValue}>{jobStats.earnings}</div>
                    </div>
                    <div className={styles.tableRow}>
                      <div className={styles.tableCell}>
                        <BarChart size={20} className={styles.tableIcon} />
                        <span className={styles.tableName}>Единицы / опыт:</span>
                      </div>
                      <div className={styles.tableValue}>{jobStats.unitsExp}</div>
                    </div>
                  </div>
                </div>

                <div className={styles.applicationSection}>
                  <h2>Как устроиться на работу</h2>
                  <div className={styles.applicationSteps}>
                    <p>Чтобы устроиться на эту работу, вам необходимо:</p>
                    <ol>
                      <li>Достичь {job.lvl} уровня персонажа</li>
                      <li>Находиться в городе {job.city}</li>
                      <li>Обратиться в центр занятости города</li>
                      <li>Пройти собеседование с работодателем</li>
                      <li>Подписать трудовой договор при успешном прохождении всех этапов</li>
                    </ol>

                    <div className={styles.additionalInfo}>
                      <p>При устройстве на работу вы получите:</p>
                      <ul>
                        <li>Форменную одежду</li>
                        <li>Необходимые инструменты и оборудование</li>
                        <li>Базовое обучение</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.error}>
                Информация о работе не найдена
                <p className={styles.redirectMessage}>
                  <Link to='/jobs'>Вернуться к списку работ</Link>
                </p>
              </div>
            )}
          </div>

          <ScrollToTop />
        </div>
      </main>

      <Footer />
    </>
  );
};
