import { Helmet } from 'react-helmet-async';

export const HomePageMetadata = () => {
	return (
		<Helmet>
			<title>ProvPortal</title>
			<meta name="description" content="Информационный портал игры МТА Провинция" />
			<meta
				name="keywords"
				content="МТА, Провинция, ProvPortal, prov portal, пров портал, провпортал"
			/>
			<meta property="og:title" content="Домашняя страница. ProvPortal" />
		</Helmet>
	);
};
