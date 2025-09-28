import { Link } from "react-router-dom"

const HomeCard = () => {
  return (
     <Link>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-[14rem] lg:max-w-[16rem] h-auto shadow-lg rounded-md cursor-pointer flex flex-col">
        {/* Image */}
        <div className="w-full h-40 flex items-center justify-center rounded-t-md bg-white">
          <img
            src={''}
            alt={''}
            className="max-h-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <h3 className="mt-2 text-sm font-medium line-clamp-2 h-10 text-center">
            {''} Product Name
          </h3>

          <div className="flex justify-center items-center mt-4">
            <p className="text-yellow-700 font-semibold">
              {''} Product Price
            </p>

          
          </div>
        </div>
      </div>
      
    </Link>
  )
}

export default HomeCard