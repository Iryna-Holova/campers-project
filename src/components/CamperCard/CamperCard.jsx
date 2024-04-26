import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from 'store/favorites/slice';
import icons from '../../images/sprite.svg';
import CamperImage from './CamperImage/CamperImage';
import CardTitle from 'components/CardTitle/CardTitle';
import CamperPrice from 'components/CamperCommon/CamperPrice/CamperPrice';
import CamperStats from 'components/CamperCommon/CamperStats/CamperStats';
import CamperFeatures from 'components/CamperCommon/CamperFeatures/CamperFeatures';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import Modal from 'components/Modal/Modal';
import CamperModal from 'components/CamperModal/CamperModal';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTab, setModalTab] = useState(0);
  const dispatch = useDispatch();

  const handleRatingClick = () => {
    setModalTab(1);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalTab(0);
  };

  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    AC,
    bathroom,
    kitchen,
    beds,
    TV,
    gallery,
    reviews,
    isFavorite = false,
  } = camper;

  return (
    <li className={css.card}>
      <CamperImage images={gallery} />
      <div className={css.details}>
        <div className={css.header}>
          <div className={css.title}>
            <CardTitle>{name}</CardTitle>
            <CamperPrice price={price} />
            <button
              type="button"
              onClick={() =>
                isFavorite
                  ? dispatch(removeFavorite(_id))
                  : dispatch(addFavorite(camper))
              }
              className={`${css.heart} ${isFavorite ? css.checked : ''}`}
            >
              <svg width={24} height={24}>
                <use href={icons + '#icon-heart'} />
              </svg>
              <svg width={24} height={24} className={css.filled}>
                <use href={icons + '#icon-heart-filled'} />
              </svg>
            </button>
          </div>
          <CamperStats
            rating={rating}
            reviews={reviews.length}
            location={location}
            onOpenReviews={handleRatingClick}
          />
        </div>
        <p className={css.description}>{description}</p>
        <CamperFeatures
          features={{
            adults,
            transmission,
            engine,
            kitchen,
            beds,
            AC,
            TV,
            'Shower/WC': bathroom,
          }}
        />
        <ButtonLink
          type="button"
          onClick={() => setShowModal(true)}
          size="small"
        >
          Show more
        </ButtonLink>
      </div>
      {showModal && (
        <Modal onClose={handleModalClose}>
          <CamperModal {...camper} modalTab={modalTab} />
        </Modal>
      )}
    </li>
  );
};

export default CamperCard;
