import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I wrote'
  },
  {
    id: 'p2',
    price: 4,
    title: 'My Second Book',
    description: 'The second book I wrote'
  },
  {
    id: 'p3',
    price: 7,
    title: 'My Thrird Book',
    description: 'The third book I wrote'
  },
  {
    id: 'p4',
    price: 9,
    title: 'My Fourth Book',
    description: 'The fourth book I wrote'
  },
];

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
