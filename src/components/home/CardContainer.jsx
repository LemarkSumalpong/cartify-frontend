import HomeCard from './HomeCard';

const CardContainer = () => {
  return (
    <section className="py-5" id="shop">
      <h4 className="text-center justify-center text-3xl font-semibold text-gray/70">
        Our Products
      </h4>
      <div className="container mx-auto px-4 lg:px-4 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
