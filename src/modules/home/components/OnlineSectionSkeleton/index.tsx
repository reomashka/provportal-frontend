import ContentLoader from 'react-content-loader';

const OnlineSkeleton = () => (
	<ContentLoader
		speed={2}
		width={300}
		height={200}
		viewBox="0 0 300 200"
		backgroundColor="#1d2125"
		foregroundColor="#2a2e33">
		{/* Логотип-сервер */}
		<rect x="0" y="10" rx="8" ry="8" width="250" height="70" />

		{/* Строка с количеством онлайн */}
		<rect x="0" y="90" rx="4" ry="4" width="180" height="20" />
	</ContentLoader>
);

export default OnlineSkeleton;
