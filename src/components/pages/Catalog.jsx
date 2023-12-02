import { useSelector } from 'react-redux';
import CarList from '../CarList';
import Loader from 'components/Loader';
import Filter from 'components/Filter';

const Catalog = () => {
  const { isLoading } = useSelector(state => state.cars);

  return (
    <>
      {isLoading && <Loader />}
      <Filter />
      <CarList />
    </>
  );
};

export default Catalog;
