import { useEffect, useState } from 'react';
import api from '../../../api';
import CardContainer from './CardContainer';
import Header from './Header';
import PlaceHolderContainer from '../ui/PlaceHolderContainer';
import Error from '../ui/Error';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(function () {
    setLoading(true);
    api
      .get('products')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setError('');
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      {error && <Error />}
      {products.length === 0 ? (
        <PlaceHolderContainer />
      ) : (
        <CardContainer products={products} />
      )}
    </>
  );
};
export default HomePage;
