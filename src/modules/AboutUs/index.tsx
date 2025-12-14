import styles from './page.module.scss';

interface TeamMember {
	name: string;
	role: string;
	description?: string;
}

export const AboutUsModule = () => {
	const coreTeam: TeamMember[] = [
		{
			name: 'Roman_Hilenburg #2',
			role: 'Разработчик/Соорганизатор',
			description: 'Разработчик, тех. поддержка',
		},
		{
			name: 'Huan_Luis #4',
			role: 'Организатор',
			description: 'Заварил всю эту кашу. По началу проекта отвечал за клиентскую часть сайта',
		},
		{
			name: 'Viktor_Gaiduk #5',
			role: 'Тестер, сбор инфы',
			description: 'Невероятно огромный сбор информации и проделанный пласт работы',
		},

		{
			name: 'Ilya_Vetoshkin #5',
			role: 'Фотограф',
			description: 'Фотографии транспорта, работ, скинов и прочего',
		},
		{
			name: 'Georgi Volfson #5',
			role: 'Фотограф',
			description: 'Фотографии транспорта, работ, скинов и прочего',
		},
		{
			name: 'Anton Synkov #5',
			role: 'Дизайнер',
			description: 'Логотип, оформление, дизайн сайта',
		},
	];

	const specialThanks: TeamMember[] = [
		{
			name: 'Ivan_Trufanov #7',
			role: '',
			description:
				'Предоставил и вывел все формулы по работам, благодаря нему и создался раздел с работами!',
		},
		{
			name: 'Gleb_Molotov #2',
			role: '',
			description: 'Сбор информации',
		},
		{
			name: 'Kirill_Solidov #5',
			role: '',
			description: 'Помощь со сбором зарплат',
		},
		{
			name: 'Teodor_Wodjanoy #2',
			role: '',
			description: 'Помощь со сбором зарплат',
		},
		{
			name: 'Andrey Zaicev #1',
			role: '',
			description: 'Помощь с бекендом сайта',
		},
		{
			name: 'Ivan_Krasnodarov #4',
			role: '',
			description: 'Данные по транспорту (характеристики транспорта)',
		},
		{
			name: 'Tony_Ryazansky #2',
			role: '',
			description: 'Сбор старых гос. цен автомобилей',
		},
		{
			name: 'Ence_Collins #1',
			role: '',
			description: 'Помощь со скринами новых авто',
		},
	];

	return (
		<div className={styles.aboutPage}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.title}>О ProvPortal</h1>
					<p className={styles.subtitle}>
						Информационный сайт, предоставляющий игрокам МТА Провинции информацию о работах,
						маршрутах, транспорте и других системах, связанных с игрой
					</p>
				</header>

				<section className={styles.descriptionSection}>
					<div className={styles.descriptionContent}>
						<p className={styles.descriptionText}>
							Главный акцент - это новый и современный дизайн, переработка устаревшей и неверной
							информации, быстродействие сайта, а также быстрая поддержка и моментальный отклик со
							стороны разработчиков.
						</p>
						<p className={styles.descriptionText}>
							Команда ProvPortal - Это группа энтузиастов, собравшаяся по случайному стечению
							обстоятельств. Все хотели внести что-то своё и помочь в развитии сайта, так и
							присоединились к команде разработки.
						</p>
					</div>
				</section>

				<section className={styles.teamSection}>
					<h2 className={styles.sectionTitle}>Команда</h2>
					<div className={styles.teamGrid}>
						{coreTeam.map((member, index) => (
							<article key={index} className={styles.memberCard}>
								<div className={styles.memberInfo}>
									<h3 className={styles.memberName}>{member.name}</h3>
									<h4 className={styles.memberRole}>{member.role}</h4>
									{member.description && <p className={styles.memberBio}>{member.description}</p>}
								</div>
							</article>
						))}
					</div>
				</section>

				<section className={styles.thanksSection}>
					<h2 className={styles.sectionTitle}>
						Отдельная благодарность всем ниже перечисленным игрокам!
					</h2>
					<div className={styles.thanksList}>
						{specialThanks.map((person, index) => (
							<article key={index} className={styles.thanksCard}>
								<h3 className={styles.thanksName}>{person.name}</h3>
								<p className={styles.thanksBio}>{person.description}</p>
							</article>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};
