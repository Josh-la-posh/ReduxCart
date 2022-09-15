import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader toggleCart={props.toggleCart} cart={props.cart}/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
