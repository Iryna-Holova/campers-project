import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';
import PageContainer from 'components/PageContainer/PageContainer';
import CampersList from 'components/CampersList/CampersList';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <PageContainer>
      <CampersList campers={favorites} />
    </PageContainer>
  );
};

export default FavoritesPage;
