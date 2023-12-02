import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../redux/operations';
import Loader from 'components/Loader';
const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.cars);
  console.log(items.length);
  console.log(items);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <div>Home page</div>
      <div>
        <p>The number of available cars in the database</p>
        <span>{items.length}</span>
      </div>
    </>
  );
};

export default Home;
