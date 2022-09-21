import { Component} from 'react';
import { connect } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {increaseCart} from './action';

const mapStateToProps = (state) => {
  return {
    istoggle: state.istoggle,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (item) => () => dispatch(increaseCart(item)),
  
  }
}

class App extends Component {
  

  render() {
    const { onIncrease, istoggle} = this.props
    return (
      <Layout>
        { istoggle && <Cart /> }
        <Products onIncrease={onIncrease}/>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);