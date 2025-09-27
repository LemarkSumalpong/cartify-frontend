import React from 'react'

const Header = () => {
  return (
    <header className='py-5 bg-blue-700'>
        <div className='container px-4 lg:px-4 py-5'>
            <div className='text-center text-white/90'>
            <h1 className='text-4xl font-bold'>Welcome to Your Favorite Store</h1>
            <p className='text-lg font-normal text-white mb-4'>Discover the Latest Trend</p>
            <a href="#shop" className=' text-black text-2xl  rounded-full bg-white px-3 py-2 shadow-md'>Shop Now</a>
            </div>
        </div>
    </header>
  )
}

export default Header