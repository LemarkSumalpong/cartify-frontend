import background from '../../assets/bg/background.png';
const Header = () => {
  return (
    <header className="relative py-5 h-[500px] flex items-center justify-center ">
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object cover"
      />
      <div className="relative z-10 px-4 lg:px-4 py-5 -mt-20 md:-mt-16 lg:-mt-20">
        <div className="text-center text-black/90">
          <h1 className="text-4xl font-bold">Welcome to Your Favorite Store</h1>
          <p className="text-base  md:text-lg lg:text-xl  font-normal text-black mb-4">
            Discover the Latest Trend
          </p>
          <a
            href="#shop"
            className="text-white/70 uppercase font-semibold text-lg md:text-xl lg:text-2xl rounded-full bg-blue-500 border-b-3
             border-blue-700 px-3 py-2 shadow-md hover:bg-blue-500"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
