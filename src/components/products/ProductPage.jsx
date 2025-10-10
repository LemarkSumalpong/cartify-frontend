import { ShoppingCart } from 'lucide-react';
import errorRobot from '../../assets/bg/errorRobot.png';
import RelatedProducts from './RelatedProducts';
import ProductPageHolder from './ProductPageHolder';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../api/api';

const ProductPage = () => {
  const {slug} = useParams()

  useEffect(function(){
    api.get(`product_detail/${slug}`)
    .then(res => {
      console.log(res.data)
    })
    }, [])
 
  return (
    <div className="bg-white min-h-screen">
      <ProductPageHolder />
      <section className="py-6">
        <div className="container mx-auto px-4 md:px-8"> 
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg shadow-md"
                src={errorRobot}
                alt="Product"
              />
            </div>

            <div className="w-full md:w-1/2">
              <div className="text-gray-500 text-sm mb-1">Test</div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-3">
                Text 1
              </h1>
              
              <div className="text-base md:text-lg my-4">
                <span className="line-through mr-3 text-gray-400">$45.00</span>
                <span className="text-orange-600 font-semibold">$45.00</span>
              </div>

              <p className="font-light text-justify text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacus magna, euismod at viverra pharetra, cursus pellentesque
                libero. Etiam scelerisque urna ut leo varius, id ornare lorem
                condimentum. Nullam scelerisque neque vel convallis porta.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 w-20 text-center focus:outline-none focus:ring-2 focus:ring-orange-400"
                  id="inputQuantity"
                  type="number"
                  min="1"
                  defaultValue="1"
                />
                <button
                  className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md flex 
                  items-center justify-center gap-2 hover:bg-orange-600 transition duration-200 w-full sm:w-auto"
                  type="button"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
