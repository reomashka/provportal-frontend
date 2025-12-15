import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface PageMetaProps {
	title?: string;
	description?: string;
	image?: string;
}

export const MetadataWrapper = ({ title, description, image }: PageMetaProps) => {
	const location = useLocation();
	const url = `${window.location.origin}${location.pathname}`;

	return (
		<Helmet>
			<title>{title || 'ProvPortal'}</title>
			{description && <meta name="description" content={description} />}
			<link rel="canonical" href={url} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			{title && <meta property="og:title" content={title} />}
			{description && <meta property="og:description" content={description} />}
			<meta property="og:site_name" content="ProvPortal" />
			<meta property="og:locale" content="ru_RU" />

			{image && <meta property="og:image" content={image} />}

			<meta name="robots" content="index, follow" />
			<meta name="author" content="ProvPortal" />
		</Helmet>
	);
};
