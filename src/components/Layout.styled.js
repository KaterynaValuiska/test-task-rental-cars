import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const LayoutNav = styled.nav`
  display: flex;
  gap: 10px;

  padding: 20px;
`;
export const LinkNav = styled(NavLink)`
  position: relative;
  display: block;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  color: rgba(11, 68, 205, 1);
  &.active {
    color: rgba(52, 112, 255, 1);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: rgba(11, 68, 205, 1);
      border-radius: 2px;
    }
  }
`;
export const Main = styled.main`
  margin: 20px;
`;
// text-decoration: none;
//   font-size: 30px;
//   font-weight: 700;
//   color: rgba(11, 68, 205, 1);
