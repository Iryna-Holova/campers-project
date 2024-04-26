import icons from '../../../images/sprite.svg';
import css from './CamperReviews.module.css';

const CamperReviews = ({ activeRef, isShown, reviews }) => {
  return (
    <ul ref={activeRef} className={`${css.list} ${isShown ? css.shown : ''}`}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
        <li key={idx}>
          <div className={css.header}>
            <div className={css.avatar}>{reviewer_name[0]}</div>
            <div>
              <h4 className={css.name}>{reviewer_name}</h4>
              <div className={css.stars}>
                {Array.from({ length: 5 }, (_, idx) => (
                  <svg
                    key={idx}
                    width={16}
                    height={16}
                    className={idx < reviewer_rating ? css.filled : css.empty}
                  >
                    <use href={icons + '#icon-star'} />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperReviews;
