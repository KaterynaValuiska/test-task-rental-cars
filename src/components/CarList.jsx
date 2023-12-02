import { useEffect, useState } from 'react';
import { fetchCars } from '../components/redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import CarItem from './CarItem';
import { WrapperCars, LoadMore } from './CarItem.styled';
import { addOrders } from './redux/slice';
import Loader from './Loader';

const CarList = () => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(12);
  const { items, isLoading, filter } = useSelector(state => state.cars);
  const loadMore = () => {
    setShowMore(prev => prev + 12);
  };
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const addToOrder = item => {
    dispatch(addOrders(item));
  };

  const getFilterCars = () => {
    if (filter === 'enter the text') {
      return items;
    }

    return items.filter(car => car.make.toLowerCase().includes(filter));
  };
  return (
    <>
      {isLoading && <Loader />}
      <WrapperCars>
        {items &&
          getFilterCars()
            .slice(0, showMore)
            .map(
              ({
                make,
                rentalPrice,
                img,
                rentalCompany,
                address,
                model,
                year,
                type,
                functionalities,
                id,
                fuelConsumption,
                engineSize,
                description,
                accessories,
                mileage,
                rentalConditions,
              }) => (
                <CarItem
                  key={id}
                  make={make}
                  rentalPrice={rentalPrice}
                  img={img}
                  rentalCompany={rentalCompany}
                  address={address}
                  model={model}
                  year={year}
                  type={type}
                  id={id}
                  functionalities={functionalities[0]}
                  fuelConsumption={fuelConsumption}
                  engineSize={engineSize}
                  description={description}
                  functionalitiesArr={functionalities}
                  accessories={accessories}
                  mileage={mileage}
                  onAdd={addToOrder}
                  rentalConditions={rentalConditions}
                />
              )
            )}
      </WrapperCars>
      {showMore >= items.length ? null : (
        <LoadMore onClick={loadMore}>Load more</LoadMore>
      )}
    </>
  );
};

export default CarList;
