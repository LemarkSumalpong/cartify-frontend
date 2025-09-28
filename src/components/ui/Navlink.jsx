const Navlink = () => {
  return (
    <ul className="hidden md:flex gap-6 font-semibold uppercase text-gray-800/90 ">
    <li>
        <a href="#home" className='hover:text-gray-900/90'>Home</a>
    </li>
     <li>
        <a href="#shop" className='hover:text-gray-900/90'>Shop</a>
    </li>
     <li>
        <a href="#about" className='hover:text-gray-900/90'>About</a>
    </li>
     <li>
        <a href="#contact" className='hover:text-gray-900/90'>Contact</a>
    </li>
   </ul>
  )
}

export default Navlink