import icons from '../../../images/sprite.svg';
import css from './CamperStats.module.css';

const CamperStats = ({ rating, reviews, location, onOpenReviews }) => {
  return (
    <div className={css.wrapper}>
      <button onClick={onOpenReviews} className={`${css.item} ${css.reviews}`}>
        <svg width={16} height={16}>
          <use href={icons + '#icon-star'} />
        </svg>
        <span>{`${rating}(${reviews} Reviews)`}</span>
      </button>
      <div className={css.item}>
        <svg width={16} height={16}>
          <use href={icons + '#icon-location'} />
        </svg>
        <span>{location.split(', ').reverse().join(', ')}</span>
      </div>
    </div>
  );
};

export default CamperStats;
