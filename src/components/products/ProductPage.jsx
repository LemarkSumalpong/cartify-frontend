import { ShoppingCart } from 'lucide-react';

const ProductPage = () => {
  return (
    <div>
      <section className="py-3">
        <div className="container px-4 lg:px-5 my-5">
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-48 object-cover mb-5 md:mb-0"
              src=""
              alt="..."
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="sm:mb-1">Test</div>
            <h1 className="text-2xl font-semibold">Text 1</h1>
            <div className="text-sm mv-5">
              <span className="line-through">$45.00</span>
              <span>$45.00</span>
            </div>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              lacus magna, euismod at viverra pharetra, cursus pellentesque
              libero. Etiam scelerisque urna ut leo varius, id ornare lorem
              condimentum. Nullam scelerisque neque vel convallis porta.
              Vestibulum interdum eu arcu vitae dapibus. Maecenas sollicitudin
              metus sit amet urna aliquet luctus. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Praesent
              sit amet vehicula ex, at facilisis diam. Nullam rutrum convallis
              elit non interdum. Vivamus cursus enim lorem, ac pulvinar neque
              blandit quis. Phasellus sit amet nunc quis massa pulvinar
              tristique. Integer posuere porttitor dapibus.
            </p>
            <div className="flex">
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
                id="inputQuantity"
                type="num"
                value="1"
                style={{ maxWidth: '3rem' }}
              />
              <button
                className="text-white/70 uppercase font-semibold text-lg md:text-xl lg:text-2xl rounded-full bg-blue-500 border-b-3
             border-blue-700 px-3 py-2 shadow-md hover:bg-blue-500"
                type="button"
              >
                <ShoppingCart size={20} className=" text-white" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
