import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

import styles from './Servers.module.scss';
import vkLogo from '@assets/homePage/section-gms-img/Vk-game.png';
import s1 from '@assets/homePage/section-gms-img/s1.png';
import s2 from '@assets/homePage/section-gms-img/s2.png';
import s3 from '@assets/homePage/section-gms-img/s3.png';
import s4 from '@assets/homePage/section-gms-img/s4.png';
import s5 from '@assets/homePage/section-gms-img/s5.png';
import s6 from '@assets/homePage/section-gms-img/s6.png';
import s7 from '@assets/homePage/section-gms-img/s7.png';
import OnlineSkeleton from '../OnlineSkeleton';
import { fetchOnlineData } from '@modules/HomeModule/api/fetchOnlineData';

interface ServerData {
	server: number;
	online: number;
	slots: number;
}

const serverLogos = {
	1: s1,
	2: s2,
	3: s3,
	4: s4,
	5: s5,
	6: s6,
	7: s7,
} as const;

const serverVkLinks = {
	1: 'province_one',
	2: '2province',
	3: 'provinceserver3',
	4: 'provincefour',
	5: 'province_rp5',
	6: 'province6server',
	7: 'provinceseven',
} as const;

export const OnlineSection = () => {
	const { data: onlineData, isLoading } = useQuery<ServerData[]>({
		queryKey: ['onlineData'],
		queryFn: fetchOnlineData,
	});

	const servers = onlineData ?? [];

	return (
		<section className={styles.gameServices}>
			<p className={styles.gameServices_title}>Игровые серверы</p>

			<div className={styles.gameServices_block_card}>
				{isLoading
					? Array.from({ length: 3 }).map((_, index) => <OnlineSkeleton key={index} />)
					: servers.map(({ server, online, slots }) => {
							const key = server as keyof typeof serverLogos;
							const logo = serverLogos[key];
							const vkLink = serverVkLinks[key];

							if (!logo) return null;

							return (
								<motion.div
									key={server}
									className={styles.transportCard}
									initial={{ opacity: 0, y: 5 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: server * 0.1 }}>
									<div className={styles.gameServices_card}>
										<img
											className={styles.gameServices_card_img}
											src={logo}
											alt={`Server ${server}`}
										/>
										<div className={styles.gameServices_card_text_block}>
											<p>{server} сервер</p>
											<span>
												Онлайн: {online} / {slots}
											</span>
										</div>
										{vkLink && (
											<a
												href={`https://vk.com/${vkLink}`}
												target="_blank"
												rel="noopener noreferrer">
												<img src={vkLogo} width={40} height={40} alt="VK" />
											</a>
										)}
									</div>
								</motion.div>
							);
						})}
			</div>
		</section>
	);
};
