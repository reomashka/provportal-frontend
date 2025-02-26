import React, { useState } from 'react';
import styles from './PhotosOfTransport.module.scss';

import Transport from '@interfaces/Transport.interface';

interface PhotosOfTransportProps {
  transportData: Transport | null;
}
export const PhotosOfTransport: React.FC<PhotosOfTransportProps> = ({ transportData }) => {
  const [selectedSlide, setSelectedSlide] = useState('frontLeft');

  const images: Record<string, string> = {
    frontLeft: `https:/provportal.ru/assets/images/transport/frontLeft/${transportData?.uniqueName}.png`,
    backRight: `https:/provportal.ru/assets/images/transport/backRight/${transportData?.uniqueName}.png`,
    side: `https:/provportal.ru/assets/images/transport/side/${transportData?.uniqueName}.png`,
    front: `https:/provportal.ru/assets/images/transport/front/${transportData?.uniqueName}.png`,
    back: `https:/provportal.ru/assets/images/transport/back/${transportData?.uniqueName}.png`,
    '1rowAuto': `https:/provportal.ru/assets/images/transport/1rowAuto/${transportData?.uniqueName}.png`,
    '2rowAuto': `https:/provportal.ru/assets/images/transport/2rowAuto/${transportData?.uniqueName}.png`,
    underhood: `https:/provportal.ru/assets/images/transport/underhood/${transportData?.uniqueName}.png`,
  };

  return (
    <>
      <div className={styles.cardPhotos}>
        <ul className={styles.carousel_thumbnails}>
          {Object.keys(images).map((key) => (
            <label key={key} style={{ marginBottom: '10px', cursor: 'pointer' }}>
              <img src={images[key]} alt={key} onClick={() => setSelectedSlide(key)} />
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
                className={`${styles.carousel_slide} ${selectedSlide === key ? styles.active : ''}`}
              >
                <figure>
                  <img src={images[key]} alt={key} />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
