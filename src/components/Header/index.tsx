import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { Flame } from 'lucide-react';

import logo from '@assets/logos/mainLogo.svg';

export const Header = () => {
	return (
		<header>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link to="/home">
						<img src={logo} alt="Logo"></img>
					</Link>
				</div>
				<nav>
					<ul className={styles.navList}>
						<li>
							<Link to="/home">Домой</Link>
						</li>
						<li>
							<Link to="/adm">Админка</Link>
						</li>
						<li className={styles.dropdown}>
							<Link to="#">
								Транспорт <span className={styles.arrow}>&#9660;</span>
							</Link>
							<ul className={styles.dropdownMenu}>
								<li>
									<Link to="/transport/passenger">Легковой</Link>
								</li>
								<li>
									<Link to="/transport/cargo">Грузовой</Link>
								</li>
								<li>
									<Link to="/transport/public">Общественный</Link>
								</li>
								<li>
									<Link to="/transport/moto">Мотоциклы</Link>
								</li>
								<li>
									<Link to="/transport/container">
										Контейнерный (New)
										<Flame />
									</Link>
								</li>
								<li>
									<Link to="/transport/exclusive">
										Экслюзивный (New)
										<Flame />
									</Link>
								</li>
								{/* <li>
                  <Link to='/transport/exc'>Экслюзивный</Link>
                </li> */}
							</ul>
						</li>

						{/* <li className='dropdown_new'>
              <Link to='#'>
                Работа с БД<span className='arrow_new'>&#9660;</span>
              </Link>
              <ul className='dropdown-menu_new'>
                <li>
                  <Link to='/adm/crud'>Основная информация (авто)</Link>
                </li>
                <li>
                  <Link to='/adm/extra_info'>Доп. информация (авто)</Link>
                </li>
              </ul>
            </li> */}

						<li className={styles.dropdown}>
							<Link to="#">
								Системы <span className={styles.arrow}>&#9660;</span>
							</Link>
							<ul className={styles.dropdownMenu}>
								<li>
									<Link to="/systems/bank">Банк</Link>
								</li>
								<li>
									<Link to="/systems/map">Карта</Link>
								</li>
								<li>
									<Link to="/fractions">Фракции</Link>
								</li>
								<li>
									<Link to="/systems">Игровые системы</Link>
								</li>
								<li>
									<Link to="/404">Команды/Бинды</Link>
								</li>
								<li>
									<Link to="/404">Контейнеры</Link>
								</li>
								<li>
									<Link to="/404">Скины</Link>
								</li>
								<li>
									<Link to="/404">Права/Лицензии</Link>
								</li>
								<li>
									<Link to="/404">ОПГ</Link>
								</li>
								<li>
									<Link to="/404">Реф. система</Link>
								</li>
								<li>
									<Link to="/404">Бизнесы</Link>
								</li>
								{/* <li className={styles.dropdown}>
                  <Link to='#'>
                    Недвижимость<span className={styles.arrow}>&#9660;</span>
                  </Link>
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to='/404'>·⠀Квартира</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀Дом</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀Гараж</Link>
                    </li>
                  </ul>
                </li> */}
								<li>
									<Link to="/404">ОПГ</Link>
								</li>
								{/* <li className={styles.dropdown}>
                  <Link to='#'>
                    Серверы<span className={styles.arrow}>&#9660;</span>
                  </Link>
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to='/404'>·⠀1⠀сервер</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀2⠀сервер</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀3⠀сервер</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀4⠀сервер</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀5⠀сервер</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀6⠀сервер</Link>
                    </li>
                    <li>
                      <Link to='/404'>·⠀7⠀сервер</Link>
                    </li>
                  </ul>
                </li> */}
								<li>
									<Link to="/404">Организации</Link>
								</li>
								<li>
									<Link to="/404">Развлечения</Link>
								</li>
								<li>
									<Link to="/404">Радары</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/jobs">Работы</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
