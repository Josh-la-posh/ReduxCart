import ProductItem from './ProductItem';
import classes from './Products.module.css';
import SHOPPING_LIST from '../../shoppingList';

const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {SHOPPING_LIST.map(list =>{
          return (
            <ProductItem
              key={list.id}
              title={list.title}
              price={list.price}
              description={list.description}
              onIncrease={props.onIncrease}
            />
          )
        })}
        
      </ul>
    </section>
  );
};

export default Products;
