const RelatedProducts = () => {
  return (
    <section className="py-3 bg-gray-200">
      <div className="container px-4 mt-3">
        <h2 className="font-bold text-4xl mb-4 text-center">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center"></div>
      </div>
    </section>
  );
};

export default RelatedProducts;
