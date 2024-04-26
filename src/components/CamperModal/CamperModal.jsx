import { useEffect, useRef, useState } from 'react';
import CardTitle from '../CardTitle/CardTitle';
import CamperStats from '../CamperCommon/CamperStats/CamperStats';
import CamperPrice from '../CamperCommon/CamperPrice/CamperPrice';
import CamperImages from './CamperImages/CamperImages';
import Tabs from './Tabs/Tabs';
import CamperFeatures from '../CamperCommon/CamperFeatures/CamperFeatures';
import CamperDetails from './CamperDetails/CamperDetails';
import CamperReviews from './CamperReviews/CamperReviews';
import CamperForm from './CamperForm/CamperForm';
import css from './CamperModal.module.css';

const TABS = ['Features', 'Reviews'];

const CamperModal = ({
  modalTab = 0,
  _id,
  name,
  price,
  rating,
  location,
  adults,
  engine,
  transmission,
  form,
  length,
  width,
  height,
  tank,
  consumption,
  description,
  AC,
  kitchen,
  beds,
  TV,
  CD,
  radio,
  shower,
  toilet,
  freezer,
  hob,
  microwave,
  gas,
  water,
  gallery,
  reviews,
}) => {
  const [activeTab, setActiveTab] = useState(modalTab);
  const [scroll, setScroll] = useState(modalTab === 1);
  const scrollContainerRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const activeElementRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (activeElementRef.current) {
      const activeElementHeight = activeElementRef.current.clientHeight;
      tabsContainerRef.current.style.height = `${activeElementHeight}px`;
      if (scroll) {
        tabsRef.current.scrollIntoView({
          alignToTop: true,
          behavior: 'smooth',
        });
        setScroll(false);
      }
    }
  }, [activeTab, scroll]);

  const handleRatingClick = () => {
    setScroll(true);
    setActiveTab(1);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.title}>
          <CardTitle>{name}</CardTitle>
          <CamperStats
            onOpenReviews={handleRatingClick}
            rating={rating}
            reviews={reviews.length}
            location={location}
          />
        </div>
        <CamperPrice price={price} />
      </div>
      <div ref={scrollContainerRef} className={css.scroll}>
        <CamperImages images={gallery} />
        <p className={css.description}>{description}</p>
        <Tabs
          tabs={TABS}
          tabsRef={tabsRef}
          activeIdx={activeTab}
          onTabClick={setActiveTab}
        />
        <div className={css.bottom}>
          <div ref={tabsContainerRef} className={css.optional}>
            <div
              ref={activeTab === 0 ? activeElementRef : null}
              className={`${css.features} ${activeTab === 0 ? '' : css.hidden}`}
            >
              <CamperFeatures
                features={{
                  adults,
                  transmission,
                  engine,
                  kitchen,
                  beds,
                  AC,
                  TV,
                  CD,
                  radio,
                  hob,
                  freezer,
                  microwave,
                  shower,
                  toilet,
                  gas,
                  water,
                }}
              />
              <CamperDetails
                details={{ form, length, width, height, tank, consumption }}
              />
            </div>
            <CamperReviews
              activeRef={activeTab === 1 ? activeElementRef : null}
              isShown={activeTab === 1}
              reviews={reviews}
            />
          </div>
          <CamperForm id={_id} />
        </div>
      </div>
    </div>
  );
};

export default CamperModal;
