import { use, useEffect, useState } from 'react';
import api from '../../../api';
import CardContainer from './CardContainer';
import Header from './Header';
import PlaceHolderContainer from '../ui/PlaceHolderContainer';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true)
    api
      .get('products')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false)
      })
       .finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
       <Header />
      {loading ? <PlaceHolderContainer /> :  <CardContainer products={products} />}
     
    </>
  );
};
export default HomePage;
