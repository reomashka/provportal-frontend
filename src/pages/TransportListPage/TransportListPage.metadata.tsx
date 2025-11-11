import { Helmet } from 'react-helmet-async';

export const TransportListPageMetadata = () => {
	const title = 'Транспорт - ProvPortal';
	const description =
		'Полная информация обо всех транспортных средствах сервера МТА Провинция. Каталог, характеристики и статистика транспорта на ProvPortal.';
	const keywords =
		'МТА Провинция транспорт, машины МТА, транспорт провинция, ProvPortal, пров портал, prov portal, провпортал';
	const url = 'https://provportal.ru/transport';

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="canonical" href={url} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content="ProvPortal" />
			<meta property="og:locale" content="ru_RU" />

			<meta name="robots" content="index, follow" />
			<meta name="author" content="ProvPortal" />
		</Helmet>
	);
};
