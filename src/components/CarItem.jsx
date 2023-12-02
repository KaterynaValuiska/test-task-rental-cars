import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import {
  Button,
  Wrapper,
  NameCar,
  NameSpan,
  WrapperName,
  Imeg,
  InfoCar,
  Favorite,
  WrapperInfo,
} from './CarItem.styled';
import heart from './heart.svg';
import heartBlue from './heartBlue.svg';
import car from './car.svg';
import { FaCarSide } from 'react-icons/fa';
import InformAboutCar from './InformAboutCar';

const CarItem = item => {
  const {
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
    functionalitiesArr,
    accessories,
    mileage,
    onAdd,
    rentalConditions,
  } = item;

  const [showModal, setShowModal] = useState(false);
  const [select, setSelect] = useState(false);
  const [errImg, setErrImg] = useState(false);
  const addressArray = address.split(' ');
  const country = addressArray[addressArray.length - 1];
  const city = addressArray[addressArray.length - 2];
  const cityArray = city.split('');
  cityArray.pop();
  const cityCorr = cityArray.join('');
  const functionalitiesArray = functionalities.split(' ');
  const shotFunctional = functionalitiesArray.splice(0, 3).join(' ');
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setSelect(JSON.parse(window.localStorage.getItem('heart')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('heart', select);
  }, [select]);

  const addToFavorite = () => {
    onAdd(item);
    setSelect(!select);
  };
  function myFunction() {
    setErrImg(true);
  }
  return (
    <>
      <Wrapper>
        <Favorite onClick={addToFavorite}>
          <img src={select ? heartBlue : heart} alt="svg" />
        </Favorite>
        <Imeg
          src={!errImg ? img : car}
          alt={make}
          onError={() => {
            myFunction();
          }}
        />
        <WrapperName>
          <NameCar>
            {make}
            <NameSpan>{model}</NameSpan>,{year}
          </NameCar>
          <NameCar>{rentalPrice}</NameCar>
        </WrapperName>
        <WrapperInfo>
          <InfoCar>{cityCorr}</InfoCar>

          <InfoCar>{country}</InfoCar>
          <InfoCar>{rentalCompany}</InfoCar>
          <InfoCar>{type}</InfoCar>
          <InfoCar>{model}</InfoCar>
          <InfoCar>{id}</InfoCar>
          <InfoCar>{shotFunctional}</InfoCar>
        </WrapperInfo>
        <Button onClick={toggleModal}>Learn more</Button>
      </Wrapper>
      {showModal && (
        <Modal onClose={toggleModal}>
          <InformAboutCar
            img={img}
            make={make}
            model={model}
            year={year}
            fuelConsumption={fuelConsumption}
            cityCorr={cityCorr}
            country={country}
            id={id}
            type={type}
            engineSize={engineSize}
            description={description}
            functionalities={functionalitiesArr}
            accessories={accessories}
            rentalPrice={rentalPrice}
            mileage={mileage}
            onclick={toggleModal}
            rentalConditions={rentalConditions}
          />
        </Modal>
      )}
    </>
  );
};

export default CarItem;
