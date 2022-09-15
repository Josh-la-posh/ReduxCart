import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button onClick={props.toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{props.cart}</span>
    </button>
  );
};

export default CartButton;
