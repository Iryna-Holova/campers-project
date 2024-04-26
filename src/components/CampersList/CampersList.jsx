import CamperCard from 'components/CamperCard/CamperCard';
import CamperSkeleton from 'components/CamperCard/CamperSkeleton/CamperSkeleton';
import css from './CampersList.module.css';

const CampersList = ({
  campers,
  isLoading = false,
  isLoadMore = false,
  onLoadMore = () => {},
}) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {campers.map(camper => (
          <CamperCard key={camper._id} camper={camper} />
        ))}
        {isLoading && (
          <>
            <CamperSkeleton />
            <CamperSkeleton />
            <CamperSkeleton />
            <CamperSkeleton />
          </>
        )}
      </ul>
      {isLoadMore && (
        <button
          onClick={onLoadMore}
          type="button"
          className={css.button}
          disabled={isLoading}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
