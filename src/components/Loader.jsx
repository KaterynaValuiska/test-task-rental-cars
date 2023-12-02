import { LoaderStyled } from './Loader.styled';

const Loader = ({ color = 'rgba(52, 112, 255, 1)' }) => {
  return <LoaderStyled color={color}></LoaderStyled>;
};

export default Loader;
