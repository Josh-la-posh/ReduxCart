import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const [istoggle, setIsToggle] = useState(false);
  const [cart, setCart] = useState(0);
  // const [click, setClick] = useState(false);

  // const toggleClick = () => {
  //   setClick(!click);
  // }

  useEffect(() => {
    console.log(cart);
    // return()=>console.log(cart)
    // cart;
  },[cart])


  const toggleCart = () => {
    setIsToggle(!istoggle);
  }

  const onIncrease = () => {
    setCart(cart + 1);
  }

  const onDecrease = () => {
    if (cart > 0) {
      return setCart(cart - 1);
    }
  }

  return (
    <Layout toggleCart={toggleCart} cart={cart}>
      <Cart istoggle={istoggle} cart={cart} onIncrease={onIncrease} onDecrease={onDecrease}/>
      <Products onIncrease={onIncrease}/>
    </Layout>
  );
}

export default App;