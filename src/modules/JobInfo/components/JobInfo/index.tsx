import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { ScrollToTop } from '@components/ScrollToTop';

import { City, Job } from '@interfaces/Job.interface';
import styles from './JobInfo.module.scss';
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
import { useQuery } from '@tanstack/react-query';
import { getCurrentJob } from '@/api/jobs/getCurrentJob';
import { CitiesJobLabels } from '@/constants/jobLabels';
import { levelCoefficients } from '@/constants/levelCoefficients';

export const JobInfo = () => {
	const { id, city } = useParams<{ id: string; city: string }>();
	const [selectedLevel, setSelectedLevel] = useState(1);
	const [selectedHours, setSelectedHours] = useState(1);

	const { data: job, isLoading } = useQuery<Job>({
		queryKey: ['jobs', id, city],
		queryFn: () => getCurrentJob(Number(id)),
	});

	const levels = Array.from({ length: 30 }, (_, i) => i + 1);
	const hours = Array.from({ length: 30 }, (_, i) => i + 1);

	let salary = 0;
	// let salaryPerMinute = 0;
	// let salaryPerHour = 0;
	// let salaryPer2Hour = 0;
	// let salaryPerSecond = 0;
	// let stops = 0;
	// let expJobs = 0;
	// let exp1Hour = 0;

	if (job) {
		const cityKey = (city || '').toUpperCase() as keyof typeof City;

		const currentSalary = job.salaries.find((s) => s.city === City[cityKey]);

		if (!currentSalary) return null;

		salary = Math.floor(
			(currentSalary.amount / 100) *
				levelCoefficients[selectedLevel as keyof typeof levelCoefficients],
		);
		// const salaryPerMinute = Math.floor(salary / job.salaries[0].time);
		// const salaryPerHour = Math.floor(salaryPerMinute * 60);
		// const salaryPer2Hour = Math.floor(salaryPerHour * 2);
		// const salaryPerSecond = Math.floor(job.salaries[0].time * 60);
		// const stops = Math.floor(60 / job.salaries[0].time);
		// const expJobs = Math.floor(job.salaries[0].exp * stops);

		// const exp1Hour = stops * job.salaries[0].exp;
	}

	const cities = job?.salaries.map((s) => s.city);
	console.log(cities);
	const navigate = useNavigate();

	return (
		<>
			<div className={styles.jobInfoContainer}>
				<div className={styles.backLink}>
					<Link to="/jobs">
						<ArrowLeft size={18} />
						<span>Вернуться к списку работ</span>
					</Link>

					<div className={styles.cityButtons}>
						{job?.salaries.map((s) => {
							const isActive = s.city.toLowerCase() === city?.toLowerCase();

							return (
								<button
									key={s.city}
									onClick={() => navigate(`/jobs/${id}/${s.city.toLowerCase()}`)}
									className={`${styles.cityButton} ${isActive ? styles.active : ''}`}>
									{CitiesJobLabels[s.city]}
								</button>
							);
						})}
					</div>
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
									<div className={styles.statValue}>
										{job.salaries?.map((salary) => CitiesJobLabels[salary.city]).join(', ')}
									</div>
									<div className={styles.statLabel}>Город/ПГТ где можно устроиться</div>
								</div>
							</div>

							<div className={styles.statItem}>
								<Award className={styles.statIcon} />
								<div className={styles.statContent}>
									<div className={styles.statValue}>{job.lvl}+ lvl</div>
									<div className={styles.statLabel}>Уровень персонажа</div>
								</div>
							</div>
						</div>

						<div className={styles.jobImageContainer}>
							<img
								src={`/uploads/jobs/${job.id}.webp`}
								alt={job.name}
								className={styles.jobImage}
							/>
						</div>

						<div className={styles.jobDescription}>
							<h2>Описание работы</h2>
							<div className={styles.descriptionContent}>
								<ReactMarkdown>{job.description}</ReactMarkdown>
							</div>
						</div>

						<div className={styles.jobDetailsTable}>
							<h2>Заработок</h2>

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
											className={styles.levelSelect}>
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
											className={styles.levelSelect}>
											{hours.map((hour) => (
												<option key={hour} value={hour}>
													{hour} {hour === 1 ? 'час' : hour >= 2 && hour <= 4 ? 'часа' : 'часов'}
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
									<div className={styles.tableValue}>
										{Math.floor(
											((selectedHours * 60) / job.salaries[0].time) * salary,
										).toLocaleString('ru-RU')}
										₽
									</div>
								</div>
								<div className={styles.tableRow}>
									<div className={styles.tableCell}>
										<BarChart size={20} className={styles.tableIcon} />
										<span className={styles.tableName}>Опыт:</span>
									</div>
									<div className={styles.tableValue}>
										{Math.floor(
											((selectedHours * 60) / job.salaries[0].time) * job.salaries[0].exp,
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className={styles.error}>
						Информация о работе не найдена
						<p className={styles.redirectMessage}>
							<Link to="/jobs">Вернуться к списку работ</Link>
						</p>
					</div>
				)}
			</div>

			<ScrollToTop />
		</>
	);
};
