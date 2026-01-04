import ContentLoader from 'react-content-loader';

const CardSkeleton = () => (
	<ContentLoader
		speed={2}
		width={310}
		height={260}
		viewBox="0 0 310 260"
		backgroundColor="#1d2125"
		foregroundColor="#2a2e33">
		{/* Верхняя часть (изображение) */}
		<rect x="0" y="0" rx="10" ry="10" width="310" height="150" />

		{/* Заголовок карточки */}
		<rect x="0" y="160" rx="5" ry="5" width="200" height="15" />

		{/* Детали (иконки + текст) */}
		<rect x="0" y="190" rx="5" ry="5" width="150" height="15" />
		<rect x="0" y="215" rx="5" ry="5" width="180" height="15" />
	</ContentLoader>
);

export default CardSkeleton;
