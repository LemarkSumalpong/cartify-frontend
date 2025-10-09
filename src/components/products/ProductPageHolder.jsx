const ProductPageHolder = () => {
  return (
      <div className="bg-white min-h-screen">
      <section className="py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 animate-pulse">
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-md md:max-w-full h-72 bg-gray-300 rounded-lg shadow-md"></div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
              <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
              
              <div className="flex gap-3">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>

              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <div className="h-10 w-20 bg-gray-300 rounded-md"></div>
                <div className="h-12 w-full sm:w-40 bg-gray-300 rounded-md"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPageHolder