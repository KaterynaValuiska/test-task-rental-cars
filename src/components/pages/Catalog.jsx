import { useSelector } from 'react-redux';
import CarList from '../CarList';
import Loader from 'components/Loader';

const Catalog = () => {
  const { isLoading } = useSelector(state => state.cars);

  return (
    <>
      <h2>Catalog of cars</h2>
      {isLoading && <Loader />}

      <CarList />
    </>
  );
};

export default Catalog;
