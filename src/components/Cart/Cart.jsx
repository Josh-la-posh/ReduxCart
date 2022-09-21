import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector}  from 'react-redux';

const Cart = (props) => {


  const cartItems = useSelector(state => state.items);


  if(cartItems.length === 0){
    return <div>
      Cart Empty ! 
    </div>
  }

  return (

      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
      <ul>

        {cartItems.map(list => {
        
            return (
              <CartItem
                key={list.id}
                item={{
                  title: list.title,
                  quantity: list.quantity,
                  total: (list.totalPrice),
                  price: list.price,
                }}
                id={list.id}
              />
            )
          }
        )}

      </ul>
    </Card>
  );
};







export default Cart;
