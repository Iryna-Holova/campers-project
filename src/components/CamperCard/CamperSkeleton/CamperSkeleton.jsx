import icons from '../../../images/sprite.svg';
import css from './CamperSkeleton.module.css';

const CamperSkeleton = () => {
  return (
    <li className={css.card}>
      <div className={css.image}></div>
      <div className={css.details}>
        <div className={css.header}>
          <div className={css.title}>
            <div className={css.card_title}></div>
            <div className={css.price}></div>
            <div className={css.heart}>
              <svg width={24} height={24}>
                <use href={icons + '#icon-heart'} />
              </svg>
            </div>
          </div>
          <div className={css.stats}>
            <div className={css.stat_item}>
              <svg width={16} height={16}>
                <use href={icons + '#icon-star'} />
              </svg>
              <span></span>
            </div>
            <div className={css.stat_item}>
              <svg width={16} height={16}>
                <use href={icons + '#icon-location'} />
              </svg>
              <span></span>
            </div>
          </div>
        </div>
        <div className={css.description}></div>
        <div className={css.features}>
          <div className={css.features_item} style={{ width: '126px' }}></div>
          <div className={css.features_item} style={{ width: '143px' }}></div>
          <div className={css.features_item} style={{ width: '109px' }}></div>
          <div className={css.features_item} style={{ width: '123px' }}></div>
          <div className={css.features_item} style={{ width: '114px' }}></div>
          <div className={css.features_item} style={{ width: '87px' }}></div>
        </div>
        <div className={css.button}></div>
      </div>
    </li>
  );
};

export default CamperSkeleton;
