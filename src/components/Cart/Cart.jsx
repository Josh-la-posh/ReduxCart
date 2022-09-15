import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import SHOPPING_LIST from '../../shoppingList';

const Cart = (props) => {
  const {istoggle, cart, onIncrease, onDecrease} = props
  return (
    istoggle ? 
      <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {SHOPPING_LIST.map(list => {
          return (
            <CartItem
              key={list.id}
              item={{ title: list.title, quantity: cart, total: (cart * list.price), price: list.price }}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
            />
          )
        })}
      </ul>
    </Card>
    :<div></div>
  );
};

export default Cart;
