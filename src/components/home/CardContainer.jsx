import HomeCard from './HomeCard';

const CardContainer = () => {
  return (
    <section className="py-5" id="shop">
      <h4 className="text-center justify-center text-3xl font-semibold text-gray/70">
        Our Products
      </h4>
      <div className="container mx-auto px-4 lg:px-4 mt-5">
        <div className="flex justify-center gap-4">
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
