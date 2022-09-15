import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const {onIncrease, onDecrease} = props
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={(e)=>onDecrease(e.target)}>-{onDecrease && console.log(onDecrease.length)}</button>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
