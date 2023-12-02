import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutNav, LinkNav, Main } from './Layout.styled';
import { WrapperCatalog } from './CarItem.styled';

export const Layout = () => {
  return (
    <WrapperCatalog>
      <LayoutNav>
        <LinkNav to="/">Home</LinkNav>

        <LinkNav to="/catalog">Catalog</LinkNav>
        <LinkNav to="/favorites">Favorites</LinkNav>
      </LayoutNav>
      <Main>
        <Suspense fallback={<div>loader</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </WrapperCatalog>
  );
};

export default Layout;
