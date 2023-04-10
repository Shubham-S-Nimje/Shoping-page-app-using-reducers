import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: '001',
    price: 99,
    title: 'product1',
    description: 'product1 describtion',
  },
  {
    id: '002',
    price: 49,
    title: 'product2',
    description: 'product2 describtion',
  },
  {
    id: '003',
    price: 79,
    title: 'product3',
    description: 'product3 describtion',
  },
  {
    id: '004',
    price: 149,
    title: 'product4',
    description: 'product4 describtion',
  },
  {
    id: '005',
    price: 199,
    title: 'product5',
    description: 'product5 describtion',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
