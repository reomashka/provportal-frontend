import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Info, CircleFadingArrowUp, MapPin, Pen } from 'lucide-react';
import styles from './TransportCard.module.scss';

import { Job } from '@interfaces/Job.interface';

interface TransportCardProps {
	jobData: Job[];
}

export const JobCard = ({ jobData }: TransportCardProps) => {
	// Сохранение позиции прокрутки перед переходом
	const handleCardClick = () => {
		localStorage.setItem('scrollY', window.scrollY.toString());
	};
	const role = 'admin';
	return (
		<>
			{jobData.map((job) => (
				<Link
					key={job.id}
					to={'/jobs/' + job.id}
					style={{ textDecoration: 'none', color: 'inherit' }}
					onClick={handleCardClick}>
					<motion.div
						className={styles.transportCard}
						key={job.id}
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						whileHover={{ scale: 1.01, transition: { duration: 0.07 } }}>
						<img
							src="http://87.228.38.103assets/images/jobs/tram.webp"
							alt=""
							className={styles.transportImage}
							loading="lazy"
						/>

						<div className={styles.headerCard}>
							<h2>{job.name}</h2>
						</div>

						<div className={styles.details}>
							<div className={styles.leftColumn}>
								<div className={styles.detailItem}>
									<CircleFadingArrowUp className={styles.icon} color="#ffffff" />
									<span>{job.lvl} уровень</span>
								</div>
								<div className={styles.detailItem}>
									<MapPin className={styles.icon} color="#ffffff" strokeWidth={1.5} />
									<span>г. {job.city}</span>
								</div>
								<div className={styles.detailItem}>
									<Info className={styles.icon} color="#ffffff" strokeWidth={1.5} />
									<span>{job.about}</span>
								</div>
								{role === 'admin' && (
									<div className={`${styles.detailItem} ${styles.editItem}`}>
										<Link to="/adm/jobs">
											<Pen className={styles.icon} color="#ffffff" strokeWidth={1.5} />
											<span>Изменить данные</span>
										</Link>
									</div>
								)}
							</div>
						</div>
					</motion.div>
				</Link>
			))}
		</>
	);
};
