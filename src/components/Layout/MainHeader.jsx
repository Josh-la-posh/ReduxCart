import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton toggleCart={props.toggleCart} cart={props.cart}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
