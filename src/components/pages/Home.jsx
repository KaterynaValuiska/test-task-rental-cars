import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../redux/operations';
import car from '../car.svg';
import Loader from 'components/Loader';
import { Title, ValueAuto, NumberAuto, WrapperAuto } from './Home.styled';
const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <div style={{ display: 'flex', gap: 20 }}>
        <img src={car} alt="car" width="170" height="150" />
        <Title>... Car for rent</Title>
      </div>

      <WrapperAuto>
        <NumberAuto>The number of available cars in the database</NumberAuto>
        <ValueAuto>{items.length}</ValueAuto>
      </WrapperAuto>
    </>
  );
};

export default Home;
