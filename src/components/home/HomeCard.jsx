import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
import { BASE_URL } from '../../../api';

const HomeCard = ({ product }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-[14rem] lg:max-w-[16rem] h-auto shadow-lg rounded-md cursor-pointer flex flex-col">
      <Link to={`products/${product.slug}`}>
        <div className="w-full h-40 flex items-center justify-center rounded-t-md bg-white">
          <img
            src={`${BASE_URL}${product.image}`}
            alt="Image"
            className="max-h-full object-contain"
          />
        </div>

        <div className="p-4 flex flex-col justify-between flex-1">
          <h3 className="mt-2 text-sm font-medium line-clamp-2 h-10 text-center">
            {product.name}
          </h3>

          <div className="flex justify-center items-center mt-4">
            <p className="text-yellow-700 font-semibold">
              {' '}
              ₱{formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
