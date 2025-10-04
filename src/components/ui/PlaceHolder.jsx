import React from 'react';

const PlaceHolder = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-[14rem] lg:max-w-[16rem] h-auto shadow-lg rounded-md flex flex-col animate-pulse">
      <div className="w-full h-40 flex items-center justify-center rounded-t-md bg-gray-300"></div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
      </div>
    </div>
  );
};

export default PlaceHolder;
