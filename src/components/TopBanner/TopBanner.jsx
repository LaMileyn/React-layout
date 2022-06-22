import React from 'react';
import s from './TopBanner.module.scss';

const TopBanner = (props) => {
    return (
        <div className={s.topbanner}>
            <div className={s.topbanner__text}>
                <h1>Portfolio</h1>
                <p>Agency provides a full service range including technical skills,
                    design, business understanding.</p>
            </div>
        </div>
    );
}

export default TopBanner;