import { nanoid } from 'nanoid';

import CarItem from '../CarItem';

import { WrapperCars } from '../CarItem.styled';

const Favorites = () => {
  let carsLocal;

  carsLocal = JSON.parse(localStorage.getItem('select-car'));

  const favor = () => {
    if (carsLocal === null) {
      const favoritesCarAll = [];
      return favoritesCarAll;
    }
    const favoritesCarAll = [...carsLocal];
    return favoritesCarAll;
  };

  const activeHeart = () => {};
  return (
    <>
      {favor().length === 0 && <h2>There are no favorite cars</h2>}

      <WrapperCars>
        {favor().length > 0 &&
          favor().map(
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
              functionalitiesArr,
            }) => (
              <CarItem
                key={nanoid()}
                make={make}
                rentalPrice={rentalPrice}
                img={img}
                rentalCompany={rentalCompany}
                address={address}
                model={model}
                year={year}
                type={type}
                id={id}
                functionalities={functionalities}
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                description={description}
                functionalitiesArr={functionalitiesArr}
                accessories={accessories}
                mileage={mileage}
                onAdd={activeHeart}
                rentalConditions={rentalConditions}
              />
            )
          )}
      </WrapperCars>
    </>
  );
};

export default Favorites;
