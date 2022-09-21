import classes from './CartButton.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {ToggleCart} from '../../action'




const CartButton = (props) => {

  const dispatch = useDispatch();


  const toggleCart = () => {
    dispatch(ToggleCart());
  }

  const  totalQuantity = useSelector (state =>  state.totalQuantity); 


  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};


export default CartButton; 