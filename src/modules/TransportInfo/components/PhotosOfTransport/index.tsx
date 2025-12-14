import { useState } from 'react';
import styles from './PhotosOfTransport.module.scss';
import placeholder from '@/assets/sorryPlaceholder.svg';
import Transport from '@/interfaces/Transport.interface';

interface PhotosOfTransportProps {
	transportData: Transport | null;
}
export const PhotosOfTransport = ({ transportData }: PhotosOfTransportProps) => {
	const [selectedSlide, setSelectedSlide] = useState('frontLeft');

	const images: Record<string, string> = {
		frontLeft: `/uploads/transport/frontLeft/${transportData?.uniqueName}.png`,
		backRight: `/uploads/transport/backRight/${transportData?.uniqueName}.png`,
		side: `/uploads/transport/side/${transportData?.uniqueName}.png`,
		front: `/uploads/transport/front/${transportData?.uniqueName}.png`,
		back: `/uploads/transport/back/${transportData?.uniqueName}.png`,
		'1rowAuto': `/uploads/transport/1rowAuto/${transportData?.uniqueName}.png`,
		'2rowAuto': `/uploads/transport/2rowAuto/${transportData?.uniqueName}.png`,
		underhood: `/uploads/transport/underhood/${transportData?.uniqueName}.png`,
	};

	return (
		<>
			<div className={styles.cardPhotos}>
				<ul className={styles.carousel_thumbnails}>
					{Object.keys(images).map((key) => (
						<label key={key} style={{ marginBottom: '10px', cursor: 'pointer' }}>
							<img
								src={images[key]}
								alt={key}
								onClick={() => setSelectedSlide(key)}
								onError={(e) => {
									const target = e.currentTarget;
									target.style.display = 'none';
								}}
							/>
						</label>
					))}
				</ul>
			</div>

			<div className={styles.col}>
				<div className={styles.carousel1}>
					<ul className={styles.carousel_slides}>
						{Object.keys(images).map((key) => (
							<li
								key={key}
								className={`${styles.carousel_slide} ${selectedSlide === key ? styles.active : ''}`}>
								<figure>
									<img
										src={images[key]}
										alt={key}
										onError={(e) => {
											(e.currentTarget as HTMLImageElement).src = placeholder;
										}}
									/>
								</figure>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
