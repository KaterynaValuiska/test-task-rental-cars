import { useSelector } from 'react-redux';
import CarList from '../CarList';
import Loader from 'components/Loader';
import Filter from 'components/Filter';
import { WrapperCatalog } from '../CarItem.styled';

const Catalog = () => {
  const { isLoading } = useSelector(state => state.cars);

  return (
    <WrapperCatalog>
      {isLoading && <Loader />}
      <Filter />
      <CarList />
    </WrapperCatalog>
  );
};

export default Catalog;
